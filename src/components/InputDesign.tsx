"use client";
import React, { useState } from "react";
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
    <div className="min-h-screen bg-neutral-900 text-slate-300">
      <Navigation
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        closeMenu={closeMenu}
        menuItems={menuItems}
      />
      <main>
        <HeroSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default InputDesign;
