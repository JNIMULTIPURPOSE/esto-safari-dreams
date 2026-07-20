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
      {/* Overlay */}

      <div className="absolute inset-0 bg-black/60"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-10"
      >
        <div className="max-w-5xl mx-auto text-center">

          <p className="text-[#C9A227] uppercase tracking-[4px] sm:tracking-[8px] font-semibold text-sm sm:text-base">
            Luxury African Adventures
          </p>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-tight text-white">
            Discover Africa
            <br />
            <span className="text-[#C9A227]">
              Beyond Your Dreams
            </span>
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-base sm:text-lg md:text-xl lg:text-2xl leading-7 sm:leading-8 lg:leading-9 text-gray-200">
            Experience unforgettable wildlife safaris, world-class luxury
            lodges, breathtaking landscapes and tailor-made journeys across
            East Africa.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-5">

            <Link
              to="/booking"
              className="
                w-full
                sm:w-auto
                sm:min-w-[240px]
                h-14
                px-8
                flex
                items-center
                justify-center
                rounded-full
                bg-[#C9A227]
                text-black
                text-lg
                font-semibold
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
                w-full
                sm:w-auto
                sm:min-w-[240px]
                h-14
                px-8
                flex
                items-center
                justify-center
                rounded-full
                border-2
                border-white
                text-white
                text-lg
                font-semibold
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

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block text-white text-center">

        <p className="tracking-[6px] text-sm">
          SCROLL DOWN
        </p>

      </div>

    </section>
  );
}

export default Hero;