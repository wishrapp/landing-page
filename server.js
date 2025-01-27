import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Client } from 'node-mailjet';

dotenv.config();

// Validate environment variables
const requiredEnvVars = [
  'MAILJET_API_KEY',
  'MAILJET_API_SECRET',
  'MAILJET_LIST_ID',
  'MAILJET_SENDER_EMAIL'
];

const missingEnvVars = requiredEnvVars.filter(varName => !process.env[varName]);
if (missingEnvVars.length > 0) {
  console.error('Missing required environment variables:', missingEnvVars);
  process.exit(1);
}

const app = express();
app.use(cors());
app.use(express.json());

const mailjet = new Client({
  apiKey: process.env.MAILJET_API_KEY,
  apiSecret: process.env.MAILJET_API_SECRET
});

app.post('/api/subscribe', async (req, res) => {
  console.log('Received subscription request:', { ...req.body, email: '***' });
  
  const { name, email } = req.body;

  if (!email || !name) {
    console.log('Missing required fields');
    return res.status(400).json({ error: 'Email and name are required' });
  }

  try {
    // Check if contact exists using a filter
    console.log('Checking if contact exists...');
    const contactResponse = await mailjet
      .get("contact")
      .request({
        Filters: {
          Email: email
        }
      });

    const contacts = contactResponse.body.Data;
    const contactExists = contacts.length > 0;
    console.log('Contact exists:', contactExists);

    if (!contactExists) {
      // Add contact to Mailjet if they don't exist
      console.log('Adding new contact to Mailjet...');
      await mailjet
        .post("contact")
        .request({
          Email: email,
          Name: name,
          IsExcludedFromCampaigns: false
        });
      console.log('Contact created successfully');
    } else {
      console.log('Contact already exists, updating name...');
      const contactId = contacts[0].ID;
      await mailjet
        .put("contact")
        .id(contactId)
        .request({
          Name: name
        });
      console.log('Contact updated successfully');
    }

    // Add or update contact in the list
    console.log('Adding/updating contact in list...');
    try {
      await mailjet
        .post("listrecipient")
        .request({
          ContactAlt: email,
          ListID: parseInt(process.env.MAILJET_LIST_ID, 10),
          IsUnsubscribed: false
        });
      console.log('Contact added/updated in list successfully');
    } catch (error) {
      // If contact is already in list, this is fine
      if (!error.message?.includes('already exists')) {
        throw error;
      }
      console.log('Contact already in list');
    }

    // Send welcome email only for new subscribers
    if (!contactExists) {
      console.log('Preparing to send welcome email...');
      console.log('Using sender email:', process.env.MAILJET_SENDER_EMAIL);
      
      try {
        const emailResponse = await mailjet
          .post("send", { version: 'v3.1' })
          .request({
            Messages: [
              {
                From: {
                  Email: process.env.MAILJET_SENDER_EMAIL,
                  Name: "Wishr"
                },
                To: [
                  {
                    Email: email,
                    Name: name
                  }
                ],
                Subject: "Welcome to Wishr!",
                TextPart: `Hi ${name},\n\nThank you for joining the Wishr waitlist! We'll keep you updated on our launch.\n\nBest regards,\nThe Wishr Team`,
                HTMLPart: `
                  <h3>Welcome to Wishr!</h3>
                  <p>Hi ${name},</p>
                  <p>Thank you for joining the Wishr waitlist! We'll keep you updated on our launch.</p>
                  <p>Best regards,<br>The Wishr Team</p>
                `
              }
            ]
          });
        
        console.log('Welcome email sent successfully. Response:', emailResponse.body);
      } catch (emailError) {
        console.error('Failed to send welcome email:', {
          error: emailError,
          statusCode: emailError.statusCode,
          response: emailError.response?.body
        });
        // Don't throw the error - we still want to return success for the subscription
      }
    }

    const message = contactExists 
      ? 'You\'re already on our waitlist! We\'ve updated your information.'
      : 'Successfully subscribed! Check your email for confirmation.';

    res.status(200).json({ message });
    
  } catch (error) {
    console.error('Subscription error:', {
      message: error.message,
      statusCode: error.statusCode,
      response: error.response?.body
    });
    
    if (error.statusCode === 400) {
      return res.status(400).json({ error: 'Invalid email address.' });
    }

    if (error.statusCode === 401) {
      console.error('Authentication failed with Mailjet');
      return res.status(500).json({ error: 'Server configuration error.' });
    }

    res.status(500).json({ 
      error: 'Failed to subscribe. Please try again.',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Environment:', {
    MAILJET_LIST_ID: process.env.MAILJET_LIST_ID,
    MAILJET_SENDER_EMAIL: process.env.MAILJET_SENDER_EMAIL,
    NODE_ENV: process.env.NODE_ENV
  });
});