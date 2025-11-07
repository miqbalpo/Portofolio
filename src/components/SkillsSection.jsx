import React from "react";
import { getTechStacks } from "../utils/data";

function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen m-auto w-full pb-10">
      <div className="h-1/2 align-middle text-center">
        <h1 className="text-3xl sm:text-5xl font-semibold relative mb-10 pt-20 pb-0 sm:pb-10">Tech Stacks</h1>
      </div>
      <div className="m-auto w-3/4 flex flex-wrap justify-center place-content-evenly gap-x-4 gap-y-8">
        {getTechStacks().length === 0 ? (
          <p>No tech stacks available.</p>
        ) : (
          getTechStacks().map((item) => (
            <div className="w-48">
              <img src={item.img} alt={item.title} /><p className="font-semibold text-md sm:text-xl text-center">{item.title}</p>
            </div>
          ))
        )}
      </div>
    </section>
  )
}

export default SkillsSection
