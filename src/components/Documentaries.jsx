// components/FilmsShowcase.jsx
import Image from "next/image";

export default function Documentaries() {
  const films = [
    {
      id: 1,
      image: "/documentaries/documentary-1.jpg",
      names: "Riya\n&\nArjun",
      namess: "Riya & Arjun",
      location: "PHUKET, THAILAND",
      imagePosition: "left",
    },
    {
      id: 2,
      image: "/documentaries/documentary-2.jpg",
      names: "Ruchika\n&\nBhavesh",
      namess: "Ruchika & Bhavesh",
      location: "CHANDIGARH",
      imagePosition: "right",
    },
    {
      id: 3,
      image: "/documentaries/documentary-3.jpg",
      names: "Alisha\n&\nHarsh",
      namess: "Alisha & Harsh",
      location: "JALANDHAR, PUNJAB",
      imagePosition: "left",
    },
    {
      id: 4,
      image: "/documentaries/documentary-4.jpg",
      names: "Siya\n&\nSatbeer",
      namess: "Siya & Satbeer",
      location: "AMRITSAR, PUNJAB",
      imagePosition: "right",
    },
  ];

  return (
    <section className="bg-[#E8E4DD] text-black py-12 md:py-16 px-4 md:px-8 md:pb-36 ">
      <div className="max-w-6xl mx-auto space-y-8 md:space-y-24">
        {films.map((film) => (
          <div
            key={film.id}
            className={`flex flex-col md:flex-row items-center gap-6 md:gap-8  ${film.imagePosition === "right" ? "md:flex-row-reverse" : ""}`}
          >
            {/* Image */}
            <div className="relative w-full md:w-2/2 aspect-video group cursor-pointer">
              <Image
                src={film.image}
                alt={`${film.names.replace(/\n/g, " ")} wedding`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition duration-300" />

              {/* Centered Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 md:p-5 shadow-lg group-hover:scale-110 transition duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="black"
                    className="w-6 h-6 md:w-8 md:h-8"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
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
                {film.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
