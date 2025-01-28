import React from 'react';
import { ChevronRight } from 'lucide-react';

interface HeroProps {
  onJoinWaitlist: () => void;
}

export default function Hero({ onJoinWaitlist }: HeroProps) {
  return (
    <section className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Wishr: The Ultimate Wish List Creator
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Create and share wishlists for any occasion. Make gift-giving simple with personalized wish lists for birthdays, weddings, holidays, and more.
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <button 
              onClick={onJoinWaitlist}
              className="px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition flex items-center justify-center"
            >
              Join the Waitlist <ChevronRight className="ml-2 w-4 h-4" />
            </button>
          </div>
          <div className="relative w-full">
            <img
              src="/gifthands.webp"
              alt="Create your perfect wishlist with Wishr - Gift with purple ribbon"
              className="w-full h-auto rounded-xl shadow-2xl"
              loading="eager"
              onError={(e) => {
                console.error('Image failed to load:', e);
                const img = e.target as HTMLImageElement;
                img.style.display = 'none';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}