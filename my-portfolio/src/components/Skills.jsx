import React from "react";

const skillsData = [
  { name: "React", color: "#61dafb" },
  { name: "JavaScript", color: "#f7df1e" },
  { name: "Tailwind CSS", color: "#38bdf8" },
  { name: "Node.js", color: "#68a063" },
  { name: "Python", color: "#3776ab" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "Axios", color: "#5a29e4" },
  { name: "CSS", color: "#264de4" },
  { name: "HTML", color: "#e34f26" },
  { name: "Git", color: "#f05032" },
  { name: "GitHub", color: "#181717" },
  { name: "VS Code", color: "#007acc" },
  { name: "MongoDB", color: "#47a248" },
  { name: "Express.js", color: "#000000" },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skill) => (
          <div
            key={skill.name}
            className="skill-card"
            style={{ backgroundColor: skill.color }}
          >
            <h4>{skill.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
