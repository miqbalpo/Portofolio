import React from "react";

function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24 min-h-screen m-auto w-full bg-slate-900 text-white rounded-2xl sm:rounded-4xl py-10">
      <div className="h-full align-middle text-center">
        <h1 className="text-3xl sm:text-5xl font-semibold relative mt-5 mb-10 pt-0 sm:pt-10">Check Out My Projects</h1>
      </div>
      <div className="flex flex-wrap justify-center mt-10 mb-20 sm:mb-5 gap-4">
        <div>
          <img src="/src/assets/project-mockups/cardion.png" alt="about" className="w-64 h-48 sm:h-96 object-contain" />
        </div>
        <div className="relative top-10 w-1/2 gap-x-8">
          <p className="text-3xl sm:text-5xl font-semibold text-center sm:text-right mt-0 mb-5">Cardi-On!</p>
          <p className="text-sm sm:text-md  text-justify">Cardi-On! is an application that makes it easier for its users to place orders or rent sports facilities in their area of residence, such as gyms, soccer fields, tennis courts, etc. Additionally, users can also view the training schedule at the desired sports facility and hire a trainer or companion to help them to do said exercise.</p>
          <p className="mt-5 text-amber-500 font-semibold justify-end"><a href="https://github.com/miqbalpo/Cardi-On" target="https://github.com/miqbalpo/Cardi-On">View code on GitHub &#8594;</a></p>
        </div>
      </div>
      <div className="flex sm:flex-row flex-wrap justify-center mt-10 mb-20 sm:mb-5 gap-4 flex-col-reverse items-center">
        <div className="relative top-10 w-1/2 gap-x-8">
          <p className="text-3xl sm:text-5xl font-semibold text-center sm:text-left mt-0 mb-5">UBreak</p>
          <p className="text-sm sm:text-md  text-justify">UBreak is application made specifically for Brawijaya University that not only assists students in time and task management but also pays special attention to mental health aspects. Combining scheduling elements, reminders, and specific features to check mental health, UBreak is designed to be a loyal companion for students seeking to maintain a balance between academic demands and psychological well-being..</p>
          <p className="mt-5 text-amber-500 font-semibold justify-end"><a href="https://github.com/Alfansya/UBreak" target="https://github.com/Alfansya/UBreak">View code on GitHub &#8594;</a></p>
        </div>
        <div>
          <img src="/src/assets/project-mockups/ubreak.png" alt="about" className="w-64 h-48 sm:h-96 object-contain" />
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-10 mb-20 sm:mb-5 gap-4">
        <div>
          <img src="/src/assets/project-mockups/bukutamu.png" alt="about" className="w-64 h-48 sm:h-96 object-contain" />
        </div>
        <div className="relative top-10 w-1/2 gap-x-8">
          <p className="text-3xl sm:text-5xl font-semibold text-center sm:text-right mt-0 mb-5">Buku Tamu Digital Kalbe Farma</p>
          <p className="text-sm sm:text-md text-justify">"Buku Tamu Digital Kalbe Farma" or "Kalbe Farma Digital Guestbook" in English, is an innovative solution developed by PT Kalbe Farma Tbk. to digitize administrative processes related to event organization and guest reception at the company. This application aims to enhance operational efficiency and effectiveness by providing features such as structured event planning, easy guest registration, real-time attendance monitoring, and effective information distribution.</p>
          <p className="mt-5 text-amber-500 font-semibold justify-end"><a href="https://bukutamu.kalbe.co.id/" target="https://bukutamu.kalbe.co.id/">View live website &#8594;</a></p>
        </div>
      </div>
      <div className="flex sm:flex-row flex-wrap justify-center mt-10 mb-20 sm:mb-5 gap-4 flex-col-reverse items-center">
        <div className="relative top-10 w-1/2 gap-x-8">
          <p className="text-3xl sm:text-5xl font-semibold text-center sm:text-left mt-0 mb-5">AniMap</p>
          <p className="text-sm sm:text-md  text-justify">AniMap is a web application designed to help users easily find information about anime. On this website, users can search for anime based on specific criteria such as title, genre, rating, and more. After finding an anime they are interested in, users can bookmark it to categorize it however they like based on. One of AniMap’s main advantages is its Content-Based Filtering recommendation feature, which provides personalized anime suggestions based on each user’s preferences.</p>
          <p className="mt-5 text-amber-500 font-semibold justify-end"><a href="https://github.com/miqbalpo/AniMap" target="https://github.com/miqbalpo/AniMap">View code on GitHub &#8594;</a></p>
        </div>
        <div>
          <img src="/src/assets/project-mockups/animap.png" alt="about" className="w-64 h-48 sm:h-96 object-contain" />
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
