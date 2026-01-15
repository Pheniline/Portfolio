import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Pheniline Jerono. All rights reserved.
      </p>
      <p>Designed & Built with ❤️ using React & CSS</p>
    </footer>
  );
};

export default Footer;
