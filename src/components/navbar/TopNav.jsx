import React from "react";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { FaHandHoldingWater } from "react-icons/fa";
import { MdPermContactCalendar } from "react-icons/md";
import { SlCallIn } from "react-icons/sl";
import { BiLogoGmail } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { BsPentagonHalf } from "react-icons/bs";

const TopNav = () => {
  let Links =[
    {name:"HOME",link:"/"},
    {name:"SERVICE",link:"/"},
    {name:"ABOUT",link:"/"},
    {name:"BLOG'S",link:"/"},
    {name:"CONTACT",link:"/"},
  ];

  let [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
 
  return (
    <>
     <div className='shadow-md w-full md:hidden fixed z-50 top-0 left-0'>
        <div className='md:flex items-center justify-between bg-custom-100 z-50 py-4 md:px-10 px-5'>
          <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] pt-1 text-white'>
            <span className='text-3xl text-indigo-600 mr-1 pt-2'></span>
            Explore   
            <img src="/MySaves/AusNew.png " alt="" className=" w-8 h-3 ml-2 mt-1" />
            <img src="/MySaves/chinaNew.png " alt="" className=" w-8 h-3 ml-2 mt-1" />
            <img src="/MySaves/UKnew.png " alt="" className=" w-8 h-3 ml-2 mt-1" />
          </div>
          
          <div onClick={toggleNav} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
            {isOpen ? <RxCross2 className="text-white text-3xl" /> : <GiHamburgerMenu className="text-white text-3xl" />}
          </div>

          <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static   bg-custom-100 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${isOpen ? 'top-20 ':'top-[-490px]'}`}>
            {Links.map((link) => (
              <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                <a href={link.link} className='text-white hover:text-gray-400 duration-500'>{link.name}</a>
              </li>
            ))}
          
          </ul>
        </div>
      </div>

    {/* ======== */}
      <div className="top w-full h-12  bg-custom-102 md:bg-custom-100 text-white  md:flex justify-between text-wrap md:justify-evenly  items-center    md:mr-[55px]        mb-2  z-50">
       
        
        
        <div className="flex gap-2 justify-center ">
          <SlCallIn className="mt-1" /> <span> Call Us : +923115132931</span>
        </div>

        <div className="flex justify-center gap-2 ">
          <BiLogoGmail className="mt-1 " />{" "}
          <span>international@thestudyabroad.org</span>
        </div>
        <div className="hidden md:flex  countries">
          <label   htmlFor="">Study In </label>
          <div className="flex justify-center items-center">
          <img src="/MySaves/AusNew.png " alt="" className=" w-8 h-4 ml-2 mt-1" />
            <img src="/MySaves/chinaNew.png " alt="" className=" w-8 h-4 ml-2 mt-1" />
            <img src="/MySaves/UKnew.png " alt="" className=" w-8 h-4 ml-2 mt-1" />
            </div>
        </div>
      </div>

      {/* Navbar ========================================================== */}

      <nav className="sticky  p-3 z-50 top-0 flex-initial h-14 bg-slate-100 hidden md:flex gap-5 justify-evenly items-center text-white">
  <div className="Logo mt-1 flex items-center    text-black ">
    <BsPentagonHalf className="h-9 cursor-pointer w-9"/><p className="ml-2 cursor-pointer font-serif font-bold text-xl mt-1">The Study Abroad</p>
  </div>

  <div className="nav-item transition-transform hover:bg-slate-100 hover:text-custom-102 cursor-pointer hover:translate-y-[-3px] text-custom-100 menu">
  <IoHome className="ml-1 h-6 w-9" />
  <p className="  font-bold" >Home</p>
</div>
<div className="nav-item transition-transform hover:bg-slate-100 hover:text-custom-102 cursor-pointer hover:translate-y-[-3px] text-custom-100 menu">
  <FaPeopleGroup className="ml-4 h-6 w-9" />
  <p className="  font-bold">About Us</p>
</div>
<div className="nav-item transition-transform hover:bg-slate-100 hover:text-custom-102 cursor-pointer hover:translate-y-[-3px] text-custom-100 menu">
  <FaHandHoldingWater className="ml-6 h-6 w-9" />
  <p className="  font-bold">Our Services</p>
</div>
<div className="nav-item transition-transform hover:translate-y-[-3px] cursor-pointer hover:bg-slate-100 hover:text-custom-102 text-custom-100 menu">
  <MdPermContactCalendar className="ml-5 h-6 w-9" />
  <p className="  font-bold">Contact Us</p>
</div>
<div>
  <button className=" font-bold w-[150px] h-9 bg-custom-102  hover:bg-slate-100 hover:text-custom-102 text-white cursor-pointer mt-1 rounded-2xl menu">
    Apply Now
  </button>
</div>

</nav>

    </>
  );
};

export default TopNav;
