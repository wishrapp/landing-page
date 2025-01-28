import React from 'react';
import { Gift } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default function FAQ() {
  const faqs = [
    {
      question: "How does Wishr work?",
      answer: "Wishr lets you create and share wishlists for any occasion. Add items you'd love to receive, share your list with friends and family, and they can mark items as purchased to avoid duplicates."
    },
    {
      question: "Is Wishr free to use?",
      answer: "Yes, Wishr is completely free for basic use. We may introduce premium features in the future, but the core functionality will always remain free."
    },
    {
      question: "Can I create multiple wishlists?",
      answer: "Absolutely! You can create different wishlists for various occasions like birthdays, weddings, holidays, or any special event."
    },
    {
      question: "How do I share my wishlist?",
      answer: "Once you've created your wishlist, you'll get a unique link that you can share with anyone via email, text, or social media."
    },
    {
      question: "Can people see who bought what from my list?",
      answer: "No, purchases remain private. The item will simply be marked as 'purchased' to prevent duplicates, but the buyer's identity isn't revealed."
    }
  ];

  return (
    <>
      <SEO 
        title="Wishr FAQ - Your Questions Answered"
        description="Find answers to frequently asked questions about using Wishr, creating wishlists, and sharing with friends and family."
        canonical="https://wishr.com/faq"
      />
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        <Header />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <Gift className="w-16 h-16 text-purple-600 mx-auto mb-6" />
              <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
              <p className="text-xl text-gray-600">
                Got questions? We've got answers.
              </p>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                  <h2 className="text-xl font-semibold mb-3 text-purple-900">{faq.question}</h2>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}