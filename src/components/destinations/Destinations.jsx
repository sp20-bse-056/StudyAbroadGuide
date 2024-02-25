import React, { useState } from 'react';
import '../../index.css';
import { useInView } from 'react-intersection-observer';

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
      <section className={`mt-6 ${isVisible ? 'animate-up-from-bottom' : ''}`} ref={ref}>
        <h1 className="text-2xl text-center text-white font-serif font-bold">
          Discover Best Study Abroad Destinations and Countries
        </h1>
        <div className="md:flex md:justify-center mt-5 md:gap-12">
  <div className="mb-9 uk text-center">
    <img
      className={`  mx-auto h-[240px] md:h-[270px]  w-[400px] object-cover rounded-md shadow-lg hover:shadow-xl transition duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      src="/MySaves/STUDYinUK.jpg"
      alt="Study in UK"
    />
    <h1 className={`mt-4 text-white text-2xl font-serif font-bold ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      Study abroad in the UK
    </h1>
    <p className={`text-white mt-3 font-serif ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      Famous for its history, traditions, culture, and scenery, the UK is a unique, multicultural country.
    </p>
    <button className={`bg-custom-102 w-[135px] mt-5 md:mt-1 hover:bg-custom-101 text-white font-serif rounded-2xl h-7 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
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
      Famous for its history, traditions, culture, and scenery, Australia is a unique, multicultural country.
    </p>
    <button className="mb-4 hover:bg-custom-101 bg-custom-102 w-[145px] mt-3 text-white font-serif rounded-2xl h-7">
      Discover Australia
    </button>
  </div>
  <div className="china text-center">
  <img
  className="h-[240px] md:h-[270px] w-[400px] object-cover rounded-md shadow-lg hover:shadow-xl transition duration-300 mx-auto block"
  src="/MySaves/stUK.jpg"
  alt="Study in China"
/>
    <h1 className="mt-6 md:mt-2 text-2xl text-center text-white font-serif font-bold ">
      Study abroad in China
    </h1>
    <p className="text-white font-serif mt-2 mb-3">
      Famous for its history, traditions, culture, and scenery, China is a unique, multicultural country.
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
}

export default Destinations;
