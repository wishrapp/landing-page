import React from 'react';
import { Gift, Star, Heart, BookOpen } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';

export default function BatMitzvahWishlist() {
  const features = [
    { icon: Star, title: 'Coming of Age Gifts', desc: 'Create a meaningful wishlist for this important milestone.' },
    { icon: Heart, title: 'Traditional & Modern', desc: 'Combine traditional Judaica with contemporary gift ideas.' },
    { icon: BookOpen, title: 'Educational Gifts', desc: 'Include books, study materials, and meaningful keepsakes.' },
  ];

  return (
    <>
      <SEO 
        title="Bat Mitzvah Gift Registry | Jewish Celebration Gift List - Wishr"
        description="Create a meaningful Bat Mitzvah gift registry with Wishr. Help friends and family choose special gifts to celebrate this important Jewish coming-of-age milestone."
        canonical="https://wishr.com/wishlist/bat-mitzvah"
      />
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        <Header />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Gift className="w-16 h-16 text-purple-600 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Create Your Bat Mitzvah Gift Registry
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Celebrate this special coming-of-age milestone with meaningful gifts. Create a registry that 
                helps loved ones choose presents that honor this important Jewish tradition.
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
              <h2 className="text-3xl font-bold mb-6 text-center">Bat Mitzvah Gift Ideas</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Traditional Gifts</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Judaica and religious items</li>
                    <li>• Hebrew jewelry</li>
                    <li>• Prayer books and study materials</li>
                    <li>• Charitable donations (Tzedakah)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Modern Gifts</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Electronics and gadgets</li>
                    <li>• Experience gifts</li>
                    <li>• Fashion and accessories</li>
                    <li>• Israel bonds or savings</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://app.wishr.com/create/bat-mitzvah"
                className="inline-block px-8 py-4 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition text-lg font-semibold"
              >
                Create Your Bat Mitzvah Registry
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}