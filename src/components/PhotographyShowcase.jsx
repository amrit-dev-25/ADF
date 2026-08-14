"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function PhotographyShowcase() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Wedding portfolio data
  const weddings = [
    {
      id: "henat-supreet",
      image: "https://pub-1677d55d7df14ebc89ad2b893563a0d8.r2.dev/wedding-8/N1.jpg",
      names: "Henat & Supreet",
      slug: "henat-supreet",
    },
    {
      id: "anchal-aditya",
      image: "https://pub-1677d55d7df14ebc89ad2b893563a0d8.r2.dev/wedding-1/6A.jpg",
      names: "Anchal & Aditya",
      slug: "anchal-aditya",
    },
    {
      id: "simran-tanmay",
      image: "https://pub-1677d55d7df14ebc89ad2b893563a0d8.r2.dev/wedding-12/7B.jpg",
      names: "Simran & Tanmay",
      slug: "simran-tanmay",
    },
    {
      id: "riya-sukhbi",
      image: "https://pub-1677d55d7df14ebc89ad2b893563a0d8.r2.dev/wedding-7/11.jpg",
      names: "Riya & Sukhbi",
      slug: "riya-sukhbi",
    },
    {
      id: "brides",
      image: "https://pub-1677d55d7df14ebc89ad2b893563a0d8.r2.dev/wedding-4/7.jpg",
      names: "Brides",
      slug: "brides",
    },
    {
      id: "kritika-sahil",
      image: "https://pub-1677d55d7df14ebc89ad2b893563a0d8.r2.dev/wedding-6/N1.jpg",
      names: "Kritika & Sahil",
      slug: "kritika-sahil",
    },    
    {
      id: "akashita-ranvir",
      image: "https://pub-1677d55d7df14ebc89ad2b893563a0d8.r2.dev/wedding-3/15A.jpg",
      names: "Akashita & Ranvir",
      slug: "akashita-ranvir",
    },
    {
      id: "aisha-william",
      image: "https://pub-1677d55d7df14ebc89ad2b893563a0d8.r2.dev/wedding-10/R1.jpg",
      names: "Aisha & William",
      slug: "aisha-william",
    },
    {
      id: "gauri-shwetank",
      image: "https://pub-1677d55d7df14ebc89ad2b893563a0d8.r2.dev/wedding-5/M2.jpg",
      names: "Gauri & Shwetank",
      slug: "gauri-shwetank",
    },
    {
      id: "shwetank-haldi",
      image: "https://pub-1677d55d7df14ebc89ad2b893563a0d8.r2.dev/wedding-9/13A.jpg",
      names: "Shwetank Haldi",
      slug: "shwetank-haldi",
    },
    {
      id: "aditya-haldi",
      image: "https://pub-1677d55d7df14ebc89ad2b893563a0d8.r2.dev/wedding-2/8B.jpg",
      names: "Aditya Haldi",
      slug: "aditya-haldi",
    },
    {
      id: "suvigya-keshav-haldi",
      image: "https://pub-1677d55d7df14ebc89ad2b893563a0d8.r2.dev/wedding-11/11A.jpg",
      names: "Suvigya & Keshav",
      slug: "suvigya-keshav-haldi",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
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
      className="relative w-full min-h-screen text-black bg-[#E8E4DC] py-10 md:py-20 lg:py-24 px-6 md:px-12 lg:px-20"
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
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Card Container */}
              <div className="relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                {/* Image */}
                <div className="relative w-full aspect-[3/4] overflow-hidden">
                  <Image
                    src={wedding.image}
                    alt={`Wedding of ${wedding.names}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                </div>

                {/* Names */}
                <div className="p-4 md:p-5 text-center bg-white">
                  <p
                    className="text-xl md:text-2xl italic transition-colors duration-300 font-playfair group-hover:text-orange-500"
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