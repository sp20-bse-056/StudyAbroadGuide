import React from 'react'

function Programs() {
  return (
    < >
    <span>
    <div className=" top-[30%]    md:w-full md:h-48 bg-no-repeat bg-cover bg-center z-[-1]" style={{ backgroundImage: `url("/MySaves/sciresearch.jpg")` }}></div>

    </span>
    <h1 className=' font-serif text-center bg-custom-100 text-white font-extrabold mt-4 h-7 text-2xl p-3 pb-16'>Offered Programs in which <br /> you can Apply</h1>
    <div className="bg-custom-100 mb-3 flex justify-center flex-wrap">
  {/* Research Work */}
  <div className="research-container text-center bg-slate-200 shadow-md rounded-xl m-3 p-3 transition-transform transform hover:scale-105">
    <img className="w-full rounded-t-xl h-52 shadow-xl mx-auto md:w-48 md:h-48 md:rounded-full " src="/MySaves/research.jpg" alt="Abroad Research Work" />
    <h2 className="text-xl font-bold mt-4 mb-2">Abroad Research Work</h2>
    <p className="text-gray-700">Explore exciting research opportunities abroad with us.</p>
  </div>

  {/* Master's Degrees */}
  <div className="research-container text-center bg-slate-200 shadow-md rounded-xl m-3 p-3 transition-transform transform hover:scale-105">
    <img className="mx-auto   rounded-t-xl shadow-xl md:w-48 md:h-48 md:rounded-full h-42 w-full " src="/MySaves/postgr.jpg" alt="Master's degrees" />
    <h2 className="text-xl font-bold mt-4 mb-2">Master's degrees</h2>
    <p className="text-gray-700">Explore exciting research opportunities abroad with us.</p>
  </div>

  {/* Bachelor's Degrees */}
  <div className="research-container text-center bg-slate-200 shadow-md rounded-xl m-3 p-3 transition-transform transform hover:scale-105">
    <img className="mx-auto   rounded-t-xl shadow-xl md:w-48 md:h-48 md:rounded-full h-52" src="/MySaves/uder2.jpg" alt="Bachelor's degrees" />
    <h2 className="text-xl font-bold mt-4 mb-2 text-custom-100">Bachelor's degrees</h2>
    <p className="text-gray-700">Explore exciting research opportunities abroad with us.</p>
  </div>
</div>

 



 

 
    
    
    </ >
  )
}

export default Programs