"use client";
import React from "react";
import { Link } from "react-router-dom";

interface MenuItem {
  text: string;
  href: string;
}

interface NavigationProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
  menuItems: MenuItem[];
}

export const Navigation: React.FC<NavigationProps> = ({
  isMenuOpen,
  toggleMenu,
  closeMenu,
  menuItems,
}) => {
  return (
    <header className="fixed w-full bg-gray-900 border-b border-solid border-b-neutral-700 z-[100]">
      <nav
        className="flex relative justify-between items-center px-6 py-4 mx-auto my-0 max-w-screen-xl"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex gap-6 items-center">
          <div className="flex gap-4 items-center">
            <img
              alt="Break Them Down Logo"
              src="https://cdn.builder.io/api/v1/image/assets%2F41f741e823cc4e94baf452a17e418b14%2Fb2c12481d6a64aa2b592e164ec47be3a"
              className="object-cover overflow-hidden h-20 transition-all cursor-pointer aspect-square duration-[0.3s] ease-[ease] w-[150px]"
            />
          </div>
          <div className="flex gap-4 max-md:hidden">
            {menuItems.map((item, index) => (
                <Link
                    key={index}
                    to={item.href}
                    className="text-sm no-underline text-slate-300 cursor-pointer pointer-events-auto"
                    onClick={closeMenu}
                >
                  {item.text}
                </Link>
            ))}
          </div>
        </div>
        <div className="flex gap-4 items-center max-md:flex max-md:justify-end max-md:w-full">
          <button
            className="hidden max-md:block max-md:p-2 max-md:cursor-pointer max-md:border-[none] max-md:text-slate-300 max-md:z-[200]"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5 transition-all duration-[0.3s] ease-[ease]">
              <span
                className="block w-6 h-0.5 bg-current transition-transform duration-[0.3s] ease-[ease]"
                style={{
                  transform: isMenuOpen
                    ? "rotate(45deg) translate(5px, 5px)"
                    : "none",
                }}
              />
              <span
                className="block w-6 h-0.5 bg-current transition-opacity duration-[0.3s] ease-[ease]"
                style={{
                  opacity: isMenuOpen ? 0 : 1,
                }}
              />
              <span
                className="block w-6 h-0.5 bg-current transition-transform duration-[0.3s] ease-[ease]"
                style={{
                  transform: isMenuOpen
                    ? "rotate(-45deg) translate(5px, -5px)"
                    : "none",
                }}
              />
            </div>
          </button>
        </div>
        <div
          className={`fixed inset-0 bg-black bg-opacity-90 backdrop-blur-md p-6 transition-transform duration-300 ease-in-out z-[100] max-md:block ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{
            "@media (max-width: 991px)": {
              display: "block",
              position: "fixed",
              top: "0",
              left: "0",
              right: "0",
              bottom: "0",
              background: "rgba(8, 9, 10, 0.95)",
              backdropFilter: "blur(16px)",
              padding: "80px 24px 24px",
              transform: isMenuOpen ? "translateX(0)" : "translateX(100%)",
              transition: "transform 0.3s ease",
              zIndex: "100",
            },
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
        >
          {menuItems?.map((item, index) => (
            <a
              className="flex items-center px-6 py-4 text-2xl tracking-normal no-underline rounded-lg transition-all duration-[0.2s] ease-[ease] font-[510] text-neutral-400"
              key={index}
              href={item.href}
              onClick={closeMenu}
            >
              {item.text}
            </a>
          ))}
          <div className="mx-4 my-2 border-t border-solid border-t-white border-t-opacity-10" />
        </div>
      </nav>
    </header>
  );
};
