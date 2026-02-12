// src/components/DocumentariesSection.jsx

'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function DocumentariesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
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

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen text-black bg-[#E8E4DC] py-16 md:py-20 lg:py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Mobile Layout */}
        <div className="lg:hidden space-y-8">
          {/* Heading */}
          <h2 
            className={`text-5xl md:text-6xl leading-tight transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{fontFamily: 'Times New Roman, serif'}}
          >
            The Wedding<br />
            <span className="italic">Chronicle</span>
          </h2>

          {/* Image */}
          <div 
            className={`relative transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <img 
              src="/documentaries-image.jpg" 
              alt="Bride in traditional attire" 
              className="w-full h-auto object-cover shadow-lg"
            />
          </div>

          {/* Content */}
          <p 
            className={`text-base md:text-lg leading-relaxed transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{fontFamily: 'Times New Roman, serif'}}
          >
            A curated film journey that follows your celebration from the first promise to the final farewell. Every ritual, every glance, and every unspoken emotion is woven into a seamless story designed to be felt, not just watched.
          </p>

          {/* Button */}
          <div 
            className={`transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <a href="/documentaries">
              <button className="border-2 border-black px-10 py-3 text-xs tracking-widest uppercase hover:bg-black hover:text-[#E8E4DC] transition-all duration-300">
                VIEW DOCUMENTRIES
              </button>
            </a>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Text Content */}
          <div 
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            {/* Title */}
            <h2 
              className="text-6xl lg:text-7xl leading-tight"
              style={{fontFamily: 'Times New Roman, serif'}}
            >
              The Wedding<br />
              <span className="italic">Chronicle</span>
            </h2>

            {/* Description */}
            <p 
              className="text-lg lg:text-xl leading-relaxed max-w-lg"
              style={{fontFamily: 'Times New Roman, serif'}}
            >
              A curated film journey that follows your celebration from the first promise to the final farewell. Every ritual, every glance, and every unspoken emotion is woven into a seamless story designed to be felt, not just watched.
            </p>

            {/* Button */}
            <Link href="/documentaries">
              <button className="border-2 border-black px-12 py-3.5 text-sm tracking-widest uppercase hover:bg-black hover:text-[#E8E4DC] transition-all duration-300">
                VIEW DOCUMENTRIES
              </button>
            </Link>
          </div>

          {/* Right Side - Image */}
          <div 
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <img 
              src="/documentaries-image.jpg" 
              alt="Bride in traditional attire" 
              className="w-full h-auto object-cover shadow-lg"
            />
          </div>

        </div>
      </div>
    </section>
  );
}