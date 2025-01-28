import React from 'react';
import { Link } from 'react-router-dom';
import { Gift } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO 
        title="Page Not Found - Wishr"
        description="The page you're looking for doesn't exist. Return to Wishr's homepage to continue exploring."
        canonical="https://wishr.com/404"
      />
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        <Header />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <Gift className="w-24 h-24 text-purple-600 mx-auto mb-8" />
              <h1 className="text-4xl font-bold text-purple-900 mb-6">Oops! Page Not Found</h1>
              <div className="bg-white rounded-xl shadow-md p-8 mb-8">
                <p className="text-xl text-purple-800 mb-8">
                  Well, this isn't what you wished for! It looks like you've landed on a page that doesn't exist anymore, or never existed in the first place.
                </p>
                <p className="text-lg text-purple-700 mb-8 italic">
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
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}