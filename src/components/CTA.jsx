import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="bg-[#1B4332] py-40 overflow-hidden">

      <div className="w-full flex justify-center px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            w-full
            max-w-7xl
            bg-gradient-to-r
            from-[#1B4332]
            to-[#24543E]
            rounded-[40px]
            px-8
            md:px-16
            lg:px-24
            py-24
            border
            border-[#C9A227]/30
            shadow-2xl
          "
        >

          <div className="w-full flex justify-center">

            <div className="w-full max-w-4xl text-center">

              <p className="uppercase tracking-[8px] text-[#C9A227] font-semibold">
                Your Journey Begins Here
              </p>

              <h2 className="mt-6 text-5xl md:text-6xl font-bold text-white leading-tight">
                Ready For The Safari
                <br />
                Of A Lifetime?
              </h2>

              <p className="mt-8 text-xl leading-9 text-gray-200 max-w-3xl mx-auto">
                From thrilling wildlife encounters to luxurious safari lodges,
                let Esto Safari Dreams create a personalized African adventure
                filled with unforgettable memories.
              </p>

              <div className="mt-14 flex flex-wrap justify-center gap-6">

                <Link
  to="/booking"
  className="
    inline-flex
    items-center
    justify-center
    gap-3
    min-w-[240px]
    h-14
    px-10
    rounded-full
    bg-[#C9A227]
    text-black
    text-lg
    font-bold
    hover:bg-yellow-500
    hover:scale-105
    transition-all
    duration-300
  "
>
  Book Your Safari
  <FaArrowRight />
</Link>

                <Link
  to="/contact"
  className="
    inline-flex
    items-center
    justify-center
    min-w-[240px]
    h-14
    px-10
    rounded-full
    border-2
    border-white
    text-white
    text-lg
    font-bold
    whitespace-nowrap
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

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default CTA;