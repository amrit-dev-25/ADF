// components/FilmsHero.jsx

const BUNNY_PULL_ZONE = process.env.NEXT_PUBLIC_BUNNY_PULL_ZONE;
const FILMS_HERO_VIDEO_ID = process.env.NEXT_PUBLIC_FILMS_HERO_VIDEO_ID;

export default function FilmsHero() {
  return (
    <section className="w-full bg-white">
      {/* Media + FILMS overlay */}
      <div className="relative w-full h-[60vh] md:h-[75vh] lg:h-[85vh]">

        <video
          src={`https://${BUNNY_PULL_ZONE}.b-cdn.net/${FILMS_HERO_VIDEO_ID}/play_1080p.mp4`}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />

        {/* Subtle overlay for text legibility */}
        <div className="absolute inset-0 bg-black/10" />

        {/* FILMS title on the image */}
        <div className="absolute inset-x-0 bottom-6 md:bottom-10 lg:bottom-14 px-4">
          <h1 className="text-center text-4xl md:text-7xl lg:text-8xl xl:text-8xl text-white tracking-wider font-playfair drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
            FILMS
          </h1>
        </div>
      </div>

      {/* Text content below the media */}
      <div className="w-full bg-white px-6 md:px-16 lg:px-32 py-10 md:py-14">
        <h2 className="text-center font-playfair text-2xl md:text-3xl lg:text-4xl text-black tracking-wide mb-3">
          Films made to feel, not just remember.
        </h2>

        <p className="max-w-4xl mx-auto text-justify font-playfair text-sm md:text-base leading-relaxed text-black/80">
          We don&rsquo;t make films for Instagram, for trends, or for anyone else. We
          make them for you and for the people you love. For the years when you&rsquo;ll
          sit together, watch them again, and remember how that day truly felt. All we
          want is to give you a way to come back to your wedding, whenever you miss it.
        </p>
      </div>
    </section>
  );
}