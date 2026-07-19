import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {

  return (
    <>

      {/* HERO */}

      <section
        className="
        relative
        h-[65vh]
        flex
        items-center
        justify-center
        bg-cover
        bg-center
        "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1516026672322-bc52d61a55d5')",
        }}
      >

        <div className="absolute inset-0 bg-black/60"></div>


        <motion.div
          initial={{
            opacity:0,
            y:60
          }}

          animate={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:0.8
          }}

          className="
          relative
          z-10
          max-w-5xl
          mx-auto
          px-6
          text-center
          text-white
          "
        >

          <p className="
          uppercase
          tracking-[8px]
          text-[#C9A227]
          font-semibold
          ">
            Get In Touch
          </p>


          <h1 className="
          mt-6
          text-5xl
          md:text-7xl
          font-bold
          leading-tight
          ">
            Contact Esto Safari Dreams
          </h1>


          <p className="
          mt-8
          text-xl
          text-gray-200
          max-w-3xl
          mx-auto
          leading-9
          ">
            Let us help you plan a once-in-a-lifetime African adventure.
          </p>


        </motion.div>

      </section>




      {/* CONTACT SECTION */}


      <section className="
      bg-[#050505]
      py-32
      px-6
      text-white
      ">


        <div className="
        max-w-6xl
        mx-auto
        ">


          <div className="
          grid
          lg:grid-cols-2
          gap-12
          items-center
          ">


            {/* TEXT */}

            <motion.div

            initial={{
              opacity:0,
              x:-50
            }}

            whileInView={{
              opacity:1,
              x:0
            }}

            viewport={{
              once:true
            }}

            transition={{
              duration:0.8
            }}

            className="text-center lg:text-left"

            >

              <p className="
              uppercase
              tracking-[6px]
              text-[#C9A227]
              ">
                Start Your Journey
              </p>


              <h2 className="
              mt-6
              text-5xl
              font-bold
              leading-tight
              ">
                Ready To Explore Africa?
              </h2>


              <p className="
              mt-8
              text-gray-300
              text-lg
              leading-8
              ">
                Whether you need a luxury safari, family adventure,
                honeymoon escape or custom itinerary, our team is ready
                to create your perfect experience.
              </p>


            </motion.div>




            {/* CONTACT CARD */}


            <motion.div

            initial={{
              opacity:0,
              x:50
            }}

            whileInView={{
              opacity:1,
              x:0
            }}

            viewport={{
              once:true
            }}

            transition={{
              duration:0.8
            }}

            className="
            bg-white/10
            backdrop-blur-xl
            border
            border-white/20
            rounded-[2rem]
            p-10
            text-center
            shadow-2xl
            "

            >


              <h3 className="
              text-3xl
              font-bold
              ">
                Esto Safari Dreams Ltd
              </h3>



              <div className="
              mt-8
              space-y-6
              text-gray-200
              ">


                <p className="
                flex
                items-center
                justify-center
                gap-4
                ">
                  <FaMapMarkerAlt className="text-[#C9A227]" />
                  Kenya, East Africa
                </p>



                <p className="
                flex
                items-center
                justify-center
                gap-4
                ">
                  <FaWhatsapp className="text-[#C9A227]" />
                  WhatsApp: +254 113966230
                </p>



                <p className="
                flex
                items-center
                justify-center
                gap-4
                ">
                  <FaEnvelope className="text-[#C9A227]" />
                  info@estosafaridreams.com
                </p>


              </div>




              <a
              href="https://wa.me/254113966230"
              target="_blank"
              rel="noopener noreferrer"
              className="
              inline-flex
              items-center
              justify-center
              gap-3
              mt-10
              bg-[#C9A227]
              text-black
              px-10
              py-4
              rounded-full
              font-bold
              hover:bg-yellow-500
              transition
              "
              >

                <FaWhatsapp />
                Chat On WhatsApp

              </a>


            </motion.div>



          </div>


        </div>


      </section>


    </>
  );
}


export default Contact;