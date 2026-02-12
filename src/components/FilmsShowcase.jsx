// components/FilmsShowcase.jsx
import Image from "next/image";

export default function FilmsShowcase() {
  const films = [
    {
      id: 1,
      image: "/films/film-1.jpg",
      names: "Riya\n&\nArjun",
      namess: "Riya & Arjun",
      label: "PRE-WEDDING",
      imagePosition: "left",
    },
    {
      id: 2,
      image: "/films/film-2.jpg",
      names: "Ruchika\n&\nBhavesh",
      namess: "Ruchika & Bhavesh",
      label: "TEASER",
      imagePosition: "right",
    },
    {
      id: 3,
      image: "/films/film-3.jpg",
      names: "Alisha\n&\nHarsh",
      namess: "Alisha & Harsh",
      label: "TRAILER",
      imagePosition: "left",
    },
    {
      id: 4,
      image: "/films/film-4.jpg",
      names: "Siya\n&\nSatbeer",
      namess: "Siya & Satbeer",
      label: "PRE-WEDDING",
      imagePosition: "right",
    },
  ];

  return (
    <section className="bg-[#E8E4DD] text-black py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto space-y-8 md:space-y-24">
        {films.map((film) => (
          <div
            key={film.id}
            className={`flex flex-col md:flex-row items-center gap-6 md:gap-8  ${film.imagePosition === "right" ? "md:flex-row-reverse" : ""}`}
          >
            {/* Image */}
            <div className="relative w-full md:w-2/2 aspect-video">
              <Image
                src={film.image}
                alt={`${film.names.replace(/\n/g, " ")} wedding`}
                fill
                className="object-cover"
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2 text-center font-playfair">
              <h3 className="hidden md:block pb-6 text-2xl md:text-5xl lg:text-6xl italic leading-tight whitespace-pre-line border-b">
                {film.names}
              </h3>
              <h3 className="md:hidden pb-4 text-4xl italic leading-tight whitespace-pre-line border-b-black/40 border-b">
                {film.namess}
              </h3>
              <p className="text-md md:text-xl tracking-widest mt-2 md:mt-3">
                {film.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
