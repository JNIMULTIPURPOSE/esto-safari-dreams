import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Destinations() {

  const places = [
    {
      name: "Kenya",
      image:
        "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5",
      text:
        "Experience the legendary Maasai Mara, breathtaking landscapes and incredible wildlife encounters.",
    },
    {
      name: "Tanzania",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      text:
        "Discover Serengeti plains, Ngorongoro Crater and unforgettable migration experiences.",
    },
    {
      name: "Uganda",
      image:
        "https://images.unsplash.com/photo-1549366021-9f761d450615",
      text:
        "Explore lush landscapes, mountain gorillas and authentic East African adventures.",
    },
    {
      name: "Rwanda",
      image:
        "https://images.unsplash.com/photo-1535338454770-8be927b5a00b",
      text:
        "Encounter gorillas, beautiful scenery and the charm of the Land of a Thousand Hills.",
    },
    {
      name: "Zanzibar",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      text:
        "Combine your safari with white beaches, luxury resorts and tropical relaxation.",
    },
  ];


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
          w-full
          max-w-5xl
          mx-auto
          px-6
          text-center
          "
        >

          <p className="
          uppercase
          tracking-[8px]
          text-[#C9A227]
          font-semibold
          ">
            Discover Africa
          </p>


          <h1 className="
          mt-6
          text-5xl
          md:text-7xl
          font-bold
          text-white
          leading-tight
          ">
            Explore Our
            <br />
            African Destinations
          </h1>


          <p className="
          mt-8
          text-xl
          text-gray-200
          max-w-3xl
          mx-auto
          leading-9
          ">
            Journey through iconic landscapes, rich cultures and
            unforgettable wildlife destinations across East Africa.
          </p>


        </motion.div>

      </section>



      {/* DESTINATIONS */}


      <section className="
      bg-[#050505]
      py-32
      px-6
      ">


        <div className="
        max-w-7xl
        mx-auto
        ">


          <div className="
          text-center
          mb-20
          ">

            <p className="
            uppercase
            tracking-[8px]
            text-[#C9A227]
            ">
              Our Destinations
            </p>


            <h2 className="
            mt-6
            text-5xl
            md:text-6xl
            font-bold
            text-white
            ">
              Choose Your Adventure
            </h2>


          </div>



          <div className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-10
          place-items-center
          ">


          {places.map((place,index)=>(


            <motion.div

            key={index}

            initial={{
              opacity:0,
              y:60
            }}

            whileInView={{
              opacity:1,
              y:0
            }}

            viewport={{
              once:true
            }}

            transition={{
              duration:0.7,
              delay:index*0.15
            }}

            whileHover={{
              y:-12
            }}

            className="
            group
            relative
            h-[450px]
            w-full
            max-w-[380px]
            overflow-hidden
            rounded-[2rem]
            shadow-2xl
            "

            >


              <img
              src={place.image}
              alt={place.name}
              className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              group-hover:scale-110
              transition-transform
              duration-700
              "
              />


              <div className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black
              via-black/40
              to-transparent
              "></div>



              <div className="
              absolute
              bottom-0
              p-8
              text-center
              text-white
              w-full
              ">


                <h3 className="
                text-3xl
                font-bold
                ">
                  {place.name}
                </h3>


                <p className="
                mt-4
                text-gray-300
                leading-7
                ">
                  {place.text}
                </p>


                <Link
                to="/booking"
                className="
                inline-flex
                mt-6
                bg-[#C9A227]
                text-black
                px-8
                py-3
                rounded-full
                font-bold
                hover:bg-yellow-500
                transition
                "
                >
                  Plan Journey
                </Link>


              </div>


            </motion.div>


          ))}


          </div>


        </div>


      </section>


    </>
  );
}


export default Destinations;