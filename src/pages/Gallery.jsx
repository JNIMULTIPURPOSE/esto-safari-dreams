import { motion } from "framer-motion";

function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1516426122078-c23e76319801",
    "https://images.unsplash.com/photo-1549366021-9f761d450615",
    "https://images.unsplash.com/photo-1535338454770-8be927b5a00b",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  ];

  return (
    <section
      style={{ paddingTop: "150px" }}
      className="
        px-5
        sm:px-6
        lg:px-8
        py-16
        md:py-20
        bg-[#050505]
        text-white
        min-h-screen
      "
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14 md:mb-20">

          <p
            className="
              uppercase
              tracking-[5px]
              sm:tracking-[8px]
              text-[#C9A227]
              font-semibold
              text-sm
              md:text-base
            "
          >
            Gallery
          </p>

          <h1
            className="
              mt-5
              text-3xl
              sm:text-4xl
              md:text-6xl
              font-bold
            "
          >
            Safari Gallery
          </h1>

          <p
            className="
              mt-6
              max-w-3xl
              mx-auto
              text-gray-300
              text-base
              md:text-lg
              leading-8
            "
          >
            Browse a collection of unforgettable wildlife encounters,
            breathtaking landscapes and memorable safari experiences across
            East Africa.
          </p>

        </div>

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
          "
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                overflow-hidden
                rounded-2xl
                shadow-2xl
              "
            >
              <img
                src={image}
                alt={`Safari ${index + 1}`}
                className="
                  h-72
                  md:h-80
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-110
                "
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Gallery;