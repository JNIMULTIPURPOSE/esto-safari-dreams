import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Safaris from "./pages/Safaris";
import Destinations from "./pages/Destinations";
import Fleet from "./pages/Fleet";
import Gallery from "./pages/Gallery";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/safaris" element={<Safaris />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/fleet" element={<Fleet />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/safaris" element={<Safaris />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;