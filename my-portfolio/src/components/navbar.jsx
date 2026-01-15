import React from "react";

const Navbar = () => {
  const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];
  return (
    <nav className="fixed w-full bg-white/10 backdrop-blur-md text-white flex justify-between items-center px-6 py-4 z-50">
      <div className="text-2xl font-bold">Pheniline Jerono</div>
      <ul className="flex gap-6">
        {navLinks.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className="hover:text-purple-300 transition"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
