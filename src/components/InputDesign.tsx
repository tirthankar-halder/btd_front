"use client";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import { Feedback } from "./pages/Feedback";
import ContactUs from "./pages/ContactUs";
import { Navigation } from "./Navigation";
import { HeroSection } from "./HeroSection";
import { FeaturesSection } from "./FeaturesSection";
import { Footer } from "./Footer";

interface MenuItem {
  text: string;
  href: string;
}

const InputDesign: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = (): void => {
    setIsMenuOpen(false);
  };

  const menuItems: MenuItem[] = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "How it works",
      href: "/how-it-works",
    },
    {
      text: "About Us",
      href: "/about",
    },
    {
      text: "Contact",
      href: "/contact",
    },
  ];

  return (
      <Router>
    <div className="min-h-screen bg-neutral-900 text-slate-300">
      <Navigation
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        closeMenu={closeMenu}
        menuItems={menuItems}
      />
      <main>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/about" element={<About />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <FeaturesSection />
      </main>
      <Footer />
    </div>
        </Router>
  );
};

export default InputDesign;
