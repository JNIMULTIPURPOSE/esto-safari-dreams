import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      country: "United Kingdom",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80",
      review:
        "Our safari exceeded every expectation. From luxurious accommodation to breathtaking wildlife encounters, every detail was flawlessly organized.",
    },
    {
      name: "James Anderson",
      country: "United States",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80",
      review:
        "The guides were exceptional, the vehicles were comfortable, and every game drive felt unique. This was easily one of the best trips we've ever taken.",
    },
    {
      name: "Emma Williams",
      country: "Australia",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&q=80",
      review:
        "Watching the sunrise over the savannah while elephants walked past our camp is a memory we'll treasure forever. Absolutely unforgettable.",
    },
  ];

  return (
    <section className="bg-[#F8F5F0] py-24 md:py-32 lg:py-40 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

        {/* Heading */}

        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">

          <p className="uppercase tracking-[4px] sm:tracking-[8px] text-[#C9A227] font-semibold text-sm sm:text-base">
            Testimonials
          </p>

          <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Loved by Travelers
          </h2>

          <p className="mt-6 text-base sm:text-lg lg:text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
            Every journey tells a story. Here are a few words from guests
            who explored Africa with Esto Safari Dreams.
          </p>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">

          {testimonials.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="
                group
                bg-white
                rounded-[2rem]
                p-8
                md:p-10
                lg:p-12
                shadow-xl
                hover:shadow-2xl
                transition-all
                duration-500
                flex
                flex-col
                items-center
                text-center
                min-h-[420px]
                lg:min-h-[470px]
                border
                border-transparent
                hover:border-[#C9A227]/40
              "
            >

              {/* Quote */}

              <div className="text-6xl md:text-7xl font-serif text-[#C9A227] leading-none">
                "
              </div>

              {/* Review */}

              <p className="mt-5 text-gray-600 italic text-sm md:text-base leading-7 md:leading-8 max-w-[320px]">
                {item.review}
              </p>

              {/* Stars */}

              <div className="flex gap-1 text-[#C9A227] mt-8 text-lg">

                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}

              </div>

              {/* Customer */}

              <div className="mt-auto pt-10 flex flex-col items-center">

                <img
                  src={item.image}
                  alt={item.name}
                  className="
                    w-20
                    h-20
                    md:w-24
                    md:h-24
                    rounded-full
                    object-cover
                    border-4
                    border-[#C9A227]
                    shadow-lg
                  "
                />

                <h4 className="mt-5 text-xl md:text-2xl font-bold text-gray-900">
                  {item.name}
                </h4>

                <p className="mt-2 text-gray-500 text-sm md:text-base">
                  {item.country}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;