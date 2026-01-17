import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a
          href="https://github.com/Pheniline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="www.linkedin.com/in/pheniline-jerono"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>

        <a href="mailto:phennyjer@gmail.com">
          <FaEnvelope />
        </a>
      </div>

      <p>&copy; {new Date().getFullYear()} Pheniline Jerono</p>
      <p>Designed & Built with ❤️ using React</p>
    </footer>
  );
};

export default Footer;
