import React from "react";
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import "../assets/style/SocialIcons.css"; // we'll add styles here

const SocialIcons = () => {
  return (
    <div className="social-icons1">
      <a
        href="https://www.linkedin.com/in/idaselvammagdaline/"
        target="_blank"
        rel="noopener noreferrer"
        className="icon linkedin1"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/magdaline4"
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
