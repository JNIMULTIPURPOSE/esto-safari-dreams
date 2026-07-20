import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#081C15] text-white pt-16 md:pt-24 pb-10 overflow-hidden">

      <div className="w-full flex justify-center px-5 md:px-6">

        <div className="w-full max-w-7xl">

          <div className="grid gap-12 md:gap-16 md:grid-cols-2 lg:grid-cols-4 text-center md:text-left">

            {/* Brand */}

            <div>

              <h2 className="text-2xl md:text-3xl font-bold text-[#C9A227]">
                Esto Safari Dreams
              </h2>

              <p className="mt-5 text-gray-300 leading-8">
                Creating unforgettable luxury safari experiences across
                East Africa with personalized journeys, expert guides,
                and memories that last a lifetime.
              </p>

            </div>

            {/* Quick Links */}

            <div>

              <h3 className="text-xl font-bold mb-6">
                Quick Links
              </h3>

              <ul className="space-y-4 text-gray-300">

                <li><Link to="/" className="hover:text-[#C9A227] transition">Home</Link></li>

                <li><Link to="/about" className="hover:text-[#C9A227] transition">About</Link></li>

                <li><Link to="/safaris" className="hover:text-[#C9A227] transition">Safaris</Link></li>

                <li><Link to="/destinations" className="hover:text-[#C9A227] transition">Destinations</Link></li>

                <li><Link to="/fleet" className="hover:text-[#C9A227] transition">Fleet</Link></li>

                <li><Link to="/gallery" className="hover:text-[#C9A227] transition">Gallery</Link></li>

                <li><Link to="/booking" className="hover:text-[#C9A227] transition">Booking</Link></li>

                <li><Link to="/contact" className="hover:text-[#C9A227] transition">Contact</Link></li>

              </ul>

            </div>

            {/* Contact */}

            <div>

              <h3 className="text-xl font-bold mb-6">
                Contact
              </h3>

              <div className="space-y-5 text-gray-300">

                <div className="flex items-center justify-center md:justify-start gap-3">
                  <FaWhatsapp className="text-[#C9A227]" />
                  <a
                    href="https://wa.me/254113966230"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#C9A227] transition"
                  >
                    WhatsApp
                  </a>
                </div>

                <div className="flex items-center justify-center md:justify-start gap-3">
                  <FaEnvelope className="text-[#C9A227]" />
                  <a
                    href="mailto:info@estosafaridreams.com"
                    className="hover:text-[#C9A227] transition break-all"
                  >
                    info@estosafaridreams.com
                  </a>
                </div>

                <div className="flex items-center justify-center md:justify-start gap-3">
                  <FaMapMarkerAlt className="text-[#C9A227]" />
                  <span>Kenya, East Africa</span>
                </div>

              </div>

            </div>

            {/* Social */}

            <div>

              <h3 className="text-xl font-bold mb-6">
                Follow Us
              </h3>

              <p className="text-gray-300 leading-8 mb-6">
                Stay inspired with our latest safari adventures and travel stories.
              </p>

              <div className="flex justify-center md:justify-start gap-4 flex-wrap">

                <a
                  href="https://www.facebook.com/profile.php?id=61588791099957"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="
                    w-12
                    h-12
                    rounded-full
                    bg-white/10
                    flex
                    items-center
                    justify-center
                    hover:bg-[#C9A227]
                    hover:text-black
                    transition-all
                    duration-300
                    hover:scale-110
                  "
                >
                  <FaFacebookF />
                </a>

                <a
                  href="https://instagram.com/estosafaridreams"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="
                    w-12
                    h-12
                    rounded-full
                    bg-white/10
                    flex
                    items-center
                    justify-center
                    hover:bg-[#C9A227]
                    hover:text-black
                    transition-all
                    duration-300
                    hover:scale-110
                  "
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://wa.me/254113966230"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="
                    w-12
                    h-12
                    rounded-full
                    bg-white/10
                    flex
                    items-center
                    justify-center
                    hover:bg-[#C9A227]
                    hover:text-black
                    transition-all
                    duration-300
                    hover:scale-110
                  "
                >
                  <FaWhatsapp />
                </a>

              </div>

            </div>

          </div>

          <div className="border-t border-white/10 mt-12 md:mt-16 pt-8 text-center text-gray-400 text-sm">

            © {new Date().getFullYear()} Esto Safari Dreams. All Rights Reserved.

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;