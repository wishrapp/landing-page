import React, { useState } from 'react';
import { Gift } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    messageType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

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
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
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
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Something went wrong. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO 
        title="Contact Wishr - Get in Touch With Our Team"
        description="Have questions about Wishr? Get in touch with our team. We're here to help you make the most of your wishlist experience."
        canonical="https://wishr.com/contact"
      />
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        <Header />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="text-center mb-12">
              <Gift className="w-16 h-16 text-purple-600 mx-auto mb-6" />
              <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
              <p className="text-xl text-gray-600">
                Have a question or feedback? We'd love to hear from you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-lg">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="messageType" className="block text-sm font-medium text-gray-700 mb-1">
                  Message Type *
                </label>
                <select
                  id="messageType"
                  required
                  value={formData.messageType}
                  onChange={(e) => setFormData({ ...formData, messageType: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  disabled={isSubmitting}
                >
                  <option value="">Select a message type</option>
                  <option value="work">I want to work with wishr.com</option>
                  <option value="issue">I want to report an issue with the app</option>
                  <option value="other">Something else</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  disabled={isSubmitting}
                />
              </div>

              <div className="flex justify-center">
                <ReCAPTCHA
                  sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                  onChange={(token) => setRecaptchaToken(token)}
                />
              </div>

              {submitStatus.type && (
                <div
                  className={`p-4 rounded-lg ${
                    submitStatus.type === 'success'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || !recaptchaToken}
                className={`w-full px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition ${
                  (isSubmitting || !recaptchaToken) ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}