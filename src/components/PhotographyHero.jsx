// components/FilmsHero.jsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const R2_BASE_URL = 'https://media.abhishekdhuparfilms.com';

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
    <section className="w-full bg-white">
      {/* Image with slideshow + PHOTOGRAPHY overlay */}
      <div className="relative w-full h-[60vh] md:h-[75vh] lg:h-[85vh]">
        {heroImages.map((img, index) => (
          <Image
            key={img}
            src={img}
            alt="Wedding couple"
            fill
            priority={index === 0}
            sizes="100vw"
            className={`object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        {/* Subtle overlay for text legibility */}
        <div className="absolute inset-0 bg-black/10" />

        {/* PHOTOGRAPHY title on the image */}
        <div className="absolute inset-x-0 bottom-6 md:bottom-10 lg:bottom-14 px-4">
          <h1 className="text-center text-4xl md:text-7xl lg:text-8xl text-white tracking-wider font-playfair drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
            PHOTOGRAPHY
          </h1>
        </div>
      </div>

      {/* Text content below the image */}
      <div className="w-full bg-white px-6 md:px-16 lg:px-32 py-10 md:py-14">
        <h2 className="text-center font-playfair text-2xl md:text-3xl lg:text-4xl text-black tracking-wide mb-3">
          Light. Emotion. Moment.
        </h2>

        <p className="text-center font-playfair italic text-sm md:text-base text-black/80 mb-6">
          If we had to define our photography in just three words, it would be these.
        </p>

        <p className="max-w-4xl mx-auto text-justify font-playfair text-sm md:text-base leading-relaxed text-black/80">
          For us, photography is less about following a style and more about following
          the moment. We love playing with light, finding unusual frames, trying new
          ideas, and sometimes just waiting for the right second to happen. But at the
          heart of it all is emotion. A smile, a tear, a glance, a little bit of
          chaos—we want to capture it the way it truly felt. We experiment, we take
          chances, and we trust our instincts, always looking for that one frame that
          makes you feel the moment all over again.
        </p>
      </div>
    </section>
  );
}