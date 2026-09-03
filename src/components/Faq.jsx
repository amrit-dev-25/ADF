// components/FAQ.jsx
"use client";

import { useState } from "react";

const WHATSAPP_LINK = "https://wa.me/919888715322";

const faqs = [
  {
    question: "What types of weddings do you cover?",
    answer: [
      "We love capturing all kinds of weddings—from vibrant Punjabi celebrations and beautiful South Indian traditions to Christian, Muslim, and many other cultural weddings. We believe every wedding has its own unique beauty, traditions, emotions, and story to tell.",
      "Whether it's an intimate celebration with just 50 guests or a large-scale wedding with hundreds or even thousands of people, we love documenting every moment and creating memories that feel authentic to you.",
    ],
  },
  {
    question: "How far in advance should we book you?",
    answer: [
      "The sooner, the better! We recommend reaching out as soon as your wedding dates are finalized and your venue is booked. Our calendar fills up quickly, and we often receive inquiries for dates that are already booked. Booking early gives you the best chance of securing your preferred dates with us.",
    ],
  },
  {
    question: "Do you travel for destination weddings?",
    answer: [
      "Yes, absolutely! We love travelling for destination weddings. Just give us a bed to crash on, cover our travel expenses, and keep our tummies full—we'll take care of capturing the rest!",
    ],
  },
  {
    question: "How much does wedding photography cost?",
    answer: [
      "We don't offer fixed wedding photography packages because every wedding is unique. Our pricing depends on several factors, including the number of events, the size of the photography and filmmaking team, the coverage required, deliverables, albums, and other requirements.",
      "We create custom packages tailored specifically to each of our clients and their celebrations.",
      <>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-black"
        >
          Click here
        </a>{" "}
        to get your personalised quote, or reach out to us directly on{" "}
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-black"
        >
          WhatsApp
        </a>
        .
      </>,
    ],
  },
  {
    question: "Do you require an advance payment to confirm the booking?",
    answer: [
      "Yes. To confirm and secure your booking, we require a small token amount as mentioned in your quotation—usually 20% of the total package value. Your dates are officially reserved once the advance payment is received.",
    ],
  },
  {
    question: "Can we meet you before booking?",
    answer: [
      "Yes, absolutely! You're always welcome to visit us and meet our team before making a booking. Even if you're not sure about booking with us yet, our office doors are always open for you. We'd be happy to meet, understand your requirements, and have a chat!",
    ],
  },
  {
    question: "How will the final photos and videos be delivered?",
    answer: [
      "We deliver all your final photos and videos through our specially designed delivery platform for our company. It keeps your data safe, organized, and easy to access.",
      "You can conveniently view, download, and share your photos and films with your friends and family—all in one place.",
    ],
  },
  {
    question: "How long will it take to receive our photos and videos?",
    answer: [
      "We are very meticulous when it comes to editing. Our team works carefully on every small detail to ensure your memories look their best. Every photograph is individually corrected and colour graded, while every frame of your film is carefully selected and edited with precision.",
      "We usually deliver the final photos within 8 weeks and the wedding films within 12 weeks, provided the agreed payment milestones are completed on time.",
    ],
  },
  {
    question: "How many edited photos will we receive?",
    answer: [
      "No Limit. Whatever we shoot and select as part of your final story will be professionally edited and delivered to you.",
      "We believe your memories shouldn't be limited by numbers, so you receive all the final selected photographs, fully edited and ready to cherish.",
    ],
  },
  {
    question: "Will we receive all the raw photos and videos?",
    answer: [
      "Usually, you won't need the raw photos and videos, as we carefully select, edit, and deliver the best moments from your wedding.",
      "However, if you would like to keep the raw data, it can be provided on your own hard drive once all payment milestones have been cleared.",
    ],
  },
  {
    question: "Do you provide a wedding album?",
    answer: [
      "Yes, we do! If a wedding album is included in your package, all the details—such as the number of albums, sheets, and other specifications—will be clearly mentioned in your quotation.",
    ],
  },
  {
    question: "What if I lose my photos and videos after 5 years?",
    answer: [
      "Don't worry, we've got your back. We never delete your final photos and videos from our records, so if you ever lose your data, just reach out to us.",
    ],
  },
];

function PlusIcon({ open }) {
  return (
    <span className="relative flex h-4 w-4 shrink-0 items-center justify-center">
      <span
        className={`absolute h-[1.5px] w-4 bg-black transition-transform duration-300 ${
          open ? "rotate-180" : "rotate-0"
        }`}
      />
      <span
        className={`absolute h-4 w-[1.5px] bg-black transition-transform duration-300 ${
          open ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
        }`}
      />
    </span>
  );
}

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-black/10">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-base md:text-lg text-black/90">
          {item.question}
        </span>
        <PlusIcon open={isOpen} />
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          {item.answer.map((paragraph, i) => (
            <p
              key={i}
              className="text-sm md:text-base leading-relaxed text-black/60 mb-3 last:mb-0 max-w-2xl"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="w-full bg-[#E8E4DC] border-t border-black/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="flex items-center justify-between mb-12 md:mb-20">
          <span className="text-sm font-medium tracking-wide text-black/50 uppercase">
            FAQ
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,380px)_1fr] gap-10 lg:gap-20">
          {/* Left column */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.05] font-medium text-black tracking-tight">
              Frequently Asked
              <br />
              Questions
            </h2>

            <p className="mt-6 text-sm md:text-base text-black/50 max-w-xs leading-relaxed">
              Everything you need to know about the platform, features, and
              getting started.
            </p>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 rounded-full bg-black text-white text-sm font-medium px-6 py-3 hover:bg-black/85 transition-colors duration-200"
            >
              Help Center
            </a>
          </div>

          {/* Right column - accordion */}
          <div className="border-t border-black/10">
            {faqs.map((item, index) => (
              <FAQItem
                key={item.question}
                item={item}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}