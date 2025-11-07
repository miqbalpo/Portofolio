import React from "react";
import SimpleSlider from "./SimpleSlider";

function WorkSection() {
  return (
    <section id="work" className="min-h-screen m-auto w-full text-black py-10 sm:py-0 sm:pb-0">   
      <div className="h-full align-middle text-center">
        <h1 className="text-3xl sm:text-5xl font-semibold relative my-10 pt-0 sm:pt-20">Work Experience</h1>
      </div>  
      <div className="flex flex-wrap justify-center gap-4">
        <div className="w-[320px] object-contain">
            <img src="/src/assets/about-pics/magang kalbe.jpg" alt="about" className="m-auto w-64 sm:w-full h-auto object-contain rounded-3xl" />
        </div>
        <div className="side-bg"></div>
        <div className="mx-10 w-1/2 gap-x-8">
          <p className="text-xl sm:text-3xl font-semibold text-center mt-0 mb-5">Web Developer Intern</p>
          <p className="text-md sm:text-xl font-semibold text-center mt-0 mb-5">PT Kalbe Farma Tbk - 2024</p>
          <ul className="text-sm sm:text-md text-justify list-disc">
            <li>Translated user requirements and design prototypes into a fully functioning website.</li>
            <li>Developed and maintained a digital guest book website for more than 100 daily visitors of the company.</li>
            <li>Acted as the UI/UX consultant for the HRIS website of the Human Capital Department.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default WorkSection
