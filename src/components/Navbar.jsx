"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [shouldShowNav, setShouldShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight; // 100vh
      const heroThreshold = heroHeight * 0.9; // 90% of hero section

      // Show navbar only when 90% of hero is scrolled past
      setShouldShowNav(scrollY > heroThreshold);

      // Calculate scroll progress for the morphing animation
      // Start calculating only after navbar appears
      if (scrollY > heroThreshold) {
        const progressStart = heroThreshold;
        const maxScroll = 800; // Range for the morph animation
        const progress = Math.min((scrollY - progressStart) / maxScroll, 1);
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Run once on mount to check initial position
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate dynamic values based on scroll progress
  const borderRadius = `${50 - scrollProgress * 50}px`;
  const maxWidth = scrollProgress === 1 ? "100%" : `${60 + scrollProgress * 40}%`;
  const padding = `${24 - scrollProgress * 8}px`;
  const innerPadding = `${16 - scrollProgress * 4}px ${32 - scrollProgress * 8}px`;

  return (
    <>
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[60] md:hidden">
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between px-6 py-6">
              <img
                src="/adf-logo.png"
                alt="Brand Logo"
                className="h-8 w-auto"
              />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Menu Links */}
            <div className="flex flex-col items-center justify-center flex-1 space-y-8 px-6">
              <a
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-white text-2xl font-medium hover:text-gray-300 transition-colors"
              >
                Home
              </a>
              
              <a
                href="#about"
                onClick={() => setIsMenuOpen(false)}
                className="text-white text-2xl font-medium hover:text-gray-300 transition-colors"
              >
                About
              </a>
              
              <a
                href="#services"
                onClick={() => setIsMenuOpen(false)}
                className="text-white text-2xl font-medium hover:text-gray-300 transition-colors"
              >
                Services
              </a>
              
              <a
                href="/portfolio"
                onClick={() => setIsMenuOpen(false)}
                className="text-white text-2xl font-medium hover:text-gray-300 transition-colors"
              >
                Portfolio
              </a>
              
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-white text-2xl font-medium hover:text-gray-300 transition-colors"
              >
                Contact
              </a>
              
              <button
                onClick={() => setIsMenuOpen(false)}
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-12 py-4 rounded-full text-lg font-medium transition-all duration-300 border border-white/20 mt-8"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Fixed Hamburger Button - Mobile Only (Right side) */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`md:hidden fixed right-2 top-6 z-50 bg-black/40 backdrop-blur-md border border-white/10 text-white p-3 rounded-full hover:bg-black/60 transition-all duration-700 ${
          shouldShowNav ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0 pointer-events-none"
        }`}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Glass Navigation Bar - Desktop Only */}
      <nav
        className={`hidden md:block fixed top-0 left-0 right-0 z-50 px-4 transition-all duration-700 ease-out ${
          shouldShowNav ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0 pointer-events-none"
        }`}
        style={{
          paddingTop: padding,
          paddingBottom: padding,
        }}
      >
        <div
          className="bg-black/80 opacity-70 backdrop-blur-md border border-white/10 shadow-2xl mx-auto transition-all duration-150 ease-out"
          style={{
            maxWidth: maxWidth,
            borderRadius: borderRadius,
            padding: innerPadding,
          }}
        >
          <div className="flex items-center justify-between">
            {/* Left - Branding */}
            <div className="flex items-center">
              <Link href="/">
                <img
                  src="/logo.png"
                  alt="Brand Logo"
                  className="h-6 sm:h-12 w-auto cursor-pointer hover:opacity-80 transition-opacity"
                />
              </Link>
            </div>

            {/* Right - Navigation Links */}
            <div
              className="flex items-center transition-all duration-150"
              style={{
                gap: `${16 + scrollProgress * 16}px`,
              }}
            >
              <a
                href="/"
                className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-medium"
              >
                Home
              </a>
              
              <a
                href="#about"
                className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-medium"
              >
                Photography
              </a>
              
              <a
                href="#services"
                className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-medium"
              >
                Films
              </a>
              
              <a
                href="/portfolio"
                className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-medium"
              >
                Documentries
              </a>
              
              
              
              <button href="#contact" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 lg:px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border border-white/20">
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}