import React from "react";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Hi, I’m Pheniline Jerono</h1>
        <p>
          I build full-stack web applications using React,
          Javascript,Axios,MongooseDB, Node.js, PostgreSQL, Python, and APIs.
          Focused on real-world projects, hackathons, and clean, usable designs.
        </p>
        <div className="hero-buttons">
          <button onClick={() => (window.location.href = "#projects")}>
            View Projects
          </button>
          <button
            onClick={() =>
              (window.location.href =
                "https://docs.google.com/document/d/1KPUFGew5CWQ8ij5dx_vf_OMc9kKSHrMU-m9psmhDaCo/edit?usp=sharing")
            }
          >
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
