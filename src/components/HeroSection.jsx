// src/components/HeroSection.jsx

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex">
      {/* Left Side - Black Background with Content */}
      <div className="w-full lg:w-1/2 bg-black flex flex-col justify-center items-center px-8 md:px-16 lg:px-20 text-white">
        {/* Logo - You'll replace this */}
        <div className="mb-8">
          <img 
            src="/ADF.png" 
            alt="Abhishek Dhupar Films" 
            className="w-50 h-auto"
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl xl:text-6xl mb-8 text-center" style={{fontFamily: 'Times New Roman, serif'}}>
          Real Moments,<br />
          <span className="italic">Timeless</span> Stories
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-lg  mb-12 font-light text-center font-playfair italic" >
          We capture weddings as they truly feel — the laughter, the tears, the quiet glances, and everything in between. Through photographs and films, we preserve the magic of the moments you shared, creating memories that take you back to your wedding day, exactly as you remember it
        </p>

        {/* CTA Button */}
        <a href="/#contact">
        <button className="hidden md:block border border-white px-10 py-3.5 text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300">
          CONTACT US
        </button>
        </a>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <img 
          src="/AA-PW-83.jpg" 
          alt="Wedding couple" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Mobile Image - Show below on smaller screens */}
      <div className="lg:hidden absolute inset-0  opacity-30">
        <img 
          src="/AA-PW-83.jpg" 
          alt="Wedding couple" 
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}