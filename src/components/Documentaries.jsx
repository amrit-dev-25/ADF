// components/Documentaries.jsx
"use client";

import { useState } from "react";
import Image from "next/image";

export default function Documentaries() {
  const [playingId, setPlayingId] = useState(null);

  const films = [
    {
      id: 1,
      image: "/documentaries/1.png",
      youtubeId: "VbDk_gd2rF8", // TODO: YouTube video ID once uploaded, e.g. "dQw4w9WgXcQ"
      names: "Kritika\n&\nSahil",
      namess: "Kritika & Sahil",
      location: "PHUKET, THAILAND",
      imagePosition: "left",
    },
    {
      id: 2,
      image: "/documentaries/2.png",
      youtubeId: "F_htYbw1-Tw",
      names: "Anchal\n&\nAditya",
      namess: "Anchal & Aditya",
      location: "CHANDIGARH",
      imagePosition: "right",
    },
    {
      id: 3,
      image: "/documentaries/3.png",
      youtubeId: "CvuRvBwxazw",
      names: "Gauri\n&\nShwetank",
      namess: "Gauri & Shwetank",
      location: "JALANDHAR, PUNJAB",
      imagePosition: "left",
    },
    {
      id: 4,
      image: "/documentaries/4.png",
      youtubeId: "f3QEllRuQfs",
      names: "Simran\n&\nTanmay",
      namess: "Simran & Tanmay",
      location: "AMRITSAR, PUNJAB",
      imagePosition: "right",
    },
  ];

  return (
    <section className="bg-white text-black py-12 md:py-16 px-4 md:px-8 md:pb-36 ">
      <div className="max-w-6xl mx-auto space-y-8 md:space-y-24">
        {films.map((film) => (
          <div
            key={film.id}
            className={`flex flex-col md:flex-row items-center gap-6 md:gap-8  ${film.imagePosition === "right" ? "md:flex-row-reverse" : ""}`}
          >
            {/* Media */}
            <div className="relative w-full md:w-2/2 aspect-video group cursor-pointer">
              {/*
                CURRENT (placeholder image + play button) — comment this whole
                block out once videos are ready, and remove the `playingId` check.
              */}
              {playingId !== film.id && (
                <div
                  className="absolute inset-0"
                  onClick={() => setPlayingId(film.id)}
                >
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
              )}

              {/*
                LATER (YouTube video) — this already works once `youtubeId`
                is filled in. Clicking the thumbnail above swaps it for this
                player and starts playback.
              */}
              {playingId === film.id && (
                <YouTubePlayer videoId={film.youtubeId} title={film.namess} />
              )}
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

// YouTube's hosted player via iframe embed. modestbranding shrinks the
// YouTube logo, rel=0 limits related videos to your own channel, and
// autoplay=1 works here because this only mounts as the direct result of
// the user's click on the thumbnail above (a genuine user gesture).
function YouTubePlayer({ videoId, title }) {
  return (
    <iframe
      src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0`}
      loading="lazy"
      className="absolute inset-0 w-full h-full border-0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      title={title}
    />
  );
}
