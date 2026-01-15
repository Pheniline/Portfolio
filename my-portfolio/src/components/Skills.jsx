// src/components/Skills.jsx
import React from "react";
import { skills } from "../data/skills";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 md:px-16 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
      {skills.map((category) => (
        <div key={category.category} className="mb-10">
          <h3 className="text-2xl font-semibold mb-6">{category.category}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {category.items.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
