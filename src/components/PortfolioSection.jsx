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
    '/portfolio/image1.jpg',
    '/portfolio/image2.jpg',
    '/portfolio/image3.jpg',
    '/portfolio/image4.jpg',
    '/portfolio/image5.jpg',
  ];

  const bottomRowImages = [
    '/portfolio/image6.jpg',
    '/portfolio/image7.jpg',
    '/portfolio/image8.jpg',
    '/portfolio/image9.jpg',
    '/portfolio/image10.jpg',
  ];

  // For mobile - only use 8 images (omit photo-5 and photo-10 for symmetry)
  const mobileTopImages = [
    '/portfolio/image1.jpg',
    '/portfolio/image2.jpg',
    '/portfolio/image3.jpg',
    '/portfolio/image4.jpg',
  ];

  const mobileBottomImages = [
    '/portfolio/image6.jpg',
    '/portfolio/image7.jpg',
    '/portfolio/image8.jpg',
    '/portfolio/image9.jpg',
  ];

  return (
    <section ref={sectionRef} className="relative w-full bg-[#E8E4DC] py-16 md:py-20 md:pb-52">
      {/* Section Title */}
      <div className="text-black px-4 md:px-24 mb-12 md:mb-16">
        <h2 
          className={`text-6xl md:text-7xl lg:text-8xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{fontFamily: 'Times New Roman, serif'}}
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
              A Quiet Collection Of Moments, Preserved Forever.
            </p>
            <a href='/photography'>
            <button className="border-2 border-black px-12 py-3.5 text-sm tracking-widest uppercase hover:bg-black hover:text-[#E8E4DC] transition-all duration-300">
              VIEW PHOTOGRAPHY
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
            <button className="border-2 border-black px-10 py-3 text-xs tracking-widest uppercase hover:bg-black hover:text-[#E8E4DC] transition-all duration-300">
              VIEW PHOTOGRAPHY
            </button>
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