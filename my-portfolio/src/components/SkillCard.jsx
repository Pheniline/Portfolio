import React from "react";

const SkillCard = ({ skill }) => {
  return (
    <div className="flex flex-col items-center bg-gray-800 p-5 rounded-xl shadow-md transform hover:scale-105 transition duration-300">
      <img src={skill.icon} alt={skill.name} className="w-16 h-16 mb-3" />
      <h4 className="font-semibold text-lg">{skill.name}</h4>
    </div>
  );
};

export default SkillCard;
