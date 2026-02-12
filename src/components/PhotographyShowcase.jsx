'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function PhotographyShowcase() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Wedding portfolio data
  const weddings = [
    {
      id: 'mehal-kajal',
      image: '/photography/wedding-1.jpg',
      names: 'Mehal & Kajal',
      slug: 'mehal-kajal'
    },
    {
      id: 'preeti-sam',
      image: '/photography/wedding-2.webp',
      names: 'Preeti & Sam',
      slug: 'preeti-sam'
    },
    {
      id: 'riya-arjun',
      image: '/photography/wedding-3.jpg',
      names: 'Riya & Arjun',
      slug: 'riya-arjun'
    },
    {
      id: 'mehal-kajal-2',
      image: '/photography/wedding-4.jpg',
      names: 'Mehal & Kajal',
      slug: 'mehal-kajal'
    },
    {
      id: 'preeti-sam-2',
      image: '/photography/wedding-2.webp',
      names: 'Preeti & Sam',
      slug: 'preeti-sam'
    },
    {
      id: 'riya-arjun-2',
      image: '/photography/wedding-3.jpg',
      names: 'Riya & Arjun',
      slug: 'riya-arjun'
    },
    {
      id: 'mehal-kajal-3',
      image: '/photography/wedding-4.jpg',
      names: 'Mehal & Kajal',
      slug: 'mehal-kajal'
    },
    {
      id: 'preeti-sam-3',
      image: '/photography/wedding-5.jpg',
      names: 'Preeti & Sam',
      slug: 'preeti-sam'
    },
    {
      id: 'riya-arjun-3',
      image: '/photography/wedding-2.webp',
      names: 'Riya & Arjun',
      slug: 'riya-arjun'
    }
  ];

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

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full min-h-screen text-black bg-[#E8E4DC] py-16 md:py-20 lg:py-24 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {weddings.map((wedding, index) => (
            <Link
              key={wedding.id}
              href={`/weddings/${wedding.slug}`}
              className={`group relative block transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Card Container */}
              <div className="relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                
                {/* Image */}
                <div className="relative w-full aspect-[3/4] overflow-hidden">
                  <img 
                    src={wedding.image}
                    alt={`Wedding of ${wedding.names}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                </div>

                {/* Names */}
                <div className="p-4 md:p-5 text-center bg-white">
                  <p 
                    className="text-xl md:text-2xl italic transition-colors duration-300 group-hover:text-orange-500"
                    style={{fontFamily: 'Times New Roman, serif'}}
                  >
                    {wedding.names}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}