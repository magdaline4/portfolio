import React from "react";
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import "../assets/style/SocialIcons.css"; // we'll add styles here

const SocialIcons = () => {
  return (
    <div className="social-icons1">
      <a
        href="https://www.linkedin.com/in/your-profile"
        target="_blank"
        rel="noopener noreferrer"
        className="icon linkedin1"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/your-username"
        target="_blank"
        rel="noopener noreferrer"
        className="icon github1"
      >
        <BsGithub />
      </a>
    </div>
  );
};

export default SocialIcons;
