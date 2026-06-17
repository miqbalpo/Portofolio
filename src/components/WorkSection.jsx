import React from "react";
import { getWorkExperience } from "../utils/data";

function WorkSection() {
  const experiences = getWorkExperience();

  return (
    <section id="work" className="min-h-screen m-auto w-full text-black py-10 sm:py-0 sm:pb-0">
      <div className="h-full align-middle text-center">
        <h1 className="text-3xl sm:text-5xl font-semibold relative my-10 pt-0 sm:pt-20">
          Work Experience
        </h1>
      </div>
      <div className="flex flex-col gap-10 my-10">
        {experiences.map((exp) => (
          <div key={exp.id} className="flex flex-wrap justify-center gap-4">
            <div className="w-[320px] object-contain">
              <img
                src={exp.img}
                alt={exp.role}
                className="m-auto w-64 sm:w-full h-auto object-contain rounded-3xl"
              />
            </div>
            <div className="mx-10 w-1/2 gap-x-8">
              <p className="text-xl sm:text-3xl font-semibold text-center mt-0 mb-5">{exp.role}</p>
              <p className="text-md sm:text-xl font-semibold text-center mt-0 mb-5">{exp.company} - {exp.period}</p>
              <ul className="text-sm sm:text-md text-justify list-disc">
                {exp.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WorkSection;