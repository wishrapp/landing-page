import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Privacy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;