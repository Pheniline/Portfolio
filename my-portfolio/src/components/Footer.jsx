// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 text-center border-t border-gray-700">
      <p>
        &copy; {new Date().getFullYear()} Pheniline Jerono. All rights reserved.
      </p>
      <p>Designed & Built with ❤️ using React, Tailwind & Node.js</p>
    </footer>
  );
};

export default Footer;
