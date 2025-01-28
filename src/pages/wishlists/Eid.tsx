import React from 'react';
import { Gift, Moon, Star, ShoppingBag } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';

export default function EidWishlist() {
  const features = [
    { icon: Moon, title: 'Eid Gift Registry', desc: 'Create a thoughtful list of Eid gifts for family and friends.' },
    { icon: Star, title: 'Special Occasions', desc: 'Perfect for both Eid al-Fitr and Eid al-Adha celebrations.' },
    { icon: ShoppingBag, title: 'Multi-Store Options', desc: 'Add items from any store to your Eid wishlist.' },
  ];

  return (
    <>
      <SEO 
        title="Eid Gift Registry & Wishlist Creator | Eid Gift List - Wishr"
        description="Create the perfect Eid gift registry with Wishr. Make it easy for family and friends to choose meaningful Eid gifts that celebrate this special occasion."
        canonical="https://wishr.com/wishlist/eid"
      />
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        <Header />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Gift className="w-16 h-16 text-purple-600 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Create Your Eid Gift Registry
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Make your Eid celebrations even more special with a thoughtfully curated gift registry. 
                Help family and friends choose meaningful gifts that bring joy to this blessed occasion.
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
              <h2 className="text-3xl font-bold mb-6 text-center">Popular Eid Gift Ideas</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Traditional Gifts</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Islamic art and calligraphy</li>
                    <li>• Prayer accessories</li>
                    <li>• Traditional clothing</li>
                    <li>• Perfumes and attar</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Modern Gifts</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Electronics and gadgets</li>
                    <li>• Books and stationery</li>
                    <li>• Home decor items</li>
                    <li>• Gift cards and vouchers</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://app.wishr.com/create/eid"
                className="inline-block px-8 py-4 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition text-lg font-semibold"
              >
                Create Your Eid Gift List
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}