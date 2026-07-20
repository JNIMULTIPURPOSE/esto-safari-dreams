import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function GalleryPreview() {
  const images = [
    {
      image:
        "https://images.unsplash.com/photo-1516426122078-c23e76319801",
      title: "Wildlife Adventures",
    },
    {
      image:
        "https://images.unsplash.com/photo-1535338454770-8be927b5a00b",
      title: "African Landscapes",
    },
    {
      image:
        "https://images.unsplash.com/photo-1549366021-9f761d450615",
      title: "Safari Experiences",
    },
    {
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      title: "Luxury Journeys",
    },
    {
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      title: "Beach Escapes",
    },
    {
      image:
        "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5",
      title: "African Wilderness",
    },
  ];

  return (
    <section className="bg-black text-white py-24 md:py-32 lg:py-40 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

        {/* Heading */}

        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">

          <p className="uppercase tracking-[4px] sm:tracking-[8px] text-[#C9A227] font-semibold text-sm sm:text-base">
            Our Gallery
          </p>

          <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Moments Across Africa
          </h2>

          <p className="mt-6 text-base sm:text-lg lg:text-xl leading-8 text-gray-300 max-w-3xl mx-auto">
            Explore breathtaking landscapes, incredible wildlife encounters,
            luxury lodges and unforgettable safari memories captured across
            East Africa.
          </p>

        </div>

        {/* Gallery */}

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">

          {images.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
                h-[320px]
                sm:h-[360px]
                lg:h-[450px]
                shadow-2xl
              "
            >

              <img
                src={item.image}
                alt={item.title}
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

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent"></div>

              <div className="absolute inset-0 border border-white/10 rounded-[2rem] group-hover:border-[#C9A227]/40 transition-all duration-500"></div>

              <div className="absolute inset-0 flex flex-col justify-end items-center text-center p-6 md:p-8 lg:p-10">

                <h3 className="text-2xl md:text-3xl font-bold text-white max-w-[300px]">
                  {item.title}
                </h3>

                <div
                  className="
                    mt-6
                    opacity-0
                    translate-y-5
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    transition-all
                    duration-500
                  "
                >

                  <Link
                    to="/gallery"
                    className="
                      w-full
                      sm:w-auto
                      sm:min-w-[200px]
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
                      hover:scale-105
                      transition-all
                      duration-300
                    "
                  >
                    Discover More
                  </Link>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

        {/* Bottom CTA */}

        <div className="flex justify-center mt-16 md:mt-20">

          <Link
            to="/gallery"
            className="
              inline-flex
              items-center
              justify-center
              px-10
              h-14
              rounded-full
              border-2
              border-[#C9A227]
              text-[#C9A227]
              font-bold
              hover:bg-[#C9A227]
              hover:text-black
              transition-all
              duration-300
              hover:scale-105
            "
          >
            View Full Gallery
          </Link>

        </div>

      </div>

    </section>
  );
}

export default GalleryPreview;