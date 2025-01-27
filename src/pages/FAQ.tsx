import React from 'react';
import SEO from '../components/SEO';

export default function FAQ() {
  const faqs = [
    {
      question: "How does Wishr work?",
      answer: "Wishr lets you create and share wishlists for any occasion. Add items you'd love to receive, share your list with friends and family, and they can mark items as purchased to avoid duplicates."
    },
    // Add more FAQs
  ];

  return (
    <>
      <SEO 
        title="Wishr FAQ - Your Questions Answered"
        description="Find answers to frequently asked questions about using Wishr, creating wishlists, and sharing with friends and family."
        canonical="https://wishr.com/faq"
      />
      <main className="min-h-screen bg-white py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-purple-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-2">{faq.question}</h2>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}