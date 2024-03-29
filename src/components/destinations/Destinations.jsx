import React, { useState } from "react";
import "../../index.css";
import { useInView } from "react-intersection-observer";

const Destinations = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  if (inView && !isVisible) {
    setIsVisible(true);
  }

  return (
    <>
      {/* Destinations section */}
      <section   >
        <h1 className="text-2xl text-center text-white font-serif font-bold">
          Discover Best Study Abroad Destinations and Countries
        </h1>
        <div className="md:flex md:justify-evenly  m-5 md:gap-12">
          <div className="mb-9 uk text-center">
            <img
              className="  mx-auto h-[240px] md:h-[270px]  w-[400px] object-cover rounded-md shadow-lg hover:shadow-xl "
              src="/MySaves/UKPicture.jpg"
              alt="Study in UK"
            />
            <h1
              className= "mt-4 text-white text-2xl font-serif font-bold " 
                
            >
              Study abroad in the UK
            </h1>
            <p
              className="text-white mt-3 font-serif" 
               
            >
              Embark on a transformative academic journey in the UK, where
              world-class education, diverse cultures, and unparalleled career
              opportunities converge to shape a future of limitless
              possibilities.{" "}
            </p>
            <button
              className="bg-custom-102 w-[135px] mt-5 md:mt-1 hover:bg-custom-101 text-white font-serif rounded-2xl h-7 " 
               
            >
              Discover UK
            </button>
          </div>
          <div className="Australia text-center">
            <img
              className="h-[240px] md:h-[270px]    w-[400px] mx-auto object-cover rounded-md shadow-lg hover:shadow-xl transition duration-300"
              src="/MySaves/stAus.jpg"
              alt="Study in Australia"
            />
            <h1 className="mt-3 text-2xl text-center text-white font-serif font-bold ">
              Study abroad in Australia
            </h1>
            <p className="mt-2 font-serif text-white">
              Immerse yourself in Australia's vibrant academic landscape, where
              world-renowned universities, a welcoming multicultural society,
              and stunning landscapes converge to provide a transformative and
              globally recognized education experience.{" "}
            </p>
            <button className="mb-4 hover:bg-custom-101 bg-custom-102 w-[145px] mt-3 text-white font-serif rounded-2xl h-7">
              Discover Australia
            </button>
          </div>
          <div className="china text-center">
            <img
              className="h-[240px] md:h-[270px] w-[400px] object-cover rounded-md shadow-lg hover:shadow-xl transition duration-300 mx-auto block"
              src="/MySaves/ChinaPicture.jpeg"
              alt="Study in China"
            />
            <h1 className="mt-6 md:mt-2 text-2xl text-center text-white font-serif font-bold ">
              Study abroad in China
            </h1>
            <p className="text-white font-serif mt-2 mb-3">
              Experience the rich tapestry of academia in China, where ancient
              traditions meet cutting-edge innovation, fostering a unique
              learning environment that propels your education and future career
              to new heights{" "}
            </p>
            <button className="mb-4 hover:bg-custom-101 bg-custom-102 w-[135px] text-white font-serif rounded-2xl h-7">
              Discover China
            </button>
          </div>
        </div>

        <span className="block w-full border-b border-red-50 md:bottom-0 mb-3"></span>
      </section>
    </>
  );
};

export default Destinations;
