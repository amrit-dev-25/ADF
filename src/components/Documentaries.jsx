// components/Documentaries.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Cloudinary's official player — gives you full controls, fullscreen,
// scrub-thumbnails, quality/speed menu, etc. out of the box.
// Install: npm install cloudinary-video-player
import "cloudinary-video-player/cld-video-player.min.css";

const CLOUDINARY_CLOUD_NAME = "your-cloud-name"; // TODO: replace with your Cloudinary cloud name

export default function Documentaries() {
  const [playingId, setPlayingId] = useState(null);

  const films = [
    {
      id: 1,
      image: "/documentaries/documentary-1.jpg",
      videoPublicId: "documentaries/documentary-1", // TODO: set once uploaded to Cloudinary
      names: "Riya\n&\nArjun",
      namess: "Riya & Arjun",
      location: "PHUKET, THAILAND",
      imagePosition: "left",
    },
    {
      id: 2,
      image: "/documentaries/documentary-2.jpg",
      videoPublicId: "documentaries/documentary-2",
      names: "Ruchika\n&\nBhavesh",
      namess: "Ruchika & Bhavesh",
      location: "CHANDIGARH",
      imagePosition: "right",
    },
    {
      id: 3,
      image: "/documentaries/documentary-3.jpg",
      videoPublicId: "documentaries/documentary-3",
      names: "Alisha\n&\nHarsh",
      namess: "Alisha & Harsh",
      location: "JALANDHAR, PUNJAB",
      imagePosition: "left",
    },
    {
      id: 4,
      image: "/documentaries/documentary-4.jpg",
      videoPublicId: "documentaries/documentary-4",
      names: "Siya\n&\nSatbeer",
      namess: "Siya & Satbeer",
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
                LATER (Cloudinary video, once footage is uploaded) — this already
                works once `videoPublicId` is filled in and the cloud name is set.
                Clicking the thumbnail above swaps it for this player and starts playback.
              */}
              {playingId === film.id && (
                <CloudinaryFilmPlayer
                  publicId={film.videoPublicId}
                  title={film.namess}
                  autoPlay
                />
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

// Full-featured Cloudinary video player: controls, fullscreen, scrub
// thumbnails, quality/speed menu. Rendered in place of the thumbnail once
// a film's play button has been clicked.
function CloudinaryFilmPlayer({ publicId, title, autoPlay = false }) {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    (async () => {
      const cloudinaryCore = await import("cloudinary-video-player");
      const cld = cloudinaryCore.default || cloudinaryCore;

      if (!isMounted || !videoRef.current) return;

      playerRef.current = cld.videoPlayer(videoRef.current, {
        cloudName: CLOUDINARY_CLOUD_NAME,
        controls: true,
        fluid: true,
        muted: false,
        loop: false,
        autoplay: autoPlay,
        showJumpControls: false,
        seekThumbnails: true,
        colors: { accent: "#000000" }, // tweak to match your brand color
      });

      playerRef.current.source(publicId, { sourceTypes: ["hls", "mp4"] });
    })();

    return () => {
      isMounted = false;
      playerRef.current?.dispose();
    };
  }, [publicId, autoPlay]);

  return (
    <video
      ref={videoRef}
      className="cld-video-player cld-fluid w-full h-full object-cover"
      controls
      playsInline
      aria-label={title}
    />
  );
}