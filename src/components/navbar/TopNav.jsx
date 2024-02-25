import React from "react";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { FaHandHoldingWater } from "react-icons/fa";
import { MdPermContactCalendar } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
const TopNav = () => {
  return (
    <>
  <div className="top w-full flex justify-evenly md:justify-between mr-[35px] md:mr-[55px] align-middle sticky top-0 bg-white z-50">
  <div className="Logo mt-1">
    <img
      className="w-[160px] gap-4"
      src="/MySaves/Logo3.png"
      alt="logo"
    />
  </div>
  <div className="flex gap-2 mt-7">
    <BsWhatsapp className="mt-1" /> <span> +923135044999</span>
  </div>
  <div className="hidden md:block countries">
    <img src="/MySaves/studyIN.png" className="h-16" alt="" />
  </div>
</div>


      {/* Navbar ========================================================== */}

     
        <nav className="   flex-initial h-20  bg-custom-100 hidden md:flex gap-5 justify-evenly p-3  items-center text-white">
          <div className=" nav-item transition-transform hover:text-custom-101 cursor-pointer hover:translate-y-[-3px]">
            <IoHome className="ml-1 h-6 w-9" />
            <p>Home</p>
          </div>
          <div className="nav-item transition-transform hover:text-custom-101 cursor-pointer hover:translate-y-[-3px]">
            <FaPeopleGroup className="ml-4 h-6 w-9" />
            <p>About Us</p>
          </div>
          <div className="nav-item transition-transform hover:text-custom-101 cursor-pointer hover:translate-y-[-3px]">
            <FaHandHoldingWater className="ml-6 h-6 w-9" />
            <p>Our Services</p>
          </div>
          <div className="nav-item transition-transform hover:translate-y-[-3px] cursor-pointer hover:text-custom-101">
            <MdPermContactCalendar className="ml-5 h-6 w-9" />
            <p>Contact Us</p>
          </div>

          <div>
            <button className="w-[150px] h-9  hover:bg-custom-101 bg-custom-102 mt-1 rounded-2xl">
              Apply Now
            </button>
          </div>
        </nav>
    
    </>
  );
};

export default TopNav;
