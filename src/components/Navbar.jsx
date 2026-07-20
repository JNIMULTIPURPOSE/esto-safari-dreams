import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


function Navbar() {
const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#1B4332] shadow-xl border-b border-[#C9A227]/20">

  <div className="max-w-7xl mx-auto h-24 px-6 md:px-8 flex items-center justify-between">

    {/* Logo */}

    <Link
      to="/"
      className="text-xl md:text-3xl font-bold text-white tracking-wide"
    >
      Esto <span className="text-[#C9A227]">Safari Dreams</span>
    </Link>

    {/* Desktop Menu */}

    <div className="hidden lg:flex items-center gap-8 text-white font-medium">

      <Link to="/" className="hover:text-[#C9A227] transition">
        Home
      </Link>

      <Link to="/about" className="hover:text-[#C9A227] transition">
        About
      </Link>

      <Link to="/safaris" className="hover:text-[#C9A227] transition">
        Safaris
      </Link>

      <Link to="/destinations" className="hover:text-[#C9A227] transition">
        Destinations
      </Link>

      <Link to="/fleet" className="hover:text-[#C9A227] transition">
        Fleet
      </Link>

      <Link to="/gallery" className="hover:text-[#C9A227] transition">
        Gallery
      </Link>

      <Link to="/contact" className="hover:text-[#C9A227] transition">
        Contact
      </Link>

      <Link
        to="/booking"
        className="bg-[#C9A227] text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition"
      >
        Book Now
      </Link>

    </div>

    {/* Mobile Menu Button */}

    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="lg:hidden text-white text-3xl"
    >
      {menuOpen ? <FaTimes /> : <FaBars />}
    </button>

  </div>

  {/* Mobile Menu */}

  {menuOpen && (
    <div className="lg:hidden bg-[#1B4332] border-t border-[#C9A227]/20">

      <div className="flex flex-col px-6 py-6 space-y-5 text-white">

        <Link onClick={() => setMenuOpen(false)} to="/">
          Home
        </Link>

        <Link onClick={() => setMenuOpen(false)} to="/about">
          About
        </Link>

        <Link onClick={() => setMenuOpen(false)} to="/safaris">
          Safaris
        </Link>

        <Link onClick={() => setMenuOpen(false)} to="/destinations">
          Destinations
        </Link>

        <Link onClick={() => setMenuOpen(false)} to="/fleet">
          Fleet
        </Link>

        <Link onClick={() => setMenuOpen(false)} to="/gallery">
          Gallery
        </Link>

        <Link onClick={() => setMenuOpen(false)} to="/contact">
          Contact
        </Link>

        <Link
          onClick={() => setMenuOpen(false)}
          to="/booking"
          className="bg-[#C9A227] text-black text-center py-3 rounded-full font-semibold"
        >
          Book Now
        </Link>

      </div>

    </div>
  )}

</nav>
  );
}

export default Navbar;