import React from 'react';
import { Gift, Baby, Heart, ShoppingBag } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';

export default function BabyShowerWishlist() {
  const features = [
    { icon: Baby, title: 'Baby Essentials Registry', desc: 'Create a comprehensive list of everything needed for your new arrival.' },
    { icon: Heart, title: 'Group Gifting', desc: 'Let friends and family contribute together for bigger items like strollers or cribs.' },
    { icon: ShoppingBag, title: 'Multi-Store Registry', desc: 'Add items from any store to create your perfect baby registry.' },
  ];

  return (
    <>
      <SEO 
        title="Baby Shower Registry & Wishlist Creator | Baby Gift List - Wishr"
        description="Create the perfect baby shower registry with Wishr. Make it easy for loved ones to choose baby gifts you need, from essentials to special items for your new arrival."
        canonical="https://wishr.com/wishlist/baby-shower"
      />
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        <Header />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Gift className="w-16 h-16 text-purple-600 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Create Your Baby Shower Registry
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Welcome your little one with everything they need. Create a baby shower registry that 
                makes it easy for loved ones to choose the perfect gifts for your new arrival.
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
              <h2 className="text-3xl font-bold mb-6 text-center">Essential Baby Registry Categories</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Must-Have Items</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Nursery furniture and decor</li>
                    <li>• Feeding essentials</li>
                    <li>• Diapers and changing supplies</li>
                    <li>• Baby clothes and accessories</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Nice-to-Have Items</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Baby carriers and wraps</li>
                    <li>• Educational toys</li>
                    <li>• Books and keepsakes</li>
                    <li>• Special occasion outfits</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://app.wishr.com/create/baby-shower"
                className="inline-block px-8 py-4 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition text-lg font-semibold"
              >
                Create Your Baby Registry
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}