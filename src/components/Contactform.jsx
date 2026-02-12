// src/components/ContactForm.jsx

'use client';

import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    message: ''
  });
  const [status, setStatus] = useState(''); // 'sending', 'success', 'error'
  const sectionRef = useRef(null);
  const formRef = useRef(null);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Get EmailJS credentials from environment variables
    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    // Check if credentials are configured
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error('EmailJS credentials are not configured properly');
      setStatus('error');
      setTimeout(() => {
        setStatus('');
      }, 3000);
      return;
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
        console.log('Success:', result.text);
        setStatus('success');
        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            eventDate: '',
            message: ''
          });
          setStatus('');
        }, 3000);
      })
      .catch((error) => {
        console.error('Error:', error.text);
        setStatus('error');
        setTimeout(() => {
          setStatus('');
        }, 3000);
      });
  };

  return (
    <section id='contact' ref={sectionRef} className="relative w-full min-h-screen text-black bg-[#E8E4DC] py-16 md:py-20 lg:py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Mobile Layout */}
        <div className="lg:hidden space-y-8">
          {/* Heading */}
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 
              className="text-5xl md:text-6xl leading-tight"
              style={{fontFamily: 'Times New Roman, serif'}}
            >
              Let's Create <span className="italic">Magic</span>
            </h2>
            <p 
              className="text-base md:text-lg mt-4 leading-relaxed"
              style={{fontFamily: 'Times New Roman, serif'}}
            >
              Share your story with us, and let's craft something timeless together.
            </p>

            <div className="space-y-4 pt-8">
              <div>
                <p className="text-sm uppercase tracking-wider opacity-60" style={{fontFamily: 'Times New Roman, serif'}}>Email</p>
                <p className="text-lg" style={{fontFamily: 'Times New Roman, serif'}}>info@abhishekdhupar.com</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-wider opacity-60" style={{fontFamily: 'Times New Roman, serif'}}>Phone</p>
                <p className="text-lg" style={{fontFamily: 'Times New Roman, serif'}}>+91 98887 15322</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-wider opacity-60" style={{fontFamily: 'Times New Roman, serif'}}>Location</p>
                <p className="text-lg" style={{fontFamily: 'Times New Roman, serif'}}> 213 City Center, Rupnagar, Punjab</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form 
            ref={formRef}
            onSubmit={handleSubmit}
            className={`space-y-6 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-6 py-4 bg-transparent border-2 border-black text-black placeholder-black/60 focus:outline-none focus:border-black/80 transition-all duration-300"
                style={{fontFamily: 'Times New Roman, serif'}}
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-6 py-4 bg-transparent border-2 border-black text-black placeholder-black/60 focus:outline-none focus:border-black/80 transition-all duration-300"
                style={{fontFamily: 'Times New Roman, serif'}}
              />
            </div>

            {/* Phone */}
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone Number"
                required
                className="w-full px-6 py-4 bg-transparent border-2 border-black text-black placeholder-black/60 focus:outline-none focus:border-black/80 transition-all duration-300"
                style={{fontFamily: 'Times New Roman, serif'}}
              />
            </div>

            {/* Event Date */}
            <div>
              <input
                type="date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                placeholder="Event Date"
                required
                className="w-full px-6 py-4 bg-transparent border-2 border-black text-black placeholder-black/60 focus:outline-none focus:border-black/80 transition-all duration-300"
                style={{fontFamily: 'Times New Roman, serif'}}
              />
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your special day..."
                rows="5"
                required
                className="w-full px-6 py-4 bg-transparent border-2 border-black text-black placeholder-black/60 focus:outline-none focus:border-black/80 transition-all duration-300 resize-none"
                style={{fontFamily: 'Times New Roman, serif'}}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full border-2 border-black px-10 py-4 text-xs tracking-widest uppercase hover:bg-black hover:text-[#E8E4DC] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'SENDING...' : status === 'success' ? 'MESSAGE SENT!' : 'SEND MESSAGE'}
            </button>

            {/* Status Messages */}
            {status === 'success' && (
              <p className="text-center text-green-700 text-sm" style={{fontFamily: 'Times New Roman, serif'}}>
                Thank you! We'll be in touch soon.
              </p>
            )}
            {status === 'error' && (
              <p className="text-center text-red-700 text-sm" style={{fontFamily: 'Times New Roman, serif'}}>
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-2 gap-16 items-start">
          
          {/* Left Side - Text Content */}
          <div 
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            {/* Title */}
            <div>
              <h2 
                className="text-6xl lg:text-7xl leading-tight"
                style={{fontFamily: 'Times New Roman, serif'}}
              >
                Let's Create <span className="italic">Magic</span>
              </h2>
              <p 
                className="text-lg lg:text-xl mt-6 leading-relaxed max-w-lg"
                style={{fontFamily: 'Times New Roman, serif'}}
              >
                Share your story with us, and let's craft something timeless together.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 pt-8">
              <div>
                <p className="text-sm uppercase tracking-wider opacity-60" style={{fontFamily: 'Times New Roman, serif'}}>Email</p>
                <p className="text-lg" style={{fontFamily: 'Times New Roman, serif'}}>info@abhishekdhuparfilms.com</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-wider opacity-60" style={{fontFamily: 'Times New Roman, serif'}}>Phone</p>
                <p className="text-lg" style={{fontFamily: 'Times New Roman, serif'}}>+91 98887 15322</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-wider opacity-60" style={{fontFamily: 'Times New Roman, serif'}}>Location</p>
                <p className="text-lg" style={{fontFamily: 'Times New Roman, serif'}}> 213 City Center, Rupnagar, Punjab</p>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <form 
            ref={formRef}
            onSubmit={handleSubmit}
            className={`space-y-6 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-6 py-4 bg-transparent border-2 border-black text-black placeholder-black/60 focus:outline-none focus:border-black/80 transition-all duration-300"
                style={{fontFamily: 'Times New Roman, serif'}}
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-6 py-4 bg-transparent border-2 border-black text-black placeholder-black/60 focus:outline-none focus:border-black/80 transition-all duration-300"
                style={{fontFamily: 'Times New Roman, serif'}}
              />
            </div>

            {/* Phone */}
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone Number"
                required
                className="w-full px-6 py-4 bg-transparent border-2 border-black text-black placeholder-black/60 focus:outline-none focus:border-black/80 transition-all duration-300"
                style={{fontFamily: 'Times New Roman, serif'}}
              />
            </div>

            {/* Event Date */}
            <div>
              <input
                type="date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                placeholder="Event Date"
                required
                className="w-full px-6 py-4 bg-transparent border-2 border-black text-black placeholder-black/60 focus:outline-none focus:border-black/80 transition-all duration-300"
                style={{fontFamily: 'Times New Roman, serif'}}
              />
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your special day..."
                rows="6"
                required
                className="w-full px-6 py-4 bg-transparent border-2 border-black text-black placeholder-black/60 focus:outline-none focus:border-black/80 transition-all duration-300 resize-none"
                style={{fontFamily: 'Times New Roman, serif'}}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full border-2 border-black px-10 py-4 text-xs tracking-widest uppercase hover:bg-black hover:text-[#E8E4DC] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'SENDING...' : status === 'success' ? 'MESSAGE SENT!' : 'SEND MESSAGE'}
            </button>

            {/* Status Messages */}
            {status === 'success' && (
              <p className="text-center text-green-700 text-sm" style={{fontFamily: 'Times New Roman, serif'}}>
                Thank you! We'll be in touch soon.
              </p>
            )}
            {status === 'error' && (
              <p className="text-center text-red-700 text-sm" style={{fontFamily: 'Times New Roman, serif'}}>
                Something went wrong. Please try again.
              </p>
            )}
          </form>

        </div>
      </div>
    </section>
  );
}