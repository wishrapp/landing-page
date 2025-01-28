import React from 'react';
import { Gift, Home, Coffee, Utensils } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';

export default function HousewarmingWishlist() {
  const features = [
    { icon: Home, title: 'New Home Essentials', desc: 'Create a wishlist of everything you need for your new home.' },
    { icon: Coffee, title: 'Room by Room', desc: 'Organize your wishlist by room to make shopping easier.' },
    { icon: Utensils, title: 'Home & Kitchen', desc: 'From cookware to decor, get everything you need to settle in.' },
  ];

  return (
    <>
      <SEO 
        title="Housewarming Gift Registry | New Home Wishlist - Wishr"
        description="Create the perfect housewarming registry with Wishr. Make it easy for friends and family to help you set up your new home with all the essentials."
        canonical="https://wishr.com/wishlist/housewarming"
      />
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        <Header />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Gift className="w-16 h-16 text-purple-600 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Create Your Housewarming Registry
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Moving into a new home is exciting! Create a registry that helps you get all the essentials 
                and special touches to make your new house feel like home.
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
              <h2 className="text-3xl font-bold mb-6 text-center">Room-by-Room Gift Guide</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Kitchen & Dining</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Cookware and bakeware</li>
                    <li>• Small appliances</li>
                    <li>• Dinnerware and utensils</li>
                    <li>• Storage solutions</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Living & Decor</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Home decor items</li>
                    <li>• Throw pillows and blankets</li>
                    <li>• Wall art and mirrors</li>
                    <li>• Area rugs and lighting</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://app.wishr.com/create/housewarming"
                className="inline-block px-8 py-4 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition text-lg font-semibold"
              >
                Create Your Housewarming Registry
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}