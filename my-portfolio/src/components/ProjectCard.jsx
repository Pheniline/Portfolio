// src/components/ProjectCard.jsx
import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="bg-purple-600 px-2 py-1 rounded text-sm font-semibold"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 bg-white text-gray-900 rounded font-semibold hover:bg-gray-200 transition"
          >
            GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 border-2 border-white rounded font-semibold hover:bg-white hover:text-gray-900 transition"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
