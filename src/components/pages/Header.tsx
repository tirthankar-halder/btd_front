"use client";
import * as React from "react";
import { useState } from "react";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full border-b border-solid backdrop-blur-[20px] bg-neutral-950 bg-opacity-80 border-b-white border-b-opacity-10 z-[100]">
      <nav className="flex items-center justify-between px-6 py-4 mx-auto max-w-screen-xl">
        <button
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
          className="p-2 text-stone-50 hover:text-stone-300 transition-colors"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>

        {isMenuOpen && (
          <div
            className="absolute top-full left-0 w-full bg-neutral-950 border-b border-white border-opacity-10"
            role="menu"
            aria-orientation="vertical"
          >
            <div className="px-6 py-4 mx-auto max-w-screen-xl">
              <nav className="flex flex-col space-y-4">
                <a
                  href="#story"
                  className="text-stone-50 hover:text-stone-300 transition-colors"
                  role="menuitem"
                >
                  Our Story
                </a>
                <a
                  href="#mission"
                  className="text-stone-50 hover:text-stone-300 transition-colors"
                  role="menuitem"
                >
                  Our Mission
                </a>
                <a
                  href="#values"
                  className="text-stone-50 hover:text-stone-300 transition-colors"
                  role="menuitem"
                >
                  Our Values
                </a>
              </nav>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
