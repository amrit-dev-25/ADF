'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Instagram, Youtube, MessageCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Photography', href: '/photography' },
    { name: 'Films', href: '/films' },
    { name: 'Documentaries', href: '/documentaries' },
    { name: 'Contact Us', href: '/#contact' },
  ];

  const socialLinks = [
    { 
      name: 'Instagram', 
      icon: Instagram, 
      href: 'https://www.instagram.com/abhishekdhuparfilms' 
    },
    { 
      name: 'YouTube', 
      icon: Youtube, 
      href: 'https://www.youtube.com/@abhishekdhuparfilms' 
    },
    { 
      name: 'WhatsApp', 
      icon: FaWhatsapp, 
      href: 'https://wa.me/919888715322' 
    },
  ];

  return (
    <>
      {/* Hamburger Button - Only visible on mobile */}
      <button
        onClick={toggleMenu}
        className="lg:hidden fixed top-6 right-6 z-50 p-2 hover:opacity-70 transition-opacity"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-8 h-8 text-black" />
        ) : (
          <Menu className="w-8 h-8 text-black" />
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={closeMenu}
          className="lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          style={{ animation: 'fadeIn 0.3s ease-out' }}
        />
      )}

      {/* Slide-in Menu */}
      <nav
        className={`lg:hidden fixed top-0 right-0 h-full w-80 bg-[#E8E4DC] z-40 transform transition-transform duration-500 ease-in-out shadow-2xl ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full px-8 py-12">
          
          
          
          {/* Navigation Links */}
          <div className="flex-1 flex flex-col space-y-8 pt-8 ">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="text-2xl text-black hover:opacity-60 transition-opacity text-center font-playfair "
                style={{
                  animation: `slideInRight 0.4s ease-out ${index * 0.1}s both`
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="text-black hover:opacity-60 transition-opacity"
                  aria-label={social.name}
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>

          {/* Get In Touch Button */}
          <Link href="https://wa.me/919888715322" onClick={closeMenu}>
            <button className="w-full bg-black text-white py-4 text-sm tracking-widest uppercase hover:bg-black/80 transition-colors duration-300">
              Get In Touch
            </button>
          </Link>
        </div>
      </nav>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}