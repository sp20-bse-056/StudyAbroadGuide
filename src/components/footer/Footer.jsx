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
   
    
    <div className="flex flex-col md:flex-row gap-8">
      <ul className="flex  ml-3  flex-wrap justify-center   mt-3 mr-8 gap-4 md:gap-12">
        <li className="hover:text-custom-101 border-r-2 pr-2">About</li>
        <li className="hover:text-custom-101 border-r-2 pr-2">Services</li>
        <li className="hover:text-custom-101 border-r-2 pr-2">Find Programs</li>
      </ul>

      <div className="flex gap-3  justify-center  md:mt-0">
        <p className=" follow mt-1  text-xl md:text-2xl">Follow Us</p>
        <FaFacebookSquare className=" mt-1  hover:text-custom-101 h-6 w-6" />
        <FaInstagram className="mt-1 hover:text-custom-101 h-6 w-6" />
        <RiTwitterXLine className=" mt-1  hover:text-custom-101 h-6 w-6" />
        <FaLinkedin className="mt-1 hover:text-custom-101 h-6 w-6" />
      </div>
    </div>
    <div className="pb-3 mt-5 mb-4 md:mb-0">
      <p>© 2024 Education Global, Inc.  All rights reserved.</p>
    </div>
  </div>
 
  {/* Media Queries */}
   
</section>
    </ >
  )
}

export default Footer
