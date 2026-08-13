// components/FilmsHero.jsx
'use client';

import { useState, useEffect } from 'react';

const R2_BASE_URL = 'https://pub-1677d55d7df14ebc89ad2b893563a0d8.r2.dev';

const heroImages = [
  `${R2_BASE_URL}/wedding-7/9.jpg`,
  `${R2_BASE_URL}/wedding-8/Q2.jpg`,
  `${R2_BASE_URL}/wedding-5/O.jpg`,
  `${R2_BASE_URL}/wedding-4/6B.jpg`,
  `${R2_BASE_URL}/wedding-1/4A.jpg`,
];

export default function FilmsHero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 8000); // 8 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen">
      {/* Background Slideshow */}
      <div className="absolute inset-0 w-full h-full">
        {heroImages.map((img, index) => (
          <img
            key={img}
            src={img}
            alt="Wedding couple"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        {/* Optional overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Title */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#E8E4DC] py-4 md:py-8 ">
        <h1 
          className="text-center text-4xl md:text-7xl lg:text-8xl xl:text-9xl text-black tracking-wider font-playfair"
          
        >
            PHOTOGRAPHY
        </h1>
      </div>
    </section>
  );
}