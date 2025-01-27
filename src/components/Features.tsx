import React from 'react';
import { Gift, Users, Bell, Palette, Share2, Calendar } from 'lucide-react';

const features = [
  { icon: Gift, title: 'Create Your Wishlist', desc: 'Add items for birthdays, weddings, holidays, and more.' },
  { icon: Users, title: 'Collaborative Gifting', desc: 'Group together to buy expensive items with ease.' },
  { icon: Bell, title: 'Real-Time Tracking', desc: 'See what\'s been purchased, so duplicate purchases are avoided!' },
  { icon: Palette, title: 'Perfect Match', desc: 'Get your gift in the right colour, and the right size, first time!' },
  { icon: Share2, title: 'Seamless Sharing', desc: 'Share your wishlist with family, friends, and colleagues.' },
  { icon: Calendar, title: 'For Every Occasion', desc: 'From birthdays to baby showers, Wishr makes it easy.' },
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Why Choose Wishr?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="p-6 rounded-xl bg-purple-50 hover:bg-purple-100 transition">
              <feature.icon className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}