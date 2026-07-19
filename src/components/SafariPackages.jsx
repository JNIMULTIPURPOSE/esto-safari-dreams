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
    <section className="relative py-40 bg-[#050505] text-white overflow-hidden">

      <div className="w-full flex justify-center px-6">

        <div className="w-full max-w-7xl">

          {/* Section Heading */}

          <div className="w-full flex justify-center mb-24">

            <div className="w-full max-w-4xl text-center">

              <p className="uppercase tracking-[8px] text-[#C9A227] font-semibold">
                Signature Experiences
              </p>

              <h2 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
                Explore Our Luxury Safaris
              </h2>

              <p className="mt-8 text-xl leading-9 text-gray-300 max-w-3xl mx-auto">
                Carefully designed journeys combining wildlife,
                adventure, comfort and unforgettable African moments.
              </p>

            </div>

          </div>

          {/* Safari Cards */}

          <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-3">

            {safaris.map((safari, index) => (

              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 80,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
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
                  h-[580px]
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

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/90
                    via-black/40
                    to-transparent
                  "
                ></div>

                <div
                  className="
                    absolute
                    inset-0
                    border
                    border-white/10
                    rounded-[2rem]
                  "
                ></div>

                <div
                  className="
                    absolute
                    inset-0
                    flex
                    flex-col
                    justify-end
                    items-center
                    text-center
                    p-10
                  "
                >

                  <p
                    className="
                      text-[#C9A227]
                      uppercase
                      tracking-[4px]
                      text-sm
                      font-semibold
                      mb-5
                    "
                  >
                    Premium Safari
                  </p>

                  <h3
                    className="
                      text-3xl
                      font-bold
                      text-white
                      leading-tight
                      max-w-[320px]
                    "
                  >
                    {safari.title}
                  </h3>

                  <p
                    className="
                      mt-5
                      text-gray-200
                      leading-8
                      max-w-[320px]
                    "
                  >
                    {safari.text}
                  </p>

                  <Link
  to="/booking"
  className="
    mt-8
    inline-flex
    items-center
    justify-center
    bg-[#C9A227]
    hover:bg-yellow-500
    text-black
    font-bold
    px-8
    py-3
    rounded-full
    min-w-[220px]
    h-14
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

      </div>

    </section>
  );
}

export default SafariPackages;