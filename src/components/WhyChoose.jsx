import { motion } from "framer-motion";
import {
  FaCompass,
  FaShieldAlt,
  FaHeadset,
  FaGlobeAfrica,
} from "react-icons/fa";

function WhyChoose() {
  const items = [
    {
      icon: <FaCompass />,
      title: "Tailor-Made Journeys",
      text: "Private safari experiences crafted around your dreams.",
    },
    {
      icon: <FaGlobeAfrica />,
      title: "African Experts",
      text: "Local guides with deep knowledge of wildlife and culture.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Safe Adventures",
      text: "Professional planning with trusted safari operations.",
    },
    {
      icon: <FaHeadset />,
      title: "Premium Support",
      text: "Dedicated assistance from booking to your return home.",
    },
  ];

  return (
    <section
      className="relative py-24 md:py-32 lg:py-40 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1516026672322-bc52d61a55d5')",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

        {/* Heading */}

        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">

          <p className="uppercase tracking-[4px] sm:tracking-[8px] text-[#C9A227] font-semibold text-sm sm:text-base">
            Why Choose Esto
          </p>

          <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            More Than A Safari,
            <br className="hidden sm:block" />
            A Lifetime Memory
          </h2>

          <p className="mt-6 text-base sm:text-lg lg:text-xl leading-8 text-gray-300 max-w-3xl mx-auto">
            We create unforgettable African journeys combining luxury,
            adventure, authentic culture and exceptional service from the
            moment you arrive.
          </p>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10">

          {items.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="
                group
                backdrop-blur-xl
                bg-white/10
                border
                border-white/20
                rounded-[2rem]
                p-8
                md:p-10
                lg:p-12
                min-h-[320px]
                lg:min-h-[380px]
                flex
                flex-col
                items-center
                justify-center
                text-center
                text-white
                shadow-xl
                transition-all
                duration-500
                hover:bg-white/20
                hover:border-[#C9A227]
                hover:shadow-[0_20px_60px_rgba(201,162,39,0.25)]
              "
            >

              <div
                className="
                  w-20
                  h-20
                  md:w-24
                  md:h-24
                  rounded-full
                  bg-[#C9A227]/10
                  border
                  border-[#C9A227]/40
                  flex
                  items-center
                  justify-center
                  text-[#C9A227]
                  text-4xl
                  md:text-5xl
                  mb-8
                  transition-all
                  duration-500
                  group-hover:scale-110
                  group-hover:bg-[#C9A227]
                  group-hover:text-black
                "
              >
                {item.icon}
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-5">
                {item.title}
              </h3>

              <p className="text-gray-300 leading-7 md:leading-8 max-w-[280px]">
                {item.text}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChoose;