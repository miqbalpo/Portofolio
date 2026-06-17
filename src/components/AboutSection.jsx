import React from "react";
import SimpleSlider from "./SimpleSlider";

function AboutSection() {
  return (
    <section id="about" className="min-h-full m-auto w-full bg-slate-900 text-white">     
      <div className="flex flex-wrap justify-center pt-20 pb-30 gap-4">
        <SimpleSlider/>
        <div className="w-full sm:w-1/2 px-6">
          <p className="text-3xl sm:text-5xl font-semibold text-center mt-0 mb-5">About Me</p>
          <p className="text-md sm:text-lg text-justify">A motivated and adaptable professional with a passion for continuous learning and growth. With a background in fullstack web development and experience working on various technical projects, I have developed strong analytical, problem-solving, and collaboration skills. I am a hardworking, creative, and cooperative individual who enjoys taking on new challenges and contributing to impactful projects while continuously expanding my expertise.</p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
