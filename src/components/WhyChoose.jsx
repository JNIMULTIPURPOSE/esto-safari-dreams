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
      className="relative py-40 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1516026672322-bc52d61a55d5')",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 w-full flex justify-center px-6">

        <div className="w-full max-w-7xl">

          <div className="w-full flex justify-center mb-24">
  <div className="w-full max-w-4xl px-6 text-center">

    <p className="uppercase tracking-[8px] text-[#C9A227] font-semibold">
      Why Choose Esto
    </p>

    <h2 className="mt-6 text-5xl md:text-6xl font-bold text-white leading-tight">
      More Than A Safari,
      <br />
      A Lifetime Memory
    </h2>

    <p className="mt-8 text-xl leading-9 text-gray-300 max-w-3xl mx-auto">
      We create unforgettable African journeys combining luxury,
      adventure, authentic culture and exceptional service from the
      moment you arrive.
    </p>

  </div>
</div>

          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">

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
                  p-12
                  min-h-[380px]
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
                    w-24
                    h-24
                    rounded-full
                    bg-[#C9A227]/10
                    border
                    border-[#C9A227]/40
                    flex
                    items-center
                    justify-center
                    text-[#C9A227]
                    text-5xl
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

                <h3 className="text-2xl font-bold mb-5">
                  {item.title}
                </h3>

                <p className="text-gray-300 leading-8 max-w-[270px]">
                  {item.text}
                </p>

              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default WhyChoose;