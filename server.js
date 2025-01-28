import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Client } from 'node-mailjet';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const mailjet = new Client({
  apiKey: process.env.MAILJET_API_KEY,
  apiSecret: process.env.MAILJET_API_SECRET
});

// Verify reCAPTCHA token
async function verifyRecaptcha(token) {
  try {
    const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    });

    const recaptchaData = await recaptchaResponse.json();
    return recaptchaData.success;
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return false;
  }
}

app.post('/api/subscribe', async (req, res) => {
  const { name, email, recaptchaToken } = req.body;

  if (!name || !email || !recaptchaToken) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Verify reCAPTCHA
  const isRecaptchaValid = await verifyRecaptcha(recaptchaToken);
  if (!isRecaptchaValid) {
    return res.status(400).json({ error: 'reCAPTCHA verification failed' });
  }

  try {
    // Check if contact exists
    const contactResponse = await mailjet
      .get("contact")
      .request({
        Filters: {
          Email: email
        }
      });

    const contacts = contactResponse.body.Data;
    const contactExists = contacts.length > 0;

    if (!contactExists) {
      // Add contact to Mailjet
      await mailjet
        .post("contact")
        .request({
          Email: email,
          Name: name,
          IsExcludedFromCampaigns: false
        });
    } else {
      // Update existing contact
      const contactId = contacts[0].ID;
      await mailjet
        .put("contact")
        .id(contactId)
        .request({
          Name: name
        });
    }

    // Add or update contact in the list
    try {
      await mailjet
        .post("listrecipient")
        .request({
          ContactAlt: email,
          ListID: parseInt(process.env.MAILJET_LIST_ID, 10),
          IsUnsubscribed: false
        });
    } catch (error) {
      if (!error.message?.includes('already exists')) {
        throw error;
      }
    }

    // Send welcome email only for new subscribers
    if (!contactExists) {
      await mailjet
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
    }

    const message = contactExists 
      ? 'You\'re already on our waitlist! We\'ve updated your information.'
      : 'Successfully subscribed! Check your email for confirmation.';

    res.status(200).json({ message });
    
  } catch (error) {
    console.error('Subscription error:', error);
    
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

app.post('/api/contact', async (req, res) => {
  const { name, email, messageType, message, recaptchaToken } = req.body;

  if (!name || !email || !messageType || !message || !recaptchaToken) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Verify reCAPTCHA
  const isRecaptchaValid = await verifyRecaptcha(recaptchaToken);
  if (!isRecaptchaValid) {
    return res.status(400).json({ error: 'reCAPTCHA verification failed' });
  }

  try {
    const messageTypeLabels = {
      work: 'Work Inquiry',
      issue: 'App Issue Report',
      other: 'General Inquiry'
    };

    await mailjet
      .post('send', { version: 'v3.1' })
      .request({
        Messages: [
          {
            From: {
              Email: process.env.MAILJET_SENDER_EMAIL,
              Name: 'Wishr Contact Form'
            },
            To: [
              {
                Email: 'support@wishr.com',
                Name: 'Wishr Support'
              }
            ],
            Subject: `[${messageTypeLabels[messageType]}] New message from ${name}`,
            TextPart: `
Name: ${name}
Email: ${email}
Type: ${messageTypeLabels[messageType]}

Message:
${message}
            `,
            HTMLPart: `
<h3>New Contact Form Submission</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Type:</strong> ${messageTypeLabels[messageType]}</p>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br>')}</p>
            `
          }
        ]
      });

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Failed to send email:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});