// src/components/PortfolioSection.jsx

'use client';

import { useEffect, useRef, useState } from 'react';

export default function PortfolioSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Photography images - 10 total (5 top, 5 bottom)
  const topRowImages = [
    '/portfolio/1.jpg',
    '/portfolio/7.jpg',
    '/portfolio/10.jpg',
    '/portfolio/4.jpg',
    '/portfolio/6.jpg',
  ];

  const bottomRowImages = [
    '/portfolio/5.jpg',
    '/portfolio/2.jpg',
    '/portfolio/14.jpg',
    '/portfolio/9.jpg',
    '/portfolio/3.jpg',
  ];

  // For mobile - only use 8 images (omit photo-5 and photo-10 for symmetry)
  const mobileTopImages = [
    '/portfolio/1.jpg',
    '/portfolio/2.jpg',
    '/portfolio/3.jpg',
    '/portfolio/4.jpg',
  ];

  const mobileBottomImages = [
    '/portfolio/6.jpg',
    '/portfolio/7.jpg',
    '/portfolio/8.jpg',
    '/portfolio/9.jpg',
  ];

  return (
    <section ref={sectionRef} className="relative w-full bg-[#E8E4DC] py-16 md:py-20 md:pb-52">
      {/* Section Title */}
      <div className="text-black px-4 md:px-24 mb-12 md:mb-16">
        <h2 
          className={`text-5xl md:text-7xl lg:text-8xl transition-all duration-1000 font-playfair ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          
        >
          <span className="italic">The</span> PORTFOLIO
        </h2>
      </div>

      {/* Desktop Layout - 5 columns */}
      <div className="hidden md:block">
        {/* Top Row - 5 Images */}
        <div className="grid grid-cols-5 gap-0">
          {topRowImages.map((src, index) => (
            <div 
              key={`top-${index}`}
              className={`relative aspect-[4/5] xl:aspect-[4/4] overflow-hidden transition-all duration-700 delay-${index * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <img 
                src={src} 
                alt={`Wedding photography ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* Middle Row - Text and Button */}
        <div 
          className={`bg-[#ffffff] py-10 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="text-black text-center">
            <p 
              className="text-2xl md:text-3xl lg:text-4xl italic mb-8"
              style={{fontFamily: 'Times New Roman, serif'}}
            >
              The love, laughter, and little moments in between
            </p>
            <a href='/photography'>
            <button className="border-2 border-black px-12 py-3.5 text-sm tracking-widest uppercase hover:bg-black hover:text-[#E8E4DC] transition-all duration-300">
              Enter the Gallery
            </button>
            </a>
          </div>
        </div>

        {/* Bottom Row - 5 Images */}
        <div className="grid grid-cols-5 gap-0">
          {bottomRowImages.map((src, index) => (
            <div 
              key={`bottom-${index}`}
              className={`relative  aspect-[4/5] xl:aspect-[4/4] overflow-hidden transition-all duration-700 delay-${(index + 5) * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <img 
                src={src} 
                alt={`Wedding photography ${index + 6}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Layout - 2 columns, 8 images total (4 top, 4 bottom) */}
      <div className="block md:hidden">
        {/* Top 2 Rows - 4 Images */}
        <div className="grid grid-cols-2 gap-0">
          {mobileTopImages.map((src, index) => (
            <div 
              key={`mobile-top-${index}`}
              className={`relative aspect-[4/5] overflow-hidden transition-all duration-700 delay-${index * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <img 
                src={src} 
                alt={`Wedding photography ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Middle Row - Text and Button */}
        <div 
          className={`bg-[#E8E4DC] py-12 px-6 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="text-black text-center">
            <p 
              className="text-xl italic mb-6"
              style={{fontFamily: 'Times New Roman, serif'}}
            >
              A Quiet Collection Of Moments, Preserved Forever.
            </p>
            <a href='/photography'>
            <button className="border-2 border-black px-10 py-3 text-xs tracking-widest uppercase hover:bg-black hover:text-[#E8E4DC] transition-all duration-300">
              VIEW PHOTOGRAPHY
            </button>
            </a>
          </div>
        </div>

        {/* Bottom 2 Rows - 4 Images */}
        <div className="grid grid-cols-2 gap-0">
          {mobileBottomImages.map((src, index) => (
            <div 
              key={`mobile-bottom-${index}`}
              className={`relative aspect-[4/5] overflow-hidden transition-all duration-700 delay-${(index + 4) * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <img 
                src={src} 
                alt={`Wedding photography ${index + 6}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}