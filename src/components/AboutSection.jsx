// src/components/AboutSection.jsx

export default function AboutSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#E8E4DC] py-16 md:py-20 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-center  text-black text-5xl md:text-6xl lg:text-7xl mb-16 md:mb-20" style={{fontFamily: 'Times New Roman, serif'}}>
          The Moments <br /> <span className="italic">Between Now And Forever</span>
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
We’re a bunch of photographers and filmmakers who genuinely love what we do. We love the little things—the nervous smiles, the loud laughs, the happy tears, the hugs that last a little longer, and all the madness that comes with a wedding              </p>
              
              <p>
We believe the most beautiful moments are the ones that simply happen. A quiet smile, a burst of laughter, a tear that says more than words ever could. Our photographs and films are made around these little pieces of real life. We don’t like to interrupt them or turn them into something they’re not. We let the day unfold naturally, staying close enough to feel it, yet far enough to let it remain yours.              </p>
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