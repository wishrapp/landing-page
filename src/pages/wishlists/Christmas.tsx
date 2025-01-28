import React from 'react';
import { Gift, Trees, Star, Heart } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';

export default function ChristmasWishlist() {
  const features = [
    { icon: Trees, title: 'Christmas Gift List', desc: 'Create your perfect Christmas wishlist with gifts for all budgets.' },
    { icon: Star, title: 'Secret Santa', desc: 'Perfect for organizing Secret Santa gift exchanges with friends or colleagues.' },
    { icon: Heart, title: 'Family Sharing', desc: 'Share your Christmas list with family members near and far.' },
  ];

  return (
    <>
      <SEO 
        title="Christmas Wishlist Creator | Holiday Gift List - Wishr"
        description="Create and share your Christmas wishlist with Wishr. Make holiday gift-giving easier for family and friends with our simple Christmas gift registry."
        canonical="https://wishr.com/wishlist/christmas"
      />
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        <Header />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Gift className="w-16 h-16 text-purple-600 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Create Your Christmas Wishlist
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Make Christmas gift-giving magical this year. Create and share your wishlist with loved ones, 
                organize Secret Santa exchanges, and ensure everyone gets presents they'll love.
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
              <h2 className="text-3xl font-bold mb-6 text-center">Christmas Gift Categories</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Popular Categories</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Electronics and gadgets</li>
                    <li>• Books and entertainment</li>
                    <li>• Fashion and accessories</li>
                    <li>• Home and kitchen items</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Special Features</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Secret Santa organization</li>
                    <li>• Multiple list sharing</li>
                    <li>• Budget setting options</li>
                    <li>• Gift purchase tracking</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://app.wishr.com/create/christmas"
                className="inline-block px-8 py-4 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition text-lg font-semibold"
              >
                Create Your Christmas List
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}