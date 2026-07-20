import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="bg-[#1B4332] py-24 md:py-32 lg:py-40 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            relative
            overflow-hidden
            rounded-[2rem]
            lg:rounded-[3rem]
            bg-gradient-to-r
            from-[#1B4332]
            via-[#24543E]
            to-[#2C6B4A]
            border
            border-[#C9A227]/30
            shadow-2xl
            px-8
            sm:px-10
            lg:px-24
            py-16
            md:py-20
            lg:py-24
          "
        >

          {/* Decorative Glow */}

          <div className="absolute -top-40 -right-32 w-96 h-96 bg-[#C9A227]/10 rounded-full blur-3xl"></div>

          <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">

            <p className="uppercase tracking-[4px] sm:tracking-[8px] text-[#C9A227] font-semibold text-sm sm:text-base">
              Your Journey Begins Here
            </p>

            <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Ready For The Safari
              <br />
              Of A Lifetime?
            </h2>

            <p className="mt-6 text-base sm:text-lg lg:text-xl leading-8 text-gray-200 max-w-3xl mx-auto">
              From thrilling wildlife encounters to luxurious safari lodges,
              let Esto Safari Dreams create a personalized African adventure
              filled with unforgettable memories.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">

              <Link
                to="/booking"
                className="
                  w-full
                  sm:w-auto
                  sm:min-w-[240px]
                  h-14
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-[#C9A227]
                  text-black
                  font-bold
                  text-lg
                  hover:bg-yellow-500
                  hover:scale-105
                  transition-all
                  duration-300
                  shadow-xl
                "
              >
                Book Your Safari
                <FaArrowRight />
              </Link>

              <Link
                to="/contact"
                className="
                  w-full
                  sm:w-auto
                  sm:min-w-[240px]
                  h-14
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  border-2
                  border-white
                  text-white
                  font-bold
                  text-lg
                  hover:bg-white
                  hover:text-[#1B4332]
                  hover:scale-105
                  transition-all
                  duration-300
                "
              >
                Contact Our Experts
              </Link>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default CTA;