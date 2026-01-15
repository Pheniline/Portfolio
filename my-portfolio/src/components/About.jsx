// src/components/About.jsx
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-16 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
      <p className="max-w-3xl mx-auto text-center text-lg md:text-xl text-gray-300 leading-relaxed">
        I’m a full-stack developer passionate about building web applications
        that solve real-world problems. I work with React, Node.js, PostgreSQL,
        Python, and modern APIs to create scalable and maintainable systems.
        <br />
        <br />I actively participate in hackathons and projects, constantly
        improving my skills in frontend and backend development. My goal is to
        deliver clean, user-friendly solutions that make a difference for
        clients and users alike.
      </p>
    </section>
  );
};

export default About;
