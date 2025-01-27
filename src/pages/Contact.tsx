import React from 'react';
import SEO from '../components/SEO';

export default function Contact() {
  return (
    <>
      <SEO 
        title="Contact Wishr - Get in Touch With Our Team"
        description="Have questions about Wishr? Get in touch with our team. We're here to help you make the most of your wishlist experience."
        canonical="https://wishr.com/contact"
      />
      <main className="min-h-screen bg-white py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
          <form className="space-y-6">
            {/* Add contact form here */}
          </form>
        </div>
      </main>
    </>
  );
}