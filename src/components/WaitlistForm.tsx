import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

interface WaitlistFormProps {
  formRef: React.RefObject<HTMLDivElement>;
}

export default function WaitlistForm({ formRef }: WaitlistFormProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
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
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, recaptchaToken }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thanks for signing up! Check your email for confirmation.',
        });
        setName('');
        setEmail('');
        setRecaptchaToken(null);
      } else {
        throw new Error(data.error || 'Failed to subscribe');
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
    <section className="py-20 bg-purple-50" ref={formRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Get Notified When Wishr Launches!</h2>
          <p className="text-xl text-gray-600 mb-8">Sign up today to join the Wishr community and get early access.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
              disabled={isSubmitting}
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
              disabled={isSubmitting}
            />
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
              {isSubmitting ? 'Signing up...' : 'Notify Me'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}