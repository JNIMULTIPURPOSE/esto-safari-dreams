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
    <section className="bg-[#F8F5F0] py-40 overflow-hidden">

      <div className="w-full flex justify-center px-6">

        <div className="w-full max-w-7xl">

          {/* Heading */}

          <div className="w-full flex justify-center mb-24">

            <div className="w-full max-w-4xl text-center">

              <p className="uppercase tracking-[8px] text-[#C9A227] font-semibold">
                Testimonials
              </p>

              <h2 className="mt-6 text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Loved by Travelers
              </h2>

              <p className="mt-8 text-xl leading-9 text-gray-600 max-w-3xl mx-auto">
                Every journey tells a story. Here are a few words from guests
                who explored Africa with Esto Safari Dreams.
              </p>

            </div>

          </div>

          {/* Cards */}

          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">

            {testimonials.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                }}
                className="
                  bg-white
                  rounded-[2rem]
                  p-12
                  shadow-xl
                  transition-all
                  duration-300
                  text-center
                  flex
                  flex-col
                  items-center
                  min-h-[430px]
                "
              >

                <div className="text-7xl text-[#C9A227] leading-none">
                  "
                </div>

                <p
                  className="
                    mt-6
                    text-gray-600
                    italic
                    leading-8
                    max-w-[300px]
                  "
                >
                  {item.review}
                </p>

                <div className="flex justify-center text-[#C9A227] mt-8 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                <div className="mt-auto pt-10 flex flex-col items-center">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="
                      w-20
                      h-20
                      rounded-full
                      object-cover
                      border-2
                      border-[#C9A227]
                    "
                  />

                  <h4 className="mt-5 text-xl font-bold text-gray-900">
                    {item.name}
                  </h4>

                  <p className="text-gray-500 mt-1">
                    {item.country}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Testimonials;