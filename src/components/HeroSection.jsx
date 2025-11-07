import React from "react";

function HeroSection() {
  return (
    <>
    <section id="hero" className="min-h-screen m-auto w-full py-50">
      <div className="typewriter align-middle text-center mt-5 sm:mt-10">
        <h1 className=" text-4xl sm:text-5xl font-semibold py-3 whitespace-pre-line sm:whitespace-nowrap sm:w-fit">Welcome to My Website</h1>
      </div>
      <div className=" mt-5 text-xl sm:text-2xl sm:flex sm:justify-center text-center gap-4">
        <p className="inline sm:block">M Iqbal Praditya Oscar </p>
        <p className="inline sm:block">|</p>
        <p> Web Developer</p>
      </div>
      <div className="mt-10 sm:mt-25 text-xl sm:text-2xl text-center text-amber-500">
        <p>Scroll down to continue</p>
        <div className="down-arrow"><p className="text-5xl">&#8595;</p></div>
      </div>
    </section>
    </>
  )
}

export default HeroSection
