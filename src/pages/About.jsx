import { motion } from "framer-motion";
import {
  FaBullseye,
  FaEye,
  FaGem,
  FaLeaf,
  FaUsers,
  FaShieldAlt,
} from "react-icons/fa";

function About() {
  const values = [
    {
      icon: <FaBullseye />,
      title: "Our Mission",
      text: "To create unforgettable African safari experiences through personalized service, luxury travel, and authentic wildlife adventures.",
    },
    {
      icon: <FaEye />,
      title: "Our Vision",
      text: "To become Africa's most trusted luxury safari company, recognized for excellence, innovation, and unforgettable journeys.",
    },
    {
      icon: <FaGem />,
      title: "Our Values",
      text: "Integrity, safety, sustainability, professionalism and exceptional customer satisfaction guide everything we do.",
    },
  ];

  const reasons = [
    {
      icon: <FaUsers />,
      title: "Expert Safari Guides",
      text: "Professional local guides with deep knowledge of Africa's wildlife and culture.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Safe & Comfortable",
      text: "Luxury vehicles, trusted accommodation and carefully planned itineraries.",
    },
    {
      icon: <FaLeaf />,
      title: "Responsible Tourism",
      text: "Supporting conservation and local communities while protecting nature.",
    },
  ];

  return (
    <>
      {/* Hero */}

      <section
        className="relative h-[70vh] flex items-center justify-center text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1516026672322-bc52d61a55d5')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 max-w-5xl mx-auto text-center px-6"
        >
          <p className="uppercase tracking-[8px] text-[#C9A227] font-semibold">
            About Us
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mt-6">
            Discover The Heart
            <br />
            Of Esto Safari Dreams
          </h1>

          <p className="mt-8 text-xl text-gray-200 leading-9 max-w-3xl mx-auto">
            We don't simply organize safaris—we create extraordinary African
            experiences that inspire, connect, and leave lasting memories.
          </p>
        </motion.div>
      </section>

      {/* Our Story */}

      <section className="py-32 bg-[#F8F5F0]">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <motion.img
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801"
            alt="Safari"
            className="rounded-[2rem] shadow-2xl h-[550px] object-cover w-full"
          />

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <p className="uppercase tracking-[8px] text-[#C9A227] font-semibold">
              Our Story
            </p>

            <h2 className="text-5xl font-bold mt-6 text-[#1B4332]">
              Creating Memories Across Africa
            </h2>

            <p className="mt-8 text-gray-700 leading-9 text-lg">
              Esto Safari Dreams Ltd was founded with one goal—to showcase the
              breathtaking beauty of Africa through authentic, luxurious and
              unforgettable safari adventures.
            </p>

            <p className="mt-6 text-gray-700 leading-9 text-lg">
              From the plains of the Masai Mara and Serengeti to the beaches of
              Zanzibar and the mountain gorillas of Uganda and Rwanda, every
              journey is carefully designed around your dreams, comfort and
              expectations.
            </p>

            <p className="mt-6 text-gray-700 leading-9 text-lg">
              Our experienced team believes every traveler deserves a unique
              experience, combining wildlife, luxury accommodation, culture and
              personalized service from arrival to departure.
            </p>

          </motion.div>

        </div>

      </section>

      {/* Mission Vision Values */}

      <section className="py-32 bg-[#081C15] text-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-4xl mx-auto">

            <p className="uppercase tracking-[8px] text-[#C9A227]">
              What Drives Us
            </p>

            <h2 className="text-5xl font-bold mt-6">
              Excellence In Every Journey
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-10 mt-20">

            {values.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white/10 backdrop-blur-lg rounded-[2rem] p-10 text-center border border-white/10"
              >

                <div className="w-20 h-20 mx-auto rounded-full bg-[#C9A227] text-black flex items-center justify-center text-3xl mb-8">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold mb-5">
                  {item.title}
                </h3>

                <p className="text-gray-300 leading-8">
                  {item.text}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* Why Choose Us */}

      <section className="py-32 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-4xl mx-auto">

            <p className="uppercase tracking-[8px] text-[#C9A227]">
              Why Choose Us
            </p>

            <h2 className="text-5xl font-bold mt-6 text-[#1B4332]">
              The Esto Safari Difference
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-10 mt-20">

            {reasons.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="bg-[#F8F5F0] rounded-[2rem] p-10 text-center shadow-lg"
              >

                <div className="text-5xl text-[#C9A227] mb-8 flex justify-center">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold text-[#1B4332] mb-5">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-8">
                  {item.text}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>
    </>
  );
}

export default About;