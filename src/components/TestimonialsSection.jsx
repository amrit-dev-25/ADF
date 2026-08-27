// src/components/TestimonialsSection.jsx

'use client';

import { useEffect, useRef, useState } from 'react';

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);

  // Testimonials data
  const testimonials = [
    {
      image: '/testimonials/testimonial-1.jpg',
      quote: "The video is so beautiful. So beautiful. I have already rewatched it almost instantly. All the people who saw the longer version of the wedding highlights said it was so emotional and took them back to November. Your work speaks the emotion you have for your craft and that’s why it really hits the spot doesn’t matter who you are capturing. A big heartfelt thanks from all of us for preserving our beautiful memories for the rest of our lives. We will forever replay the video to relive the days, the moments. I have said this before and I will say it again - choosing you & your team was the best decision of the entire wedding.",
      name: 'ANSHULA'
    },
    {
      image: '/testimonials/testimonial-2.jpg',
      quote: "Amazing wedding photography team! They were very professional, friendly, and made us feel completely comfortable. The candid photos came out beautifully, and we really appreciated how they captured every special moment without disturbing any rituals or the natural flow of the function. Highly recommended! ",
      name: 'KRITIKA'
    },
    {
      image: '/testimonials/testimonial-3.jpg',
      quote: "Honestly, we couldn’t have asked for a better team! The photos turned out so gooood, especially the candid ones. They captured so many little moments we didn’t even notice ourselves. Everything from the shooting to the editing was done so beautifully and naturally. You guys genuinely know what you’re doing. It really felt like having friends around who just happened to be magicians with a camera. THANKYOU SO MUCH… Abhishek and team!",
      name: 'NOOR'
    },
    {
      image: '/testimonials/testimonial-4.jpg',
      quote: "Abhishek and his team didn't just create a wedding film — they created an heirloom. The way they wove together our traditions, emotions, and love story into one cinematic journey left us speechless. It's pure magic.",
      name: 'Vihaan & Ishita'
    }
  ];

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

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen text-black bg-[#E8E4DC] py-16 md:py-20 lg:py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Mobile Layout */}
        <div className="lg:hidden text-center space-y-8">
          {/* Heading */}
          <h2 
            className={`text-5xl md:text-6xl text-center leading-tight transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{fontFamily: 'Times New Roman, serif'}}
          >
             Words They <span className="italic">Left</span> Behind 
          </h2>

          {/* Image */}
          <div 
            className={`relative transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Image Counter */}
            <div className="absolute top-4 right-4 bg-black/50 text-white px-4 py-2 text-sm z-10" style={{fontFamily: 'Times New Roman, serif'}}>
              {currentIndex + 1}/10
            </div>

            {/* Image with fade transition */}
            <div className="relative w-full aspect-[4/4] overflow-hidden">
              <img 
                key={currentIndex}
                src={testimonials[currentIndex].image}
                alt={`Testimonial from ${testimonials[currentIndex].name}`}
                className="w-full h-full object-cover shadow-lg animate-fadeIn"
              />
            </div>
          </div>

          {/* Quote */}
          <div 
            key={`quote-${currentIndex}`}
            className={`animate-fadeIn transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <p 
              className="text-base md:text-lg leading-relaxed italic font-playfair"
            >
              "{testimonials[currentIndex].quote}"
            </p>
          </div>

          {/* Navigation and Name */}
          <div 
            className={`flex items-center justify-between transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Previous Arrow */}
            <button 
              onClick={handlePrevious}
              className="text-3xl md:text-4xl hover:scale-110 transition-transform duration-300"
              aria-label="Previous testimonial"
            >
              ←
            </button>

            {/* Name with fade transition */}
            <p 
              key={`name-${currentIndex}`}
              className="text-2xl md:text-3xl italic animate-fadeIn font-playfair"
            >
              ~{testimonials[currentIndex].name}
            </p>

            {/* Next Arrow */}
            <button 
              onClick={handleNext}
              className="text-3xl md:text-4xl hover:scale-110 transition-transform duration-300"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Image with counter */}
          <div 
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            {/* Image Counter */}
            <div className="absolute top-4 right-4 bg-black/50 text-white px-4 py-2 text-sm z-10" style={{fontFamily: 'Times New Roman, serif'}}>
              {currentIndex + 1}/10
            </div>

            {/* Image with fade transition */}
            <div className="relative w-full aspect-[4/4] overflow-hidden">
              <img 
                key={currentIndex}
                src={testimonials[currentIndex].image}
                alt={`Testimonial from ${testimonials[currentIndex].name}`}
                className="w-full h-full object-cover shadow-lg animate-fadeIn"
              />
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div 
            className={`space-y-8 lg:space-y-10 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            {/* Title */}
            <h2 
              className="text-6xl lg:text-7xl leading-tight text-center"
              style={{fontFamily: 'Times New Roman, serif'}}
            >
              Words They Left Behind
            </h2>

            {/* Quote with fade transition */}
            <div key={`quote-${currentIndex}`} className="animate-fadeIn">
              <p 
                className="text-lg lg:text-lg leading-relaxed font-playfair text-center"
              >
                "{testimonials[currentIndex].quote}"
              </p>
            </div>

            {/* Navigation and Name */}
            <div className="flex items-center justify-between">
              {/* Previous Arrow */}
              <button 
                onClick={handlePrevious}
                className="text-3xl md:text-4xl hover:scale-110 transition-transform duration-300"
                aria-label="Previous testimonial"
              >
                ←
              </button>

              {/* Name with fade transition */}
              <p 
                key={`name-${currentIndex}`}
                className="text-2xl md:text-3xl italic animate-fadeIn font-playfair"
              >
                ~{testimonials[currentIndex].name}
              </p>

              {/* Next Arrow */}
              <button 
                onClick={handleNext}
                className="text-3xl md:text-4xl hover:scale-110 transition-transform duration-300"
                aria-label="Next testimonial"
              >
                →
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}