// src/components/FilmsSection.jsx

'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function FilmsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setShouldLoadVideo(true);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '100px'
      }
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

  useEffect(() => {
    if (isVisible && videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log('Video autoplay failed:', err);
      });
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="relative w-full h-screen  overflow-hidden">
      {/* Background Video - Lazy Loaded */}
      {shouldLoadVideo ? (
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          poster="/films-poster.jpg"
        >
          <source src="/videos/films-background.mp4" type="video/mp4" />
          <img 
            src="/films-fallback.jpg" 
            alt="Wedding film" 
            className="w-full h-full object-cover"
          />
        </video>
      ) : (
        <img 
          src="/films-poster.jpg" 
          alt="Wedding film preview" 
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Subtle dark overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Top Right Corner - Diagonal Cut */}
      <div className="absolute top-0 right-0 w-0 h-0 border-t-[100px] md:border-t-[150px] border-t-[#E8E4DC] border-l-[100px] md:border-l-[450px] border-l-transparent"></div>

      {/* Bottom Left Corner - Diagonal Cut */}
      <div className="absolute bottom-0 left-0 w-0 h-0 border-b-[100px] md:border-b-[150px] border-b-[#E8E4DC] border-r-[100px] md:border-r-[450px] border-r-transparent"></div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between px-8 md:px-16 lg:px-20 py-12 md:py-16">
        {/* Title - Top Left */}
        <div 
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}
        >
          <h2 
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white drop-shadow-lg"
            style={{fontFamily: 'Times New Roman, serif'}}
          >
            EXPLORE <span className="italic">Films</span>
          </h2>
        </div>

        {/* Button - Bottom Right */}
        <div 
          className={`self-end transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}
        >
          <Link href="/films">
          <button className="border-2 border-white px-10 md:px-12 py-3 md:py-3.5 text-xs md:text-sm tracking-widest uppercase text-white hover:bg-white hover:text-black transition-all duration-300">
            VIEW FILMS
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}