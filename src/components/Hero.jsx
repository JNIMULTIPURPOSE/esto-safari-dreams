import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1516426122078-c23e76319801')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full flex justify-center px-6"
      >
        <div className="w-full max-w-5xl text-center">

          <p className="text-[#C9A227] uppercase tracking-[8px] font-semibold">
            Luxury African Adventures
          </p>

          <h1 className="mt-6 text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-white">
            Discover Africa
            <br />
            <span className="text-[#C9A227]">
              Beyond Your Dreams
            </span>
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-xl md:text-2xl leading-9 text-gray-200">
            Experience unforgettable wildlife safaris, world-class luxury
            lodges, breathtaking landscapes and tailor-made journeys across
            East Africa.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <Link
  to="/booking"
  className="
    inline-flex
    items-center
    justify-center
    min-w-[240px]
    h-14
    px-10
    rounded-full
    bg-[#C9A227]
    text-black
    text-lg
    font-semibold
    whitespace-nowrap
    hover:bg-[#d9b23d]
    hover:scale-105
    transition-all
    duration-300
    shadow-lg
  "
>
  Plan Your Safari
</Link>

            <Link
  to="/safaris"
  className="
    inline-flex
    items-center
    justify-center
    min-w-[240px]
    h-14
    px-10
    rounded-full
    border-2
    border-white
    text-white
    text-lg
    font-semibold
    whitespace-nowrap
    hover:bg-white
    hover:text-[#1B4332]
    hover:scale-105
    transition-all
    duration-300
  "
>
  Explore Packages
</Link>

          </div>

        </div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-center">
        <p className="tracking-[6px] text-sm">
          SCROLL DOWN
        </p>
      </div>
    </section>
  );
}

export default Hero;