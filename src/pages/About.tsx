import React from 'react';
import SEO from '../components/SEO';

export default function About() {
  return (
    <>
      <SEO 
        title="About Wishr - The Story Behind Your Favorite Wishlist App"
        description="Learn about Wishr's mission to make gift-giving simple and delightful. Discover how we're transforming the way people create and share wishlists."
        canonical="https://wishr.com/about"
      />
      <main className="min-h-screen bg-white py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold mb-8">About Wishr</h1>
          <section className="prose lg:prose-xl">
            <p>
              Wishr was born from a simple idea: make gift-giving delightful again. 
              We believe that every gift should bring joy - both to the giver and the receiver.
            </p>
            {/* Add more content here */}
          </section>
        </div>
      </main>
    </>
  );
}