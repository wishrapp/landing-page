const Mailjet = require('node-mailjet');

exports.handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { name, email, messageType, message, recaptchaToken } = JSON.parse(event.body);

    // Validate inputs
    if (!name || !email || !messageType || !message || !recaptchaToken) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'All fields are required' })
      };
    }

    // Verify reCAPTCHA
    const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
    });

    const recaptchaData = await recaptchaResponse.json();
    if (!recaptchaData.success) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'reCAPTCHA verification failed' })
      };
    }

    // Initialize Mailjet
    const mailjet = new Mailjet({
      apiKey: process.env.MAILJET_API_KEY,
      apiSecret: process.env.MAILJET_API_SECRET
    });

    const messageTypeLabels = {
      work: 'Work Inquiry',
      issue: 'App Issue Report',
      other: 'General Inquiry'
    };

    // Send email
    await mailjet.post('send', { version: 'v3.1' }).request({
      Messages: [{
        From: {
          Email: process.env.MAILJET_SENDER_EMAIL,
          Name: 'Wishr Contact Form'
        },
        To: [{
          Email: 'support@wishr.com',
          Name: 'Wishr Support'
        }],
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
      }]
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Message sent successfully' })
    };
  } catch (error) {
    console.error('Contact form error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Failed to send message. Please try again later.' 
      })
    };
  }
};