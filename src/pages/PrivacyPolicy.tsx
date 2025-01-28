import React from 'react';
import { Shield } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default function PrivacyPolicy() {
  return (
    <>
      <SEO 
        title="Privacy Policy - Wishr"
        description="Learn about how Wishr collects, uses, and protects your personal information."
        canonical="https://wishr.com/privacy"
      />
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        <Header />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <Shield className="w-16 h-16 text-purple-600 mx-auto mb-6" />
              <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
              <p className="text-gray-600">Last updated: March 15, 2024</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="prose lg:prose-xl max-w-none">
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4 text-purple-900">1. Introduction</h2>
                  <p className="text-gray-700">
                    At Wishr ("we," "our," or "us"), we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4 text-purple-900">2. Information We Collect</h2>
                  <h3 className="text-xl font-semibold mb-2 text-purple-800">2.1 Personal Information</h3>
                  <p className="text-gray-700 mb-4">We collect information that you provide directly to us, including:</p>
                  <ul className="list-disc ml-6 mb-4 text-gray-700">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Wishlist content</li>
                    <li>Account preferences</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-2 text-purple-800">2.2 Automatically Collected Information</h3>
                  <p className="text-gray-700 mb-4">When you use our service, we automatically collect:</p>
                  <ul className="list-disc ml-6 mb-4 text-gray-700">
                    <li>Device information</li>
                    <li>Log data</li>
                    <li>Usage information</li>
                    <li>Cookies and similar technologies</li>
                  </ul>
                </section>

                {/* Continue with other sections as in the original file, but with consistent styling */}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}