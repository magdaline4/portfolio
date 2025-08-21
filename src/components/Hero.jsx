import React, { useState, useRef } from 'react';
import '../assets/style/Hero.css';
import heroin from '../assets/images/profile.png';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const [showCard, setShowCard] = useState(false);
  const hideTimeout = useRef(null);

  const handleMouseEnter = () => {
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    setShowCard(true);
  };

  const handleMouseLeave = () => {
    hideTimeout.current = setTimeout(() => {
      setShowCard(false);
    }, 5000); // delay before hiding
  };

  return (
    <section className="hero">
      {/* Left section */}
      <div className="hero-left">
        <p className="greeting">Hello<span className="dot">.</span></p>
        <h2>I’m <span className="name">Ida Selvam Magdaline J</span></h2>

        <TypeAnimation
          sequence={[
            'Frontend Developer', 2000,
            'React JS Developer', 2000,
            'JavaScript Developer', 2000,
          ]}
          speed={50}
          repeat={Infinity}
          className="typing-text"
        />

        <div className="buttons">
          <button className="primary"><span>Got a project?</span></button>
          <button className="outline"><span>My resume</span></button>
        </div>
      </div>

      {/* Right section */}
      <div className="hero-right">
        <div
          className="circle-glow profile-wrapper"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src={heroin} alt="Ida" className="hero-img" />

          {/* Hover card */}
          <div
            className={`profile-hover-card ${showCard ? "show" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <h4>Ida Selvam Magdaline J</h4>
            <p>Frontend Developer</p>
            <p>Email: idamagdaline339@gmail.com</p>
            <p>Location: Tamil Nadu, India</p>
            <div className="links">
              <a href="https://www.linkedin.com/in/idaselvammagdaline/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://github.com/magdaline4" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
