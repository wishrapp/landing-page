import React, { useState, useRef } from 'react';
import { Gift, Users, Bell, Palette, Share2, Calendar, ChevronRight, Apple, PlayCircle } from 'lucide-react';
import { SocialIcon } from 'react-social-icons';
import CookieConsentBanner from './components/CookieConsent';
import SEO from './components/SEO';

function App() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  
  const formRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thanks for signing up! Check your email for confirmation.',
        });
        setName('');
        setEmail('');
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

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <SEO />
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        {/* Header */}
        <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b border-purple-100">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Gift className="w-8 h-8 text-purple-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                wishr
              </span>
            </div>
            <div className="flex">
              <a
                href="https://app.wishr.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 md:px-6 md:py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition text-sm md:text-base"
              >
                Try the Web App (Beta)
              </a>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Your Wishlist, Your Way
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Avoid awkward gift-giving moments. Share your wishes, let loved ones contribute, and make gifting simple.
              </p>
              <div className="flex justify-center gap-4 mb-12">
                <button 
                  onClick={scrollToForm}
                  className="px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition flex items-center justify-center"
                >
                  Join the Waitlist <ChevronRight className="ml-2 w-4 h-4" />
                </button>
              </div>
              <img
                src="/gift-hands.webp"
                alt="Gift with purple ribbon"
                className="w-full rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Why Choose Wishr?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Gift, title: 'Create Your Wishlist', desc: 'Add items for birthdays, weddings, holidays, and more.' },
                { icon: Users, title: 'Collaborative Gifting', desc: 'Group together to buy expensive items with ease.' },
                { icon: Bell, title: 'Real-Time Tracking', desc: 'See what\'s been purchased, so duplicate purchases are avoided!' },
                { icon: Palette, title: 'Perfect Match', desc: 'Get your gift in the right colour, and the right size, first time!' },
                { icon: Share2, title: 'Seamless Sharing', desc: 'Share your wishlist with family, friends, and colleagues.' },
                { icon: Calendar, title: 'For Every Occasion', desc: 'From birthdays to baby showers, Wishr makes it easy.' },
              ].map((feature, i) => (
                <div key={i} className="p-6 rounded-xl bg-purple-50 hover:bg-purple-100 transition">
                  <feature.icon className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gradient-to-b from-white to-purple-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Love by Beta Testers!</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { quote: "Am loving this app so far. Whenever I come across something I might like, I add it to my wish list, and when it gets closer to Christmas I'll share it with my boyfriend!", author: "Sarah J." },
                { quote: "Now I won't end up with rubbish I don't want on my birthday! This app means I'll get things I actually will use and wear!", author: "Michael R." },
              ].map((testimonial, i) => (
                <blockquote key={i} className="p-6 bg-white rounded-xl shadow-lg">
                  <p className="text-lg mb-4">"{testimonial.quote}"</p>
                  <footer className="font-medium text-purple-600">– {testimonial.author}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">How Does Wishr Work?</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  "Create your wishlist for any occasion.",
                  "Share your wishlist with loved ones.",
                  "Loved ones can view, purchase, and contribute to expensive items.",
                ].map((step, i) => (
                  <div key={i} className="text-center">
                    <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {i + 1}
                    </div>
                    <p className="text-lg">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Coming Soon */}
        <section className="py-20 bg-purple-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Coming Soon to iOS and Android!</h2>
            <p className="text-xl mb-8">Be the first to download Wishr from the App Store and Google Play.</p>
            <div className="flex justify-center space-x-4 mb-12">
              <a 
                href="https://apps.apple.com/us/app/amazon-shopping/id297606951"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-white text-purple-900 rounded-lg hover:bg-gray-100 transition"
              >
                <Apple className="w-6 h-6" />
                <span>App Store</span>
              </a>
              <a 
                href="https://play.google.com/store/apps/details/Boutique_Amazon?id=com.amazon.mShop.android.shopping"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-white text-purple-900 rounded-lg hover:bg-gray-100 transition"
              >
                <PlayCircle className="w-6 h-6" />
                <span>Google Play</span>
              </a>
            </div>
          </div>
        </section>

        {/* Email Capture */}
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
                  disabled={isSubmitting}
                  className={`w-full px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Signing up...' : 'Notify Me'}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white border-t border-purple-100">
          <div className="container mx-auto px-4 py-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Gift className="w-6 h-6 text-purple-600" />
                  <span className="text-xl font-bold">wishr</span>
                </div>
                <p className="text-gray-600">Your wish list, your way.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <SocialIcon 
                    url="https://instagram.com/"
                    network="instagram" 
                    fgColor="#9333EA" 
                    bgColor="transparent"
                    style={{ height: 32, width: 32 }}
                  />
                  <SocialIcon 
                    url="https://x.com/wishr_com"
                    network="x" 
                    fgColor="#9333EA" 
                    bgColor="transparent"
                    style={{ height: 32, width: 32 }}
                  />
                  <SocialIcon 
                    url="https://facebook.com"
                    network="facebook" 
                    fgColor="#9333EA" 
                    bgColor="transparent"
                    style={{ height: 32, width: 32 }}
                  />
                  <SocialIcon 
                    url="https://youtube.com"
                    network="youtube" 
                    fgColor="#9333EA" 
                    bgColor="transparent"
                    style={{ height: 32, width: 32 }}
                  />
                  <SocialIcon 
                    url="https://www.tiktok.com/@wishr_com"
                    network="tiktok" 
                    fgColor="#9333EA" 
                    bgColor="transparent"
                    style={{ height: 32, width: 32 }}
                  />
                </div>
              </div>
              <div>
                <p className="text-gray-600">© 2025 Wishr.com. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>

        {/* Cookie Consent Banner */}
        <CookieConsentBanner />
      </div>
    </>
  );
}

export default App;