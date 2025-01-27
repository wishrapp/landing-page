import React from 'react';
import { Link } from 'react-router-dom';
import { Gift } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-purple-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <Gift className="w-24 h-24 text-purple-600 mx-auto mb-8" />
        <h1 className="text-6xl font-bold text-purple-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-purple-800 mb-4">Page Not Found</h2>
        <p className="text-purple-700 mb-8">
          Oops! The page you're looking for seems to have vanished like an unopened gift.
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