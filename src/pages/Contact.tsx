// Update the fetch URL in the handleSubmit function
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!recaptchaToken) {
    setSubmitStatus({
      type: 'error',
      message: 'Please complete the reCAPTCHA verification'
    });
    return;
  }

  setIsSubmitting(true);
  setSubmitStatus({ type: null, message: '' });

  try {
    const response = await fetch('/.netlify/functions/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        recaptchaToken
      }),
    });

    const data = await response.json();

    if (response.ok) {
      setSubmitStatus({
        type: 'success',
        message: 'Thanks for your message! We\'ll get back to you soon.',
      });
      setFormData({
        name: '',
        email: '',
        messageType: '',
        message: ''
      });
      setRecaptchaToken(null);
    } else {
      throw new Error(data.error || 'Failed to send message');
    }
  } catch (error) {
    console.error('Contact form error:', error);
    setSubmitStatus({
      type: 'error',
      message: error instanceof Error 
        ? error.message 
        : 'Unable to send message. Please try again later or contact support@wishr.com directly.',
    });
  } finally {
    setIsSubmitting(false);
  }
};

export default handleSubmit