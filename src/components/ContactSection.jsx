import React from "react";
import { FaWhatsapp, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail }from "react-icons/md";
import { Link } from 'react-router-dom';

function ContactSection() {
  return (
    <section id="contact" className="mt-10 w-full h-96 bg-slate-800 text-white">
      <div className="m-auto pt-25 align-middle text-center">
        <h1 className="text-xl sm:text-3xl font-semibold relative top-3/4">Interested in Doing A Collaboration?</h1>
      </div>
      <div className="text-md sm:text-xl text-center relative top-1">
        <p>Feel free to contact me via one of these links below!</p>
        <ul className="mt-10 flex justify-center gap-x-10">
          <li><a href="mailto:iqbal.praditya.oscar@gmail.com"><MdOutlineMail className="size-8 object-contain"/></a></li>
          <li><a href="https://www.instagram.com/miqbalpo" target="https://www.instagram.com/miqbalpo"><FaInstagram  className="size-8 object-contain"/></a></li>
          <li><a href="https://www.linkedin.com/in/miqbalpo/" target="https://www.linkedin.com/in/miqbalpo/"><FaLinkedin  className="size-8 object-contain"/></a></li>
          <li><a href="https://github.com/miqbalpo" target="https://github.com/miqbalpo"><FaGithub  className="size-8 object-contain"/></a></li>
        </ul>
      </div>
      <div className="mx-auto mt-10 sm:mt-20 text-center">
        <p className="text-sm sm:text-md">Designed & built by yours truly &#169;miqbalpo, 2025.</p>
      </div>
    </section>
  )
}

export default ContactSection
