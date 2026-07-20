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
          h-[55vh]
          md:h-[65vh]
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
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            relative
            z-10
            w-full
            max-w-5xl
            mx-auto
            px-5
            sm:px-6
            text-center
          "
        >
          <p className="uppercase tracking-[5px] sm:tracking-[8px] text-[#C9A227] font-semibold text-sm sm:text-base">
            Travel In Comfort
          </p>

          <h1 className="mt-6 text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-tight">
            Our Safari Fleet
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-7 sm:leading-9">
            Premium safari vehicles designed for safety, comfort and unforgettable
            journeys across Africa.
          </p>
        </motion.div>
      </section>

      {/* FLEET */}

      <section className="bg-[#050505] py-20 md:py-32 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <p className="uppercase tracking-[5px] sm:tracking-[8px] text-[#C9A227] font-semibold text-sm sm:text-base">
              Our Vehicles
            </p>

            <h2 className="mt-6 text-3xl sm:text-4xl md:text-6xl font-bold text-white">
              Built For African Adventures
            </h2>

            <p className="mt-6 md:mt-8 text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-7 sm:leading-8">
              From luxury game drives to remote wilderness exploration, our fleet
              ensures every journey is safe and comfortable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10 place-items-center">
            {vehicles.map((vehicle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                whileHover={{ y: -12 }}
                className="
                  group
                  relative
                  w-full
                  max-w-[380px]
                  h-[430px]
                  sm:h-[470px]
                  md:h-[500px]
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
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                <div className="absolute bottom-0 w-full p-6 sm:p-8 text-center text-white">
                  <h3 className="text-2xl sm:text-3xl font-bold">
                    {vehicle.name}
                  </h3>

                  <p className="mt-4 text-sm sm:text-base text-gray-300 leading-7">
                    {vehicle.text}
                  </p>

                  <Link
                    to="/booking"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      mt-7
                      w-full
                      sm:w-auto
                      min-w-[220px]
                      h-12
                      sm:h-14
                      rounded-full
                      bg-[#C9A227]
                      text-black
                      font-bold
                      hover:bg-yellow-500
                      hover:scale-105
                      transition-all
                      duration-300
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