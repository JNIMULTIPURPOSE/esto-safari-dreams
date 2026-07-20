import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Safaris() {
  const packages = [
    {
      title: "Luxury Safaris",
      image:
        "https://images.unsplash.com/photo-1516426122078-c23e76319801",
      text:
        "Experience Africa's finest lodges, private game drives and exclusive wildlife encounters.",
    },
    {
      title: "Budget Safaris",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      text:
        "Affordable adventures designed to let you experience Africa without compromising quality.",
    },
    {
      title: "Family Safaris",
      image:
        "https://images.unsplash.com/photo-1549366021-9f761d450615",
      text:
        "Fun-filled journeys perfect for families seeking unforgettable memories together.",
    },
    {
      title: "Honeymoon Safaris",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      text:
        "Romantic escapes combining luxury lodges, wildlife and breathtaking scenery.",
    },
    {
      title: "Migration Safaris",
      image:
        "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5",
      text:
        "Witness the spectacular Great Wildebeest Migration across Kenya and Tanzania.",
    },
    {
      title: "Photography Safaris",
      image:
        "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13",
      text:
        "Capture incredible wildlife moments with experienced photographic guides.",
    },
  ];

  return (
    <>
      {/* Hero */}

      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1516026672322-bc52d61a55d5')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <p className="uppercase tracking-[8px] text-[#C9A227] font-semibold">
              Explore Africa
            </p>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight">
              Luxury Safari Packages
            </h1>

            <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-200 leading-7 md:leading-9 max-w-3xl mx-auto">
              Carefully crafted safari experiences designed to match every
              travel style—from luxury escapes to unforgettable family
              adventures.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Packages */}

      {/* Packages */}

<section className="bg-[#050505] py-32">

  <div className="w-full">

    <div className="max-w-7xl mx-auto px-6">

      {/* Heading */}

      <div className="flex justify-center">

        <div className="w-full max-w-4xl text-center">

          <p className="uppercase tracking-[8px] text-[#C9A227] font-semibold">
            Our Collection
          </p>

          <h2 className="mt-6 text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">
            Choose Your Perfect Safari
          </h2>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 leading-7 md:leading-9 max-w-3xl mx-auto">
            Every safari is thoughtfully crafted to deliver breathtaking wildlife,
            luxury accommodation and unforgettable African adventures.
          </p>

        </div>

      </div>

      {/* Cards */}

      <div className="mt-20 flex flex-wrap justify-center items-stretch gap-8">

  {packages.map((item, index) => (

    <motion.div
      key={index}
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
      }}
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      className="
  group
  relative
  w-full
  sm:w-[390px]
  max-w-[390px]
  h-[500px]
  sm:h-[520px]
  overflow-hidden
  rounded-[2rem]
  shadow-2xl
"
    >

      <img
        src={item.image}
        alt={item.title}
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          transition-transform
          duration-1000
          group-hover:scale-110
        "
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

      <div
        className="
          absolute
          inset-0
          flex
          flex-col
          items-center
          justify-end
          text-center
          p-10
        "
      >

        <h3 className="text-3xl font-bold text-white">
          {item.title}
        </h3>

        <p className="mt-5 text-gray-200 leading-8 max-w-[300px]">
          {item.text}
        </p>

        <Link
          to="/booking"
          className="
            mt-8
            inline-flex
            items-center
            justify-center
            w-[220px]
            h-[56px]
            rounded-full
            bg-[#C9A227]
            text-black
            font-bold
            transition-all
            duration-300
            hover:bg-yellow-500
            hover:scale-105
          "
        >
          Book This Safari
        </Link>

      </div>

    </motion.div>

  ))}

</div>

    </div>

  </div>

</section>
    </>
  );
}

export default Safaris;