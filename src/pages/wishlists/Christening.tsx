import React from 'react';
import { Gift, Cross, Star, Heart } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';

export default function ChristeningWishlist() {
  const features = [
    { icon: Cross, title: 'Special Occasion Gifts', desc: 'Create a wishlist of meaningful christening and baptism gifts.' },
    { icon: Star, title: 'Keepsake Ideas', desc: 'Include precious keepsakes that will be treasured for years to come.' },
    { icon: Heart, title: 'Family Traditions', desc: 'Honor family traditions with carefully selected christening gifts.' },
  ];

  return (
    <>
      <SEO 
        title="Christening Gift Registry | Baptism Gift List Creator - Wishr"
        description="Create a meaningful christening or baptism gift registry with Wishr. Help friends and family choose special gifts to celebrate this important milestone."
        canonical="https://wishr.com/wishlist/christening"
      />
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        <Header />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Gift className="w-16 h-16 text-purple-600 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Create Your Christening Gift Registry
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Celebrate this special spiritual milestone with meaningful gifts. Create a christening registry 
                that helps loved ones choose presents that will be cherished forever.
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
              <h2 className="text-3xl font-bold mb-6 text-center">Traditional Christening Gifts</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Keepsake Gifts</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Silver items and jewelry</li>
                    <li>• Photo frames and albums</li>
                    <li>• Religious items</li>
                    <li>• Personalized gifts</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Practical Gifts</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Special occasion outfits</li>
                    <li>• Baby blankets</li>
                    <li>• Children's bibles</li>
                    <li>• Savings bonds</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://app.wishr.com/create/christening"
                className="inline-block px-8 py-4 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition text-lg font-semibold"
              >
                Create Your Christening Registry
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}