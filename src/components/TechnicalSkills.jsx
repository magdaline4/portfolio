import { GrCodeSandbox } from "react-icons/gr";   
import React from "react";
import "../assets/style/TechnicalSkills.css";

const TechnicalSkills = () => {
  const skills = [
    {
      name: "HTML",
      level: "90%",
      description: "Experienced in creating structured, semantic, and accessible webpages."
    },
    {
      name: "CSS",
      level: "80%",
      description: "Skilled in responsive design, layouts, and animations for modern UIs."
    },
    {
      name: "JavaScript",
      level: "75%",
      description: "Strong understanding of ES6+, DOM manipulation, and interactive features."
    },
    {
      name: "React.js",
      level: "75%",
      description: "Proficient in building reusable components, hooks, and single-page apps."
    },
  ];

  return (
    <section id="technical-skills" className="technical-skills">
      <div className="text-center">
        <h2 className="title-with-icon">
          <GrCodeSandbox className="skills-icon" />
          Technical Skills
        </h2>
        <div className="section-line"></div>
        <p>A snapshot of the core technologies and tools I specialize in.</p>
      </div>

      <div className="technical-skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="tech-skill-card">
            <h3>{skill.name}</h3>
            <p className="tech-desc">{skill.description}</p><br />

            <div className="progress-bar">
              <div className="progress-fill" style={{ width: skill.level }}>
                {skill.level}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkills;
