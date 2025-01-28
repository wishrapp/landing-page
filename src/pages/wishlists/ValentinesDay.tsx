import React from 'react';
import { Gift, Heart, Star, Sparkles } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';

export default function ValentinesDayWishlist() {
  const features = [
    { icon: Heart, title: 'Romantic Gifts', desc: 'Create a wishlist of thoughtful Valentine\'s Day gift ideas.' },
    { icon: Star, title: 'Special Moments', desc: 'Include experiences and memorable gifts for your loved one.' },
    { icon: Sparkles, title: 'Personal Touch', desc: 'Add personalized items that show how much you care.' },
  ];

  return (
    <>
      <SEO 
        title="Valentine's Day Gift List Creator | Romantic Gift Registry - Wishr"
        description="Create the perfect Valentine's Day wishlist with Wishr. Share romantic gift ideas and make it easy for your loved one to choose something special."
        canonical="https://wishr.com/wishlist/valentines-day"
      />
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        <Header />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Gift className="w-16 h-16 text-purple-600 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Create Your Valentine's Day Wishlist
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Make this Valentine's Day extra special. Create a wishlist of romantic gifts and experiences 
                that will make your celebration unforgettable.
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
              <h2 className="text-3xl font-bold mb-6 text-center">Valentine's Gift Ideas</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Classic Romantic Gifts</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Jewelry and watches</li>
                    <li>• Perfumes and fragrances</li>
                    <li>• Fashion accessories</li>
                    <li>• Romantic experiences</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Unique Ideas</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Personalized items</li>
                    <li>• Couple's activities</li>
                    <li>• Tech gadgets</li>
                    <li>• Wellness experiences</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://app.wishr.com/create/valentines-day"
                className="inline-block px-8 py-4 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition text-lg font-semibold"
              >
                Create Your Valentine's Day List
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}