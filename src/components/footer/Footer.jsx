import React from 'react'

import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    < >
         <section className="footer font-serif bg-custom-102">
  <div className="footer-text text-white flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-6 md:py-8">
    <div className="pb-3 mb-4 md:mb-0">
      <p>© 2024 Education Global, Inc. All rights reserved.</p>
    </div>
    
    <div className="flex flex-col md:flex-row gap-8">
      <ul className="flex flex-wrap gap-6 md:gap-12">
        <li className="hover:text-custom-101">About</li>
        <li className="hover:text-custom-101">Services</li>
        <li className="hover:text-custom-101">Find Programs</li>
      </ul>

      <div className="flex gap-4  md:mt-0">
        <p className=" follow text-xl md:text-2xl">Follow Us</p>
        <FaFacebookSquare className=" mt-2  hover:text-custom-101 h-6 w-6" />
        <FaInstagram className="mt-2 hover:text-custom-101 h-6 w-6" />
        <RiTwitterXLine className=" mt-2  hover:text-custom-101 h-6 w-6" />
        <FaLinkedin className="mt-2 hover:text-custom-101 h-6 w-6" />
      </div>
    </div>
  </div>

  {/* Media Queries */}
   
</section>
    </ >
  )
}

export default Footer
