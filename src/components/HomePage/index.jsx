"use client";

import React, { useState, useEffect } from "react";
import Skills from "@/components/Skills";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";

const Home = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true" ? true : false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  return (
    <>
      <div id="home">
        <Hero darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
      <div id="skills">
        <Skills darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
      <div id="works">
        <Work darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
      <div id="resume">
        <Resume darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
      <div id="contact">
        <Contact darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </>
  );
};

export default Home;
