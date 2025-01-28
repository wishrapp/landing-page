import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Privacy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import NotFound from './pages/NotFound';
import BirthdayWishlist from './pages/wishlists/Birthday';
import WeddingWishlist from './pages/wishlists/Wedding';
import BabyShowerWishlist from './pages/wishlists/BabyShower';
import ChristeningWishlist from './pages/wishlists/Christening';
import EidWishlist from './pages/wishlists/Eid';
import ChristmasWishlist from './pages/wishlists/Christmas';
import BatMitzvahWishlist from './pages/wishlists/BatMitzvah';
import GraduationWishlist from './pages/wishlists/Graduation';
import ValentinesDayWishlist from './pages/wishlists/ValentinesDay';
import HousewarmingWishlist from './pages/wishlists/Housewarming';
import Occasions from './pages/wishlists/Occasions';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/wishlist/birthday" element={<BirthdayWishlist />} />
      <Route path="/wishlist/wedding" element={<WeddingWishlist />} />
      <Route path="/wishlist/baby-shower" element={<BabyShowerWishlist />} />
      <Route path="/wishlist/christening" element={<ChristeningWishlist />} />
      <Route path="/wishlist/eid" element={<EidWishlist />} />
      <Route path="/wishlist/christmas" element={<ChristmasWishlist />} />
      <Route path="/wishlist/bat-mitzvah" element={<BatMitzvahWishlist />} />
      <Route path="/wishlist/graduation" element={<GraduationWishlist />} />
      <Route path="/wishlist/valentines-day" element={<ValentinesDayWishlist />} />
      <Route path="/wishlist/housewarming" element={<HousewarmingWishlist />} />
      <Route path="/wishlist/occasions" element={<Occasions />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;