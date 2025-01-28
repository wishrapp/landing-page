import React from 'react';
import { Scale } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default function Terms() {
  return (
    <>
      <SEO 
        title="Terms of Service - Wishr"
        description="Read our terms of service to understand the rules and guidelines for using Wishr."
        canonical="https://wishr.com/terms"
      />
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        <Header />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <Scale className="w-16 h-16 text-purple-600 mx-auto mb-6" />
              <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
              <p className="text-gray-600">Last updated: March 15, 2024</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="prose lg:prose-xl max-w-none">
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4 text-purple-900">1. Acceptance of Terms</h2>
                  <p className="text-gray-700">
                    By accessing and using Wishr ("we," "our," or "us"), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4 text-purple-900">2. Use License</h2>
                  <p className="text-gray-700">
                    Permission is granted to temporarily download one copy of the materials (information or software) on Wishr's website for personal, non-commercial transitory viewing only.
                  </p>
                  <p className="text-gray-700 mt-4">This license shall automatically terminate if you violate any of these restrictions and may be terminated by Wishr at any time.</p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4 text-purple-900">3. User Accounts</h2>
                  <p className="text-gray-700">
                    When you create an account with us, you must provide accurate, complete, and current information. You are responsible for safeguarding the password and for all activities that occur under your account.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4 text-purple-900">4. Prohibited Uses</h2>
                  <p className="text-gray-700 mb-4">You may not use Wishr for any of the following purposes:</p>
                  <ul className="list-disc ml-6 mb-4 text-gray-700">
                    <li>Any unlawful purpose</li>
                    <li>To harass, abuse, or harm others</li>
                    <li>To impersonate any person or entity</li>
                    <li>To interfere with or disrupt the service</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4 text-purple-900">5. Modifications</h2>
                  <p className="text-gray-700">
                    Wishr reserves the right to revise these terms of service at any time without notice. By using this website, you agree to be bound by the current version of these terms of service.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4 text-purple-900">6. Contact Information</h2>
                  <p className="text-gray-700">
                    If you have any questions about these Terms of Service, please contact us at support@wishr.com.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}