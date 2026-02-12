// src/components/HeroSection.jsx

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex">
      {/* Left Side - Black Background with Content */}
      <div className="w-full lg:w-1/2 bg-black flex flex-col justify-center items-center px-8 md:px-16 lg:px-20 text-white">
        {/* Logo - You'll replace this */}
        <div className="mb-8">
          <img 
            src="/logo.png" 
            alt="Abhishek Dhupar Films" 
            className="w-80 h-auto"
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl xl:text-6xl mb-8 leading-tight text-center" style={{fontFamily: 'Times New Roman, serif'}}>
          Every Heartbeat<br />
          <span className="italic">Framed</span> In Time
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl italic mb-12 font-light text-center" style={{fontFamily: 'Times New Roman, serif'}}>
          Specialising in Wedding Images and Documentries
        </p>

        {/* CTA Button */}
        <button className="border border-white px-10 py-3.5 text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300">
          CONTACT US
        </button>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <img 
          src="/hero-image.jpg" 
          alt="Wedding couple" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Mobile Image - Show below on smaller screens */}
      <div className="lg:hidden absolute inset-0  opacity-30">
        <img 
          src="/hero-image.jpg" 
          alt="Wedding couple" 
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}