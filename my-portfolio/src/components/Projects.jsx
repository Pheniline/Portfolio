import React from "react";

const projectsData = [
  {
    title: "Notepad",
    description: "A full-stack CRUD app to record daily notes.",
    tech: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/Pheniline/Notepad",
    live: "",
  },
  {
    title: "Weather App",
    description: "A website used to check the weather in different cities.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/Pheniline/Weather-App",
    live: "",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio to showcase projects and skills.",
    tech: ["React", "CSS", "Axios"],
    github: "https://github.com/Pheniline/Portfolio",
    live: "",
    image: "",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div key={project.title} className="project-card">
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-badges">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <div className="project-buttons">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
