import React from "react";
import "../assets/style/NormalSkills.css";
import { FaTools } from "react-icons/fa";


const NormalSkills = () => {
  const skills = [
    {
      name: "Leadership",
      description: "Able to guide and motivate a team towards achieving goals effectively."
    },
    {
      name: "Time Management",
      description: "Skilled at prioritizing tasks, meeting deadlines, and staying organized."
    },
    {
      name: "Teamwork",
      description: "Collaborates well with others, encourages open communication, and supports teammates."
    },
    {
      name: "Communication",
      description: "Clear and confident in both verbal and written communication."
    },
  ];

  return (
    <section id="normal-skills" className="normal-skills">
      <div className="text-center">
<h2 className="title-with-icon">
  <FaTools className="skills-icon" />
  Soft Skills
</h2>        <div className="section-line"></div>
        <p>A snapshot of my core interpersonal and professional skills.</p>
      </div>

      <div className="normal-skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NormalSkills;
