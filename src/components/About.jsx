import React from 'react';
import '../assets/style/About.css';
import pic from "../assets/images/profile.png";
import gitLogo from '../assets/icons/git.png';
import htmlLogo from '../assets/icons/html.png';
import cssLogo from '../assets/icons/css.png';
import jsLogo from '../assets/icons/js.png';
import reactLogo from '../assets/icons/react.png';
import { FaUser } from "react-icons/fa";  // 👈 user icon

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-top-background"></div>
  {/* 🔹 Section Heading */}
        <div className="about-heading">
          <span className="line"></span>
          <FaUser className="about-icon" />
          <h2>About Me</h2>
          <span className="line"></span>
        </div>
      <div className="about-container">
      

        {/* Profile Area */}
        <div className="profile-area">
          <div className="profile-orbit-wrapper">
            <div className="orbit-icon git"><img src={gitLogo} alt="Git" /></div>
            <div className="orbit-icon html"><img src={htmlLogo} alt="HTML" /></div>
            <div className="orbit-icon css"><img src={cssLogo} alt="CSS" /></div>
            <div className="orbit-icon js"><img src={jsLogo} alt="JS" /></div>
            <div className="orbit-icon react"><img src={reactLogo} alt="React" /></div>
            <img src={pic} alt="Profile" className="profile-img1" />
          </div>

          <div className="profile-details">
            <h2 className="name">Ida Selvam Magdaline J</h2>
            <h4 className="role">Front-End Developer</h4>
          </div>
        </div>

        {/* Education Section */}
        <div className="education-section">
          <div className="edu-card">
            {/* ✅ using <br/> for ENTER */}
            <p className="intro">
              I’m a passionate web developer focused on building responsive and user-friendly interfaces.
              <br/><br/>
              My interests lie in React, JavaScript, and creating visually appealing websites.
              <br/><br/>
              I am currently pursuing my Computer Science degree and actively working on real-world projects to sharpen my skills.
            </p>
          </div>
          <div className="edu-card">
            <h3>B.E. Computer Science & Engineering</h3>
            <p>Dr. G U Pope College of Engineering, Thoothukudi (2021–2025)</p>
          </div>
          <div className="edu-card">
            <h3>HSC – Mathsbiology</h3>
            <p>Infint Matric Higher Secondary School (2019–2021)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
