import React from 'react';
import { Link } from 'react-router-dom';
import { Gift } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-purple-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <Gift className="w-24 h-24 text-purple-600 mx-auto mb-8" />
        <h1 className="text-4xl font-bold text-purple-900 mb-6">Oops!</h1>
        <p className="text-xl text-purple-800 mb-8">
          Well we're pretty sure this isn't what you wished for! It looks like you've landed on a page that doesn't exist any more, or never existed in the first place.
        </p>
        <img
          src="/empty-gift-box.jpg"
          alt="Empty gift box"
          className="w-64 h-64 object-cover mx-auto rounded-lg shadow-lg mb-8"
        />
        <p className="text-lg text-purple-700 mb-6 italic">
          In the words of the utterly fabulous Sophie Ellis-Bextor, "take me home!"
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}