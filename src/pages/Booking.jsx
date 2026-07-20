import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaHotel,
} from "react-icons/fa";

function Booking() {

const [safari, setSafari] = useState({
  name: "",
  email: "",
  phone: "",
  destination: "",
  date: "",
  requests: "",
});

const [hotel, setHotel] = useState({
  location: "",
  guests: "",
  date: "",
  requests: "",
});

const handleSafariBooking = () => {
  const message = `*🦁 NEW SAFARI BOOKING*

👤 Name: ${safari.name}

📧 Email: ${safari.email}

📱 Phone: ${safari.phone}

📍 Destination: ${safari.destination}

📅 Travel Date: ${safari.date}

📝 Special Requests:
${safari.requests}`;

  window.open(
    `https://wa.me/254113966230?text=${encodeURIComponent(message)}`,
    "_blank"
  );
};

const handleHotelBooking = () => {
  const message = `*🏨 NEW HOTEL BOOKING*

📍 Hotel Location: ${hotel.location}

👥 Guests: ${hotel.guests}

📅 Check-in Date: ${hotel.date}

📝 Preferences:
${hotel.requests}`;

  window.open(
    `https://wa.me/254113966230?text=${encodeURIComponent(message)}`,
    "_blank"
  );
};
  const inputStyle = `
    w-full
    h-14 md:h-16
    bg-black/30
    border
    border-white/20
    rounded-xl
    px-5
    text-white
    placeholder-gray-400
    outline-none
    focus:border-[#C9A227]
    transition
  `;


  return (
    <section
      className="
        relative
        min-h-screen
        bg-[#050505]
        text-white
        px-6
        pt-[180px]
        pb-32
      "
    >

      <div className="absolute inset-0 bg-gradient-to-b from-[#1B4332]/50 via-black to-black"></div>


      <div className="relative z-10 max-w-[1500px] mx-auto">


        {/* HEADER */}

        {/* BOOKING HERO */}

<section
  className="
    relative
    h-[50vh] md:h-[45vh]
    flex
    items-center
    justify-center
    bg-cover
    bg-center
    rounded-b-3xl
    overflow-hidden
    mb-20
  "
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1516426122078-c23e76319801')",
  }}
>

  {/* Overlay */}
  <div className="
    absolute
    inset-0
    bg-black/70
  "></div>


  <div className="
    relative
    z-10
    text-center
    px-6
    max-w-4xl
  ">


    <p className="
      uppercase
      tracking-[8px]
      text-[#C9A227]
      font-semibold
    ">
      Start Your Adventure
    </p>


    <h1 className="
      text-2xl md:text-3xl
sm:text-4xl
md:text-6xl
      font-bold
      mt-6
      text-white
    ">
      Plan Your African Escape
    </h1>


    <p className="
      mt-6
      text-gray-200
      text-base
sm:text-lg
leading-7
sm:leading-8
    ">
      Share your travel dreams and our safari experts will design
      an unforgettable African experience around you.
    </p>


  </div>


</section>



        {/* FORMS */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">



          {/* SAFARI BOOKING */}


          <div
            className="
              bg-white/10
              backdrop-blur-xl
              border
              border-white/20
              rounded-2xl
              p-6
sm:p-8
md:p-12
              shadow-2xl
            "
          >


            <h2 className="text-2xl md:text-3xl font-bold mb-10">
              Safari Booking
            </h2>



            <form className="flex flex-col gap-8">


              <Input
  icon={<FaUser />}
  style={inputStyle}
  placeholder="Full Name"
  value={safari.name}
  onChange={(e) =>
    setSafari({ ...safari, name: e.target.value })
  }
/>


              <Input
  icon={<FaEnvelope />}
  style={inputStyle}
  placeholder="Email Address"
  value={safari.email}
  onChange={(e) =>
    setSafari({ ...safari, email: e.target.value })
  }
/>


              <Input
  icon={<FaPhone />}
  style={inputStyle}
  placeholder="Phone / WhatsApp"
  value={safari.phone}
  onChange={(e) =>
    setSafari({ ...safari, phone: e.target.value })
  }
/>


              <Input
  icon={<FaMapMarkerAlt />}
  style={inputStyle}
  placeholder="Destination"
  value={safari.destination}
  onChange={(e) =>
    setSafari({ ...safari, destination: e.target.value })
  }
/>


              <Input
  icon={<FaCalendarAlt />}
  style={inputStyle}
  type="date"
  value={safari.date}
  onChange={(e) =>
    setSafari({ ...safari, date: e.target.value })
  }
/>



              <textarea
  className="
    w-full
    h-36
    bg-black/30
    border
    border-white/20
    rounded-xl
    p-5
    text-white
    placeholder-gray-400
    outline-none
    focus:border-[#C9A227]
  "
  placeholder="Special Requests"
  value={safari.requests}
  onChange={(e) =>
    setSafari({ ...safari, requests: e.target.value })
  }
/>



              <button
  type="button"
  onClick={handleSafariBooking}
  className="
    w-full
    h-14 md:h-16
    bg-[#C9A227]
    text-black
    rounded-xl
    font-bold
    text-lg
    hover:bg-yellow-500
    transition
  "
>
  Submit Safari Request
</button>


            </form>


          </div>






          {/* HOTEL BOOKING */}


          <div
            className="
              bg-white/10
              backdrop-blur-xl
              border
              border-white/20
              rounded-2xl
              p-8
              md:p-12
              shadow-2xl
            "
          >


            <h2
              className="
                text-2xl md:text-3xl
                font-bold
                mb-10
                flex
                items-center
                gap-4
              "
            >

              <FaHotel className="text-[#C9A227]" />

              Hotel Booking

            </h2>



            <form className="flex flex-col gap-8">


              <input
  className={inputStyle}
  placeholder="Hotel Location"
  value={hotel.location}
  onChange={(e) =>
    setHotel({
      ...hotel,
      location: e.target.value,
    })
  }
/>


              <input
  className={inputStyle}
  placeholder="Number of Guests"
  value={hotel.guests}
  onChange={(e) =>
    setHotel({
      ...hotel,
      guests: e.target.value,
    })
  }
/>


              <input
  type="date"
  className={inputStyle}
  value={hotel.date}
  onChange={(e) =>
    setHotel({
      ...hotel,
      date: e.target.value,
    })
  }
/>



              <textarea
  className="
    w-full
    h-44
    bg-black/30
    border
    border-white/20
    rounded-xl
    p-5
    text-white
    placeholder-gray-400
    outline-none
    focus:border-[#C9A227]
  "
  placeholder="Hotel preferences or special requests"
  value={hotel.requests}
  onChange={(e) =>
    setHotel({
      ...hotel,
      requests: e.target.value,
    })
  }
/>



              <button
  type="button"
  onClick={handleHotelBooking}
  className="
    w-full
    h-14 md:h-16
    border-2
    border-[#C9A227]
    text-[#C9A227]
    rounded-xl
    font-bold
    text-lg
    hover:bg-[#C9A227]
    hover:text-black
    transition
  "
>
  Request Hotel Booking
</button>


            </form>


          </div>


        </div>






        {/* FEATURES */}


        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">


          {[
            "Local Safari Experts",
            "Luxury Accommodation",
            "Personalized Trips",
            "24/7 Support",
          ].map((item,index)=>(


            <div
              key={index}
              className="
                bg-white/10
                border
                border-white/20
                rounded-xl
                p-4 md:p-7
                text-center
              "
            >


              <p className="text-[#C9A227] text-2xl">
                ✓
              </p>


              <p className="mt-2 text-sm md:text-base text-gray-300">
                {item}
              </p>


            </div>


          ))}


        </div>


      </div>


    </section>
  );
}





function Input({
  icon,
  style,
  placeholder,
  type = "text",
  value,
  onChange,
}) 

{

  return (

    <div className="relative">

      {icon && (
        <div className="
          absolute
          left-5
          top-1/2
          -translate-y-1/2
          text-[#C9A227]
        ">
          {icon}
        </div>
      )}


      <input
  type={type}
  value={value}
  onChange={onChange}
  className={`${style} ${icon ? "pl-14" : ""}`}
  placeholder={placeholder}
/>


    </div>

  );

}


export default Booking;