// components/FilmsHero.jsx

export default function FilmsHero() {
  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/documentaries/hero.webp"
          alt="Wedding couple"
          className="w-full h-full object-cover"
        />
        {/* Optional overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Title */}
      <div className="absolute bottom-10 md:bottom-0 left-0 right-0 bg-[#E8E4DC] py-4 md:py8 ">
        <h1 
          className="text-center text-4xl md:text-7xl lg:text-8xl xl:text-9xl text-black tracking-wider font-playfair"
        >
            DOCUMENTARIES
        </h1>
      </div>
    </section>
  );
}