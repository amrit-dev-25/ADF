// components/FilmsShowcase.jsx
"use client";

import Image from "next/image";

// Bunny Stream — hosted video with a built-in player (controls, fullscreen,
// adaptive quality) delivered via a simple iframe embed. No extra JS library needed.
const BUNNY_LIBRARY_ID = process.env.NEXT_PUBLIC_BUNNY_LIBRARY_ID;

export default function FilmsShowcase() {
  const films = [
    {
      id: 1,
      image: "/films/film-1.jpg",
      videoId: "6520612e-7304-4d4d-96c4-9d38b5af6eb4", // TODO: Bunny Stream Video ID once uploaded
      names: "Gauri\n&\nShwetank",
      namess: "Gauri & Shwetank",
      label: "WEDDING-FILM",
      imagePosition: "left",
    },
    {
      id: 2,
      image: "/films/film-2.jpg",
      videoId: "7d2988ce-7391-4953-a8c9-dcb824b0ae3f",
      names: "Aisha\n&\nWilliam",
      namess: "Aisha & William",
      label: "WEDDING-FILM",
      imagePosition: "right",
    },
    {
      id: 3,
      image: "/films/film-3.jpg",
      videoId: "06fdd4de-c3b6-427f-8455-7705a6867fc2",
      names: "Anchal\n&\nAditya",
      namess: "Anchal & Aditya",
      label: "TEASER",
      imagePosition: "left",
    },
    {
      id: 4,
      image: "/films/film-4.jpg",
      videoId: "de016ff8-5b63-4ac4-a6b4-46f5ad1c8fa0",
      names: "Simran\n&\nTanmay",
      namess: "Simran & Tanmay",
      label: "WEDDING-FILM",
      imagePosition: "right",
    },
    {
      id: 5,
      image: "/films/film-4.jpg",
      videoId: "36dd185c-d457-44e5-a6a9-aa40d1f0e007",
      names: "Adeti\n&\nPardeep",
      namess: "Adeti & Pardeep",
      label: "WEDDING-FILM",
      imagePosition: "left",
    },
    {
      id: 6,
      image: "/films/film-4.jpg",
      videoId: "8a34e895-8d4e-40b4-bf46-76268ff50ed7",
      names: "Anchal\n&\nAditya",
      namess: "Anchal & Aditya",
      label: "WEDDING-FILM",
      imagePosition: "right",
    },
    {
      id: 7,
      image: "/films/film-4.jpg",
      videoId: "1bcd9c89-f6c9-4cd6-bfb0-a2fd0d47cadb",
      names: "Suvigya\n&\nKeshav",
      namess: "Suvigya & Keshav",
      label: "TEASER",
      imagePosition: "left",
    },
  ];

  return (
    <section className="bg-white text-black py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto space-y-8 md:space-y-24">
        {films.map((film) => (
          <div
            key={film.id}
            className={`flex flex-col md:flex-row items-baseline-last gap-6 md:gap-8  ${film.imagePosition === "right" ? "md:flex-row-reverse" : ""}`}
          >
            {/* Media */}
            <div className="relative w-full md:w-2/2 shadow-2xl aspect-video">
              {/*
                CURRENT (placeholder image) — comment this block out once videos are ready

                <Image
                  src={film.image}
                  alt={`${film.names.replace(/\n/g, " ")} wedding`}
                  fill
                  className="object-cover"
                />
              */}
              {/* <Image
                src={film.image}
                alt={`${film.names.replace(/\n/g, " ")} wedding`}
                fill
                className="object-cover"
              /> */}

              
                {/* LATER (Bunny Stream video, once uploaded) — uncomment this
                and remove the <Image> above. */}

                <BunnyStreamPlayer videoId={film.videoId} title={film.namess} />
             
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

// Bunny Stream's hosted player via iframe embed. Comes with controls,
// fullscreen, and adaptive quality already built in — no player library needed.
function BunnyStreamPlayer({ videoId, title }) {
  return (
    <iframe
      src={`https://iframe.mediadelivery.net/embed/${BUNNY_LIBRARY_ID}/${videoId}?autoplay=false&loop=false&muted=false&preload=true&responsive=true`}
      loading="lazy"
      className="absolute inset-0 w-full h-full border-0"
      allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
      allowFullScreen
      title={title}
    />
  );
}
