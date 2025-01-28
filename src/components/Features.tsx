import React from 'react';
import { Gift, Users, Bell, Palette, Share2, Calendar } from 'lucide-react';

const features = [
  { 
    icon: Gift, 
    title: 'Create Your Wish List', 
    desc: 'Build your perfect wishlist for birthdays, weddings, holidays, and more. Wishr makes it easy to organize all your wishes in one place.' 
  },
  { 
    icon: Users, 
    title: 'Collaborative Gifting', 
    desc: 'Share your wishr wishlist with family and friends. Group together to contribute towards bigger gifts with ease.' 
  },
  { 
    icon: Bell, 
    title: 'Smart Wishlist Tracking', 
    desc: 'Get real-time updates when items from your wish list are purchased. No more duplicate gifts!' 
  },
  { 
    icon: Palette, 
    title: 'Perfect Match Every Time', 
    desc: 'Your Wishr wish list ensures you get gifts in the right color and size, exactly as you want them.' 
  },
  { 
    icon: Share2, 
    title: 'Easy Wishlist Sharing', 
    desc: 'Share your wishlist with anyone, anywhere. Perfect for distant family and friends who want to find the right gift.' 
  },
  { 
    icon: Calendar, 
    title: 'For Every Occasion', 
    desc: 'From birthdays to baby showers, your Wishr wishlist makes gift-giving simple and stress-free.' 
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Why Choose Wishr?</h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Create and manage your wish list with the most intuitive wishlist platform. 
          Wishr helps you organize your wishes and share them with loved ones.
        </p>
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