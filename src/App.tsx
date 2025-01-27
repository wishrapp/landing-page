import React, { useRef } from 'react';
import SEO from './components/SEO';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import HowItWorks from './components/HowItWorks';
import ComingSoon from './components/ComingSoon';
import WaitlistForm from './components/WaitlistForm';
import Footer from './components/Footer';
import CookieConsentBanner from './components/CookieConsent';

function App() {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <SEO />
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        <Header />
        <Hero onJoinWaitlist={scrollToForm} />
        <Features />
        <Testimonials />
        <HowItWorks />
        <ComingSoon />
        <WaitlistForm formRef={formRef} />
        <Footer />
        <CookieConsentBanner />
      </div>
    </>
  );
}

export default App;