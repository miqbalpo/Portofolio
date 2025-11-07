import React from "react";
import SimpleSlider from "./SimpleSlider";

function AboutSection() {
  return (
    <section id="about" className="min-h-screen m-auto w-full bg-slate-900 text-white  rounded-2xl sm:rounded-4xl">     
      <div className="flex flex-wrap justify-center pt-20 pb-30 gap-4">
        <SimpleSlider/>
        <div className="relative mx-10 w-1/2 gap-x-8">
          <p className="text-3xl sm:text-5xl font-semibold text-center mt-0 mb-5">About Me</p>
          <p className="text-md sm:text-lg text-justify">I am a Bachelor's Degree of Informatics Engineering from Brawijaya University. With over 2 years of hands-on experience in web development and still committed to expanding my knowledge, I actively engage in academic studies, enroll in online courses, and participate in industry-related events to enhance my skills. Hardworking, creative, and cooperative person by nature. I am currently seeking opportunities to contribute to innovative projects in software development, especially in software and full-stack web development.</p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
