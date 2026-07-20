import Hero from "../components/Hero";
import WhyChoose from "../components/WhyChoose";
import SafariPackages from "../components/SafariPackages";
import Testimonials from "../components/Testimonials";
import GalleryPreview from "../components/GalleryPreview";
import CTA from "../components/CTA";

function Home() {
  return (
    <>
      <Hero />

      <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-32">
        <WhyChoose />
      </div>

      <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-32">
        <SafariPackages />
      </div>

      <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-32">
        <Testimonials />
      </div>

      <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-32">
        <GalleryPreview />
      </div>

      <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-32">
        <CTA />
      </div>
    </>
  );
}

export default Home;