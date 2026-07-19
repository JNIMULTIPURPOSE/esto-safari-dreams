import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Fleet() {

  const vehicles = [
  {
    name: "Toyota Land Cruiser",
    image:
      "https://images.unsplash.com/photo-1527786356703-4b100091cd2c",
    text:
      "Our premium safari Land Cruisers offer comfort, excellent visibility and unmatched performance across Africa's toughest terrains.",
  },

  {
    name: "Safari Van",
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b",
    text:
      "Perfect for group adventures with spacious seating, pop-up roofs and comfortable wildlife viewing experiences.",
  },

  {
    name: "4x4 Jeep",
    image:
      "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98",
    text:
      "Explore remote destinations with powerful 4x4 capability designed for unforgettable wilderness experiences.",
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
          "url('https://images.unsplash.com/photo-1533473359331-0135ef1b58bf')",
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
            Travel In Comfort
          </p>


          <h1 className="
          mt-6
          text-5xl
          md:text-7xl
          font-bold
          text-white
          leading-tight
          ">
            Our Safari Fleet
          </h1>


          <p className="
          mt-8
          text-xl
          text-gray-200
          max-w-3xl
          mx-auto
          leading-9
          ">
            Premium safari vehicles designed for safety, comfort
            and unforgettable journeys across Africa.
          </p>


        </motion.div>


      </section>



      {/* FLEET */}


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
              Our Vehicles
            </p>


            <h2 className="
            mt-6
            text-5xl
            md:text-6xl
            font-bold
            text-white
            ">
              Built For African Adventures
            </h2>


            <p className="
            mt-8
            text-gray-300
            text-lg
            max-w-3xl
            mx-auto
            leading-8
            ">
              From luxury game drives to remote wilderness exploration,
              our fleet ensures every journey is safe and comfortable.
            </p>


          </div>



          <div className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-10
          place-items-center
          ">


          {vehicles.map((vehicle,index)=>(


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
            h-[480px]
            w-full
            max-w-[380px]
            overflow-hidden
            rounded-[2rem]
            shadow-2xl
            "

            >


              <img
              src={vehicle.image}
              alt={vehicle.name}
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
              via-black/50
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
                  {vehicle.name}
                </h3>


                <p className="
                mt-4
                text-gray-300
                leading-7
                ">
                  {vehicle.text}
                </p>


                <Link
                to="/booking"
                className="
                inline-flex
                mt-7
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
                  Reserve Vehicle
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


export default Fleet;