// src/components/Footer.jsx

import Link from 'next/link';
import { Instagram, Youtube } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 pb-4 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img 
            src="/logo.png" 
            alt="Abhishek Dhupar Films" 
            className="h-24 md:h-36 w-auto"
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10 mb-8 text-sm md:text-base" style={{fontFamily: 'Times New Roman, serif'}}>
          <Link href="/" className="hover:text-gray-300 transition-colors duration-300">
            Homepage
          </Link>
          <Link href="/photography" className="hover:text-gray-300 transition-colors duration-300">
            Photography
          </Link>
          <Link href="/films" className="hover:text-gray-300 transition-colors duration-300">
            Films
          </Link>
          <Link href="/documentaries" className="hover:text-gray-300 transition-colors duration-300">
            Documentaries
          </Link>
          <Link href="http://localhost:3000/#contact" className="hover:text-gray-300 transition-colors duration-300">
            Contact Us
          </Link>
        </nav>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mb-8">
          <a 
            href="https://www.instagram.com/abhishekdhuparfilms" 
            target="_blank" 
            rel="noopener noreferrer"
            className=" hover:text-pink-700 transition-colors duration-300"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
          <a 
            href="https://wa.me/919888715322" 
            target="_blank" 
            rel="noopener noreferrer"
            className=" hover:text-green-700 transition-colors duration-300"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={24} />
          </a>
          <a 
            href="https://www.youtube.com/@abhishekdhuparfilms" 
            target="_blank" 
            rel="noopener noreferrer"
            className=" hover:text-red-700 transition-colors duration-300"
            aria-label="YouTube"
          >
            <Youtube size={24} />
          </a>
          
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-700 mb-2"></div>

        {/* Copyright */}
        <div className="text-center text-xs md:text-sm text-gray-400" style={{fontFamily: 'Times New Roman, serif'}}>
          COPYRIGHT 2026 ABHISHEK DHUPAR FILMS. ALL RIGHTS RESERVED.
        </div>

      </div>
    </footer>
  );
}