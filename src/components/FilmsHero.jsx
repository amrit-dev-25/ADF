// components/FilmsHero.jsx

export default function FilmsHero() {
  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/films/hero.jpg"
          alt="Wedding couple"
          className="w-full h-full object-cover"
        />
        {/* Optional overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Title */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#E8E4DC] py-8 ">
        <h1 
          className="text-center text-5xl md:text-6xl lg:text-9xl text-black tracking-wider font-playfair"
          
        >
          FILMS
        </h1>
      </div>
    </section>
  );
}