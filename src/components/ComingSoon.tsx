import React from 'react';
import { Apple, PlayCircle } from 'lucide-react';

export default function ComingSoon() {
  return (
    <section className="py-20 bg-purple-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Coming Soon to iOS and Android!</h2>
        <p className="text-xl mb-8">Be the first to download Wishr from the App Store and Google Play.</p>
        <div className="flex justify-center space-x-4 mb-12">
          <a 
            href="https://apps.apple.com/us/app/amazon-shopping/id297606951"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-6 py-3 bg-white text-purple-900 rounded-lg hover:bg-gray-100 transition"
          >
            <Apple className="w-6 h-6" />
            <span>App Store</span>
          </a>
          <a 
            href="https://play.google.com/store/apps/details/Boutique_Amazon?id=com.amazon.mShop.android.shopping"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-6 py-3 bg-white text-purple-900 rounded-lg hover:bg-gray-100 transition"
          >
            <PlayCircle className="w-6 h-6" />
            <span>Google Play</span>
          </a>
        </div>
      </div>
    </section>
  );
}