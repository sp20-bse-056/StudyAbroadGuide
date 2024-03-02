import React from 'react'

import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    < >
         <section className="footer font-serif bg-custom-102">
  <div className="footer-text text-white flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-4 md:py-8">
   
    
    <div className="flex flex-col   gap-2">
      <ul className="flex  ml-3   lg:w-full    justify-center   mt-3  gap-4 md:gap-12">
        <li className="hover:text-custom-101 border-r-2 pr-2">About</li>
        <li className="hover:text-custom-101 border-r-2 pr-2">Services</li>
        <li className="hover:text-custom-101 border-r-2 pr-2">Find Programs</li>
      </ul>

      <div className=" flex gap-6 text-center mt-5 justify-center ">
        <p className="  " >Follow Us</p>
        <span className='flex mt-1 md:mt-3 gap-4 '>
        <FaFacebookSquare className=" hover:text-custom-101 " />
        <FaInstagram className=" hover:text-custom-101 "/>
        <RiTwitterXLine className="hover:text-custom-101 " />
        <FaLinkedin className="hover:text-custom-101 " />
        </span>
      </div>
    </div>
    <div className="pb-3 text-center mt-5 mb-4 md:mb-0">
      <p>© 2024 Education Global, Inc.  All rights reserved.</p>
    </div>
  </div>
 
  {/* Media Queries */}
   
</section>
    </ >
  )
}

export default Footer
