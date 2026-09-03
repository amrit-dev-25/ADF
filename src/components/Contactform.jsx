// src/components/ContactForm.jsx

"use client";

import { useEffect, useRef, useState } from "react";

const inputStyle = { fontFamily: "Times New Roman, serif" };

// Defined outside ContactForm so it isn't recreated on every render —
// keeping it inside was causing inputs to lose focus after every keystroke.
function FormFields({ formData, handleChange, status }) {
  return (
    <>
      {/* Name */}
      <div className="space-y-2">
        <p className="text-sm md:text-base" style={inputStyle}>
          What should we call you two?
        </p>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Couple's name"
          required
          className="w-full px-6 py-4 bg-transparent border-2 border-black text-black placeholder-black/60 focus:outline-none focus:border-black/80 transition-all duration-300"
          style={inputStyle}
        />
      </div>

      {/* Phone / WhatsApp */}
      <div className="space-y-2">
        <p className="text-sm md:text-base" style={inputStyle}>
          Where can we reach you?
        </p>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Your WhatsApp number"
          required
          className="w-full px-6 py-4 bg-transparent border-2 border-black text-black placeholder-black/60 focus:outline-none focus:border-black/80 transition-all duration-300"
          style={inputStyle}
        />
      </div>

      {/* Event Date */}
      <div className="space-y-2">
        <p className="text-sm md:text-base" style={inputStyle}>
          When&apos;s the big day?
        </p>
        <input
          type="date"
          name="eventDate"
          value={formData.eventDate}
          onChange={handleChange}
          placeholder="Your wedding date"
          required
          className="w-full px-6 py-4 bg-transparent border-2 border-black text-black placeholder-black/60 focus:outline-none focus:border-black/80 transition-all duration-300"
          style={inputStyle}
        />
      </div>

      {/* Message */}
      <div className="space-y-2">
        <p className="text-sm md:text-base" style={inputStyle}>
          Tell us a little about the celebration.
        </p>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Event details (optional)"
          rows="5"
          className="w-full px-6 py-4 bg-transparent border-2 border-black text-black placeholder-black/60 focus:outline-none focus:border-black/80 transition-all duration-300 resize-none"
          style={inputStyle}
        />
      </div>

      {/* How did you find us */}
      <div className="space-y-2">
        <p className="text-sm md:text-base" style={inputStyle}>
          And how did you find us?
        </p>
        <select
          name="hearAboutUs"
          value={formData.hearAboutUs}
          onChange={handleChange}
          required
          className="w-full px-6 py-4 bg-transparent border-2 border-black text-black focus:outline-none focus:border-black/80 transition-all duration-300 appearance-none"
          style={inputStyle}
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="Instagram">Instagram</option>
          <option value="Google">Google</option>
          <option value="Saw us shooting at someone's wedding">
            Saw us shooting at someone&apos;s wedding
          </option>
          <option value="Reference">Reference</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full border-2 border-black px-10 py-4 text-xs tracking-widest uppercase hover:bg-black hover:text-[#E8E4DC] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "sending"
          ? "SENDING..."
          : status === "success"
            ? "MESSAGE SENT!"
            : "SEND MESSAGE"}
      </button>

      {/* Status Messages */}
      {status === "success" && (
        <p className="text-center text-green-700 text-sm" style={inputStyle}>
          Thank you! We&apos;ll be in touch soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-center text-red-700 text-sm" style={inputStyle}>
          Something went wrong. Please try again.
        </p>
      )}
    </>
  );
}

export default function ContactForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventDate: "",
    message: "",
    hearAboutUs: "",
  });
  const [status, setStatus] = useState(""); // 'sending', 'success', 'error'
  const sectionRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then(async (res) => {
        if (!res.ok) throw new Error("Failed to send");
        return res.json();
      })
      .then(() => {
        setStatus("success");
        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({
            name: "",
            phone: "",
            eventDate: "",
            message: "",
            hearAboutUs: "",
          });
          setStatus("");
        }, 3000);
      })
      .catch((error) => {
        console.error("Error:", error);
        setStatus("error");
        setTimeout(() => {
          setStatus("");
        }, 3000);
      });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full min-h-screen text-black bg-[#E8E4DC] py-16 md:py-20 lg:py-24 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Mobile Layout */}
        <div className="lg:hidden space-y-8">
          {/* Heading */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2
              className="text-5xl md:text-6xl leading-tight"
              style={inputStyle}
            >
              Let's Create <span className="italic">Magic</span>
            </h2>
            <p
              className="text-base md:text-lg mt-4 leading-relaxed"
              style={inputStyle}
            >
              Share your story with us, and let's craft something timeless
              together.
            </p>

            <div className="space-y-4 pt-8">
              <div>
                <p
                  className="text-sm uppercase tracking-wider opacity-60"
                  style={inputStyle}
                >
                  Email
                </p>
                <p className="text-lg" style={inputStyle}>
                  info@abhishekdhupar.com
                </p>
              </div>
              <div>
                <p
                  className="text-sm uppercase tracking-wider opacity-60"
                  style={inputStyle}
                >
                  Phone
                </p>
                <p className="text-lg" style={inputStyle}>
                  +91 98887 15322
                </p>
              </div>
              <div>
                <p
                  className="text-sm uppercase tracking-wider opacity-60"
                  style={inputStyle}
                >
                  Location
                </p>
                <p className="text-lg" style={inputStyle}>
                  {" "}
                  213 City Center, Rupnagar, Punjab
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className={`space-y-6 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <FormFields
              formData={formData}
              handleChange={handleChange}
              status={status}
            />
          </form>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-2 gap-16 items-start">
          {/* Left Side - Text Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Title */}
            <div>
              <h2
                className="text-6xl lg:text-7xl leading-tight"
                style={inputStyle}
              >
                Let's Create <span className="italic">Magic</span>
              </h2>
              <p
                className="text-lg lg:text-xl mt-6 leading-relaxed max-w-lg"
                style={inputStyle}
              >
                Share your story with us, and let's craft something timeless
                together.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 pt-8">
              <div>
                <p
                  className="text-sm uppercase tracking-wider opacity-60"
                  style={inputStyle}
                >
                  Email
                </p>
                <p className="text-lg" style={inputStyle}>
                  info@abhishekdhuparfilms.com
                </p>
              </div>
              <div>
                <p
                  className="text-sm uppercase tracking-wider opacity-60"
                  style={inputStyle}
                >
                  Phone
                </p>
                <p className="text-lg" style={inputStyle}>
                  +91 98887 15322
                </p>
              </div>
              <div>
                <p
                  className="text-sm uppercase tracking-wider opacity-60"
                  style={inputStyle}
                >
                  Location
                </p>
                <p className="text-lg" style={inputStyle}>
                  {" "}
                  213 City Center, Rupnagar, Punjab
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className={`space-y-6 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <FormFields
              formData={formData}
              handleChange={handleChange}
              status={status}
            />
          </form>
        </div>
      </div>
    </section>
  );
}
