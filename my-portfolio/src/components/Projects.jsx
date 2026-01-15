import React from "react";

const projectsData = [
  {
    title: "Task Manager",
    description: "A full-stack CRUD app to manage daily tasks.",
    tech: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/yourusername/task-manager",
    live: "https://task-manager.vercel.app",
    image: "/images/task-manager.png",
  },
  {
    title: "Expense Tracker",
    description: "Track daily expenses with charts and categories.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/yourusername/expense-tracker",
    live: "https://expense-tracker.vercel.app",
    image: "/images/expense-tracker.png",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio to showcase projects and skills.",
    tech: ["React", "CSS", "Axios"],
    github: "https://github.com/yourusername/portfolio",
    live: "https://your-portfolio.vercel.app",
    image: "/images/portfolio.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div key={project.title} className="project-card">
            <img src={project.image} alt={project.title} />
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
