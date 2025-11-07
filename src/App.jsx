import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import WorkSection from './components/WorkSection'
import ContactSection from './components/ContactSection'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const waitForResources = async () => {
      // Wait for all images
      const imagePromises = Array.from(document.images).map(
        (img) =>
          new Promise((resolve) => {
            if (img.complete) resolve();
            else {
              img.onload = img.onerror = () => resolve();
            }
          })
      );

      // Wait for fonts
      const fontPromise = document.fonts ? document.fonts.ready : Promise.resolve();

      // Wait for window load
      const windowLoadPromise = new Promise((resolve) => {
        if (document.readyState === 'complete') resolve();
        else window.addEventListener('load', resolve, { once: true });
      });

      // Wait for all promises
      await Promise.all([windowLoadPromise, fontPromise, ...imagePromises]);

      // Smooth delay
      setTimeout(() => setIsLoading(false), 800);
    };

    waitForResources();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const sections = document.querySelectorAll("section:not(#hero):not(#contact)");
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("show");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      sections.forEach((section) => observer.observe(section));
      return () => sections.forEach((section) => observer.unobserve(section));
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-slate-800 text-white z-50">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <WorkSection />
      <ContactSection />
    </>
  );
}

export default App;
