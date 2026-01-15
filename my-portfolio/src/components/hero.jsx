import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-600 text-white"
    >
      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        Hi, I’m Pheniline Jerono
      </h1>
      <p className="text-lg md:text-2xl mb-6 max-w-xl">
        I build full-stack web applications using React, Node.js, PostgreSQL,
        and Python. Focused on real-world projects, hackathons, and clean,
        usable designs.
      </p>
      <div className="flex gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-200 transition"
        >
          View Projects
        </a>
        <a
          href="/Pheniline_Jerono_CV.pdf"
          className="px-6 py-3 border-2 border-white font-semibold rounded-lg hover:bg-white hover:text-indigo-600 transition"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Hero;
