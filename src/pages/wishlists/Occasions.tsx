import React from 'react';
import { Link } from 'react-router-dom';
import { Gift, Calendar } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';

export default function Occasions() {
  const occasions = [
    { name: 'Birthday', path: '/wishlist/birthday', description: 'Create the perfect birthday wishlist for any age.' },
    { name: 'Wedding', path: '/wishlist/wedding', description: 'Start your new life together with a thoughtful wedding registry.' },
    { name: 'Baby Shower', path: '/wishlist/baby-shower', description: 'Prepare for your new arrival with a comprehensive baby registry.' },
    { name: 'Christening', path: '/wishlist/christening', description: 'Celebrate this special spiritual milestone with meaningful gifts.' },
    { name: 'Eid', path: '/wishlist/eid', description: 'Make your Eid celebrations even more special with a curated gift list.' },
    { name: 'Christmas', path: '/wishlist/christmas', description: 'Organize your holiday gift-giving with a Christmas wishlist.' },
    { name: 'Bat Mitzvah', path: '/wishlist/bat-mitzvah', description: 'Honor this important coming-of-age celebration with thoughtful gifts.' },
    { name: 'Graduation', path: '/wishlist/graduation', description: 'Celebrate academic achievement with gifts for the next chapter.' },
    { name: 'Valentine\'s Day', path: '/wishlist/valentines-day', description: 'Share romantic gift ideas for a special Valentine\'s Day.' },
    { name: 'Housewarming', path: '/wishlist/housewarming', description: 'Set up your new home with everything you need.' }
  ];

  return (
    <>
      <SEO 
        title="Gift Registry & Wishlist Creator for Every Occasion - Wishr"
        description="Create wishlists and gift registries for any occasion. From birthdays to weddings, baby showers to housewarmings, Wishr makes gift-giving simple and delightful."
        canonical="https://wishr.com/wishlist/occasions"
      />
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        <Header />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Calendar className="w-16 h-16 text-purple-600 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Create a Wishlist for Any Occasion
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Whatever you're celebrating, Wishr makes it easy to create and share the perfect gift list.
                Choose your occasion below to get started.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {occasions.map((occasion, index) => (
                <Link 
                  key={index}
                  to={occasion.path}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition group"
                >
                  <div className="flex items-start space-x-4">
                    <Gift className="w-8 h-8 text-purple-600 group-hover:text-purple-700 flex-shrink-0" />
                    <div>
                      <h2 className="text-xl font-semibold mb-2 text-purple-900 group-hover:text-purple-700">
                        {occasion.name}
                      </h2>
                      <p className="text-gray-600">{occasion.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}