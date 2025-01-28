import React from 'react';
import { Gift, GraduationCap, Briefcase, Compass } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';

export default function GraduationWishlist() {
  const features = [
    { icon: GraduationCap, title: 'Academic Achievement', desc: 'Create a wishlist to celebrate your educational milestone.' },
    { icon: Briefcase, title: 'Career Essentials', desc: 'Include items to help start your professional journey.' },
    { icon: Compass, title: 'Next Chapter', desc: 'Add gifts that will help you in your next life adventure.' },
  ];

  return (
    <>
      <SEO 
        title="Graduation Gift Registry | Graduate Wishlist Creator - Wishr"
        description="Create the perfect graduation gift registry with Wishr. Help friends and family choose gifts that celebrate your achievement and prepare you for your next chapter."
        canonical="https://wishr.com/wishlist/graduation"
      />
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        <Header />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Gift className="w-16 h-16 text-purple-600 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Create Your Graduation Gift Registry
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Celebrate your academic achievement and prepare for your next chapter. Create a graduation registry 
                that helps loved ones choose gifts that will support your future success.
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
              <h2 className="text-3xl font-bold mb-6 text-center">Graduation Gift Categories</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Professional Life</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Professional attire</li>
                    <li>• Laptop and tech essentials</li>
                    <li>• Office supplies</li>
                    <li>• Professional accessories</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Life Skills</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Financial planning tools</li>
                    <li>• Home essentials</li>
                    <li>• Travel gear</li>
                    <li>• Self-development resources</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://app.wishr.com/create/graduation"
                className="inline-block px-8 py-4 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition text-lg font-semibold"
              >
                Create Your Graduation Registry
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}