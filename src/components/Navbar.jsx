import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#1B4332] shadow-xl border-b border-[#C9A227]/20">
      <div className="max-w-7xl mx-auto h-24 px-8 flex items-center justify-between">

        <Link
          to="/"
          className="text-3xl font-bold text-white tracking-wide"
        >
          Esto <span className="text-[#C9A227]">Safari Dreams</span>
        </Link>

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

      </div>
    </nav>
  );
}

export default Navbar;