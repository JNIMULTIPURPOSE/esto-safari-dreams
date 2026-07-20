import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function SafariPackages() {
  const safaris = [
    {
      title: "Masai Mara Luxury Safari",
      image:
        "https://images.unsplash.com/photo-1516426122078-c23e76319801",
      text:
        "Witness the Big Five and enjoy exclusive wildlife experiences in Kenya's most iconic reserve.",
    },
    {
      title: "Serengeti Migration Experience",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      text:
        "Follow the world's greatest wildlife migration through Tanzania's endless plains.",
    },
    {
      title: "Zanzibar Beach Escape",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      text:
        "Combine your safari adventure with luxury relaxation on tropical beaches.",
    },
  ];

  return (
    <section className="relative bg-[#050505] py-24 md:py-32 lg:py-40 text-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

        {/* Heading */}

        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">

          <p className="uppercase tracking-[4px] sm:tracking-[8px] text-[#C9A227] font-semibold text-sm sm:text-base">
            Signature Experiences
          </p>

          <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Explore Our Luxury Safaris
          </h2>

          <p className="mt-6 text-base sm:text-lg lg:text-xl leading-8 text-gray-300 max-w-3xl mx-auto">
            Carefully designed journeys combining wildlife,
            adventure, comfort and unforgettable African moments.
          </p>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">

          {safaris.map((safari, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
              whileHover={{
                y: -12,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
                h-[500px]
                md:h-[540px]
                lg:h-[580px]
                shadow-2xl
              "
            >

              <img
                src={safari.image}
                alt={safari.title}
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-1000
                  group-hover:scale-110
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

              <div className="absolute inset-0 border border-white/10 rounded-[2rem]"></div>

              <div className="absolute inset-0 flex flex-col justify-end items-center text-center p-6 md:p-8 lg:p-10">

                <p className="text-[#C9A227] uppercase tracking-[3px] font-semibold text-xs sm:text-sm mb-4">
                  Premium Safari
                </p>

                <h3 className="text-2xl md:text-3xl font-bold leading-tight max-w-[320px]">
                  {safari.title}
                </h3>

                <p className="mt-5 text-gray-200 leading-7 md:leading-8 text-sm md:text-base max-w-[320px]">
                  {safari.text}
                </p>

                <Link
                  to="/booking"
                  className="
                    mt-8
                    w-full
                    sm:w-auto
                    sm:min-w-[220px]
                    h-14
                    px-8
                    inline-flex
                    items-center
                    justify-center
                    rounded-full
                    bg-[#C9A227]
                    text-black
                    font-bold
                    hover:bg-yellow-500
                    transition-all
                    duration-300
                    hover:scale-105
                  "
                >
                  Explore Journey
                </Link>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default SafariPackages;