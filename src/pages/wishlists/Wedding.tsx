import React from 'react';
import { Gift, Heart, Users, CreditCard } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';

export default function WeddingWishlist() {
  const features = [
    { icon: Heart, title: 'Wedding Registry Made Simple', desc: 'Create a beautiful wedding registry that reflects your style and needs.' },
    { icon: Users, title: 'Group Gifting', desc: 'Enable guests to contribute towards bigger items like honeymoon funds or furniture.' },
    { icon: CreditCard, title: 'Cash Gift Options', desc: 'Tactfully include cash gift options alongside traditional registry items.' },
  ];

  return (
    <>
      <SEO 
        title="Wedding Registry & Gift List Creator | Wedding Wishlist - Wishr"
        description="Create your perfect wedding registry with Wishr. Make it easy for guests to choose gifts you'll love, contribute to bigger items, and manage your wedding wishlist effortlessly."
        canonical="https://wishr.com/wishlist/wedding"
      />
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        <Header />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Gift className="w-16 h-16 text-purple-600 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Create Your Perfect Wedding Registry
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Start your new life together with gifts you'll truly cherish. Create a wedding registry that makes 
                gift-giving a joy for both you and your guests.
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
              <h2 className="text-3xl font-bold mb-6 text-center">The Modern Wedding Registry</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Registry Features</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Add items from any store</li>
                    <li>• Create honeymoon funds</li>
                    <li>• Enable group gifting</li>
                    <li>• Track thank-you notes</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Guest Benefits</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Easy-to-use interface</li>
                    <li>• Multiple price points</li>
                    <li>• Secure payments</li>
                    <li>• Mobile-friendly access</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://app.wishr.com/create/wedding"
                className="inline-block px-8 py-4 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition text-lg font-semibold"
              >
                Create Your Wedding Registry
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}