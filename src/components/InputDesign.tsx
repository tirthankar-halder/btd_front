"use client";
import * as React from "react";
import { useState } from "react";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Features } from "./Features";
import { Footer } from "./Footer";

function InputDesign() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="min-h-screen bg-neutral-900 text-slate-300">
      <Header onMenuToggle={toggleMenu} isMenuOpen={isMenuOpen} />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

export default InputDesign;
