import React from "react";

function Programs() {
  return (
    <>
      <span>
        <div className="banner text-white text-center flex flex-col justify-center items-center bg-custom-102 w-full h-64">
          <h1 className=" mb-3 text-3xl  font-bold">
            Exceptional Consulting Services
          </h1>
          <p>
            ___ EduGlobal offers professional consulting services delivered by
            certified and seasoned consultants ___
          </p>
        </div>
      </span>
      <h1 className=" font-serif text-center bg-custom-100 text-white font-extrabold mt-4 h-7 text-2xl p-3 pb-16">
        Offered Programs in which <br /> you can Apply
      </h1>
      <div className="bg-custom-100 mb-3 flex justify-center flex-wrap">
        {/* Research Work */}
        <div className=" flex-wrap md:flex  justify-center">
          {/* Abroad Research Work */}
          <div className="research-container  sm:w-[600px] md:[250px]  lg:w-[400px]  flex flex-col items-center text-center bg-slate-200 shadow-md rounded-xl m-3 p-3 transition-transform transform hover:scale-105">
            <img
              className="w-full h-48 object-cover rounded-t-xl"
              src="/MySaves/research.jpg"
              alt="Abroad Research Work"
            />
            <h2 className="text-xl font-bold mt-4 mb-2">
              International Research Opportunities
            </h2>
            <p className="text-gray-700">
              Explore exciting research opportunities globally with us. Discover
              thrilling avenues for research across the globe.
            </p>
          </div>

          {/* Master's Degrees */}
          <div className="research-container md:[250px] flex flex-col flex-wrap sm:w-[600px] lg:w-[400px]   items-center text-center bg-slate-200 shadow-md rounded-xl m-3 p-3 transition-transform transform hover:scale-105">
            <img
              className="w-full h-48 object-cover rounded-t-xl"
              src="/MySaves/postgr.jpg"
              alt="Master's degrees"
            />
            <h2 className="text-xl font-bold mt-4 mb-2">
              Elevate Your Expertise: Pursue a Master's Degree
            </h2>
            <p className="text-gray-700  ">
              Broaden your expertise with our diverse array of Master's degree
              programs.
            </p>
          </div>

          {/* Bachelor's Degrees */}
          <div className="research-container sm:w-[600px] md:[250px]   lg:w-[400px]  flex flex-col items-center text-center bg-slate-200 shadow-md rounded-xl m-3 p-3 transition-transform transform hover:scale-105">
            <img
              className="w-full h-48 object-cover rounded-t-xl"
              src="/MySaves/uder2.jpg"
              alt="Bachelor's degrees"
            />
            <h2 className="text-xl font-bold mt-4 mb-2">
              Foundational Education: Bachelor's Degrees
            </h2>
            <p className="text-gray-700">
              Build a solid academic foundation and kickstart your career with
              our diverse range of Bachelor's degree programs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Programs;
