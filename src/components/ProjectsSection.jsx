import React, { useState, useEffect } from "react";
import { getProjects } from "../utils/data";

function ProjectsSection() {
  const projects = getProjects();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState("right");

  const prev = () => {
    setDirection("left");
    setCurrent((c) => (c - 1 + projects.length) % projects.length);
  };

  const next = () => {
    setDirection("right");
    setCurrent((c) => (c + 1) % projects.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection("right");
      setCurrent((c) => (c + 1) % projects.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [current]);

  const project = projects[current];

  return (
    <section id="projects" className="scroll-mt-24 m-auto w-full bg-slate-900 text-white py-6 flex flex-col h-[750px] sm:h-[650px]">
      <div className="text-center">
        <h1 className="text-3xl sm:text-5xl font-semibold mt-5 mb-4 pt-0 sm:pt-6">
          Check Out My Projects
        </h1>
      </div>

      {/* Card */}
      <div className="flex-1 flex items-center justify-center px-4 overflow-hidden">
        <div
          key={current}
          className={`project-card-${direction} flex items-center w-full max-w-5xl gap-4 flex-col sm:flex-row justify-center`}
        >
          <div className="flex items-center justify-center shrink-0">
            <img
              src={project.img}
              alt={project.title}
              className="w-64 h-48 sm:h-80 object-contain"
            />
          </div>
          <div className="w-full sm:w-1/2 px-6 sm:px-0 overflow-hidden">
            <p className="text-3xl sm:text-4xl font-semibold text-center sm:text-left mt-0 mb-5">
              {project.title}
            </p>
            <p className="text-sm sm:text-md text-justify line-clamp-5 sm:line-clamp-none">{project.description}</p>
            <p className="mt-5 text-amber-500 font-semibold">
              <a href={project.url} target={project.url}>
                {project.linkLabel} &#8594;
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6 mt-8 mb-4">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full border border-white/30 hover:bg-white/10 transition flex items-center justify-center text-white text-xl"
        >
          &#8592;
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? "right" : "left");
                setCurrent(i);
              }}
              className={`h-2.5 rounded-full transition-all duration-300 ${i === current ? "bg-amber-500 w-5" : "bg-white/30 w-2.5"}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-10 h-10 rounded-full border border-white/30 hover:bg-white/10 transition flex items-center justify-center text-white text-xl"
        >
          &#8594;
        </button>
      </div>

      {/* Counter */}
      <p className="text-center text-white/40 text-sm mb-4">
        {current + 1} / {projects.length}
      </p>
    </section>
  );
}

export default ProjectsSection;