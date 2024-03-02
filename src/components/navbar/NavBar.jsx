import TopNav from "./TopNav";
import "../../index.css";
import Footer from "../footer/Footer";
import OurServices from "../services/OurServices";
import Destinations from "../destinations/Destinations";
import Programs from "../programs/Programs";

function NavBar() {
  return (
    <>
      {/* LOGO AND COUNTRIES */}
      <TopNav />

      <div>
        {/* second main section */}
        <section className="relative bannerVideo">
        <video
  className="w-full h-[190px] md:h-[340px] lg:h-[460px] object-cover"
  autoPlay
  loop
  muted
  playsInline
>
  <source src="/video.mp4" type="video/mp4" />
</video>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h1 className=" text-lg lg:text-4xl font-bold font-serif">
              Embark on a Journey of Educational Exploration Across the Globe
            </h1>
        

          </div>
        </section>

        {/* third section , purpose  */}

        <section className=" md:flex mt-5 gap-9">
          <div className="relative      text-center   ">
            <h1 className="text-white font-bold text-xl font-serif m-3">
              Embark on your adventure with studying abroad.
            </h1>
            <img
              className="  md:hidden w-full h-[230px]  md:w-[550px] md:h-[280px]   "
              src="/MySaves/study-abroad-3.jpg"
              alt="not found"
            />
            <p className="text-center text-white mt-4 p-1">
              Discover new cultures, make global connections, and grow
              personally through studying abroad. Each moment teaches, every
              experience adds to your story of self-discovery. Embrace
              challenges, cherish memories, and become a worldly individual.
              Expand your horizons, enrich your perspective, and create lasting
              memories. Let the world be your classroom and embark on this
              adventure of a lifetime.
            </p>
          </div>
        </section>

        {/* guid section  */}
        <section className=" font-serif   bg-slate-200 md:mt-4 md:gap-8">
          <div className="md:w-[50%] h-20 mt-12 bg-custom-102  md:rounded-e-full flex justify-end items-center">
            <p className="text-white text-center md:text-right md:pr-9 text-2xl">
              We're here to support you every step of the way
            </p>
          </div>

          <div>
            <p className="  text-center mt-4 p-4">
              We're prepared to assist you in making well-informed decisions.
              Our approachable student advisors are ready to engage in
              one-on-one conversations with you regarding your study
              alternatives, the application procedure, routes to your desired
              degree, and additional inquiries.
            </p>
          </div>
        </section>

        <Destinations />
      
        <Programs />
        <Footer />
        

        {/* Footer section  */}
      </div>
    </>
  );
}

export default NavBar;
