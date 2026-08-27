// components/DocumentariesHero.jsx

export default function DocumentariesHero() {
  return (
    <section className="w-full bg-white">
      {/* Media + DOCUMENTARIES overlay */}
      <div className="relative w-full h-[60vh] md:h-[75vh] lg:h-[85vh]">
        {/*
          TODO: swap this <img> for a looping, muted, autoplaying <video> once footage is ready, e.g.:

          <video
            src="/documentaries/hero.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        */}
        <img
          src="/documentaries/hero.webp"
          alt="Wedding couple"
          className="w-full h-full object-cover"
        />

        {/* Subtle overlay for text legibility */}
        <div className="absolute inset-0 bg-black/10" />

        {/* DOCUMENTARIES title on the image */}
        <div className="absolute inset-x-0 bottom-6 md:bottom-10 lg:bottom-14 px-4">
          <h1 className="text-center text-4xl md:text-7xl lg:text-8xl xl:text-8xl text-white tracking-wider font-playfair drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
            DOCUMENTARIES
          </h1>
        </div>
      </div>

      {/* Text content below the media */}
      <div className="w-full bg-white px-6 md:px-16 lg:px-32 py-10 md:py-14">
        {/* TODO: swap this placeholder copy for the final lines whenever you have them */}
        <h2 className="text-center font-playfair text-2xl md:text-3xl lg:text-4xl text-black tracking-wide mb-3">
          A story worth telling in full.
        </h2>

        <p className="max-w-4xl mx-auto text-justify font-playfair text-sm md:text-base leading-relaxed text-black/80">
          A documentary isn&rsquo;t a highlight reel—it&rsquo;s the whole day, told
          honestly. The nervous laughter before the ceremony, the small
          moments between families, the parts no one plans for. We follow
          quietly, stay out of the way, and let the day unfold the way it
          actually happened, so that years from now, it still feels exactly
          like being there.
        </p>
      </div>
    </section>
  );
}