export default function FilmsHero() {
  return (
    <section className="relative w-full h-screen flex flex-col">
      {/* Background Image - Takes remaining space */}
      <div className="relative w-full flex-1 min-h-0">
        <img
          src="/films/hero.jpg"
          alt="Wedding couple"
          className="w-full h-full object-cover"
        />
        {/* Optional overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Title - Fixed height at bottom */}
      <div className="bg-[#E8E4DC] py-8">
        <h1 
          className="text-center text-5xl md:text-6xl lg:text-9xl text-black tracking-wider font-playfair"
        >
          FILMS
        </h1>
      </div>
    </section>
  );
}