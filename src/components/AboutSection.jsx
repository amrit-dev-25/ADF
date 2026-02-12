// src/components/AboutSection.jsx

export default function AboutSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#E8E4DC] py-16 md:py-20 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-center  text-black text-5xl md:text-6xl lg:text-7xl mb-16 md:mb-20" style={{fontFamily: 'Times New Roman, serif'}}>
          FRAMING THE <br /> <span className="italic">Beginning of Forever</span>
        </h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] xl:grid-cols-[1fr_1.5fr_1fr] gap-8 lg:gap-2 items-center">
          {/* Left Image */}
          <div className="relative w-full">
            <img 
              src="/about-image-1.jpg" 
              alt="Wedding couple laughing" 
              className="w-full h-auto grayscale"
            />
          </div>

          {/* Center Text Content */}
          <div className="relative px-4 md:px-8">
            <div className="space-y-6 text-base md:text-lg xl:text-xl leading-relaxed text-black" style={{fontFamily: 'Times New Roman, serif'}}>
              <p>
                At Abhishek Dhupar Films, we believe weddings are not events — they are living stories, unfolding in glances, in laughter that lingers, in hands that find each other without looking. Our work is guided by light, shaped by emotion, and refined by a deep respect for the art of storytelling.
              </p>
              
              <p>
                Blending contemporary vision with timeless elegance, we create imagery that feels as meaningful decades from now as it does today. Every frame is thoughtfully composed to preserve not just how your wedding looked, but how it felt — the quiet anticipation, the unspoken promises, and the beginning of something that endures forever.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden lg:block relative w-full">
            <img 
              src="/about-image-2.webp" 
              alt="Bride portrait" 
              className="w-full h-auto grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  );
}