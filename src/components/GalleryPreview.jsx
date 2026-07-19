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
    <section className="py-40 bg-black text-white overflow-hidden">

      <div className="w-full flex justify-center px-6">

        <div className="w-full max-w-7xl">

          {/* Heading */}

          <div className="w-full flex justify-center mb-24">

            <div className="w-full max-w-4xl text-center">

              <p className="uppercase tracking-[8px] text-[#C9A227] font-semibold">
                Our Gallery
              </p>

              <h2 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
                Moments Across Africa
              </h2>

              <p className="mt-8 text-xl leading-9 text-gray-300 max-w-3xl mx-auto">
                Explore breathtaking landscapes, wildlife encounters,
                and unforgettable safari memories captured across Africa.
              </p>

            </div>

          </div>

          {/* Gallery Grid */}

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {images.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
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
                  h-[450px]
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

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/80
                    via-black/30
                    to-transparent
                  "
                ></div>

                <div
                  className="
                    absolute
                    inset-0
                    flex
                    flex-col
                    items-center
                    justify-end
                    text-center
                    p-10
                  "
                >

                  <h3 className="text-3xl font-bold text-white max-w-[300px]">
                    {item.title}
                  </h3>

                  <div
                    className="
                      mt-6
                      opacity-0
                      translate-y-4
                      group-hover:opacity-100
                      group-hover:translate-y-0
                      transition-all
                      duration-500
                    "
                  >

                    <Link
  to="/gallery"
  className="
    inline-flex
    items-center
    justify-center
    min-w-[200px]
    h-14
    px-8
    rounded-full
    bg-[#C9A227]
    text-black
    text-lg
    font-semibold
    whitespace-nowrap
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

        </div>

      </div>

    </section>
  );
}

export default GalleryPreview;