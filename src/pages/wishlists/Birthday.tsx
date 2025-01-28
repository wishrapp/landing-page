import React from 'react';
import { Gift, Cake, Share2, Bell } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';

export default function BirthdayWishlist() {
  const features = [
    { icon: Cake, title: 'Perfect Birthday Gifts', desc: 'Create your dream birthday wishlist with all the gifts you actually want.' },
    { icon: Share2, title: 'Easy Sharing', desc: 'Share your birthday wishlist with friends and family via email, WhatsApp, or social media.' },
    { icon: Bell, title: 'Gift Updates', desc: 'Get notified when someone purchases a gift from your list, avoiding duplicate gifts.' },
  ];

  return (
    <>
      <SEO 
        title="Birthday Wishlist Creator | Make Your Perfect Birthday Gift List - Wishr"
        description="Create your perfect birthday wishlist with Wishr. Share your birthday gift ideas with friends and family, track purchases, and ensure you get the presents you really want."
        canonical="https://wishr.com/wishlist/birthday"
      />
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        <Header />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Gift className="w-16 h-16 text-purple-600 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Create Your Perfect Birthday Wishlist
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Make your birthday extra special by creating a wishlist that ensures you get the gifts you really want. 
                No more awkward returns or duplicate presents!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {features.map((feature, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
                  <feature.icon className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-center">Why Create a Birthday Wishlist?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">For Gift Recipients</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Get gifts you actually want and will use</li>
                    <li>• Avoid duplicate gifts</li>
                    <li>• Make it easier for friends and family to choose</li>
                    <li>• Ensure correct sizes and preferences</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">For Gift Givers</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Know exactly what the birthday person wants</li>
                    <li>• See what others have already purchased</li>
                    <li>• Group gifting for expensive items</li>
                    <li>• Save time and avoid stress</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://app.wishr.com/create/birthday"
                className="inline-block px-8 py-4 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition text-lg font-semibold"
              >
                Create Your Birthday Wishlist
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}