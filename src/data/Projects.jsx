import React from "react";
import SpinCard from "../components/SpinCard";
import "../assets/style/Projects.css"; // Correct relative path
import echo from "../assets/images/echo.png";
import port from "../assets/images/port.png";
import Card from "../assets/images/card.png";
import Labimg from "../assets/images/Lab.png"
import { AiFillCodepenCircle } from "react-icons/ai";


const Projects = () => {
  const projectData = [
    {
      title: "AI-Powered-Pinpointing-Echoshopper For Blind",
      description:
        "An online shopping app with voice navigation for Blind User.",
      image: echo,
      demoLink: "https://ai-powered-pinpointing-echoshopper.netlify.app/",
      gitLink: "https://github.com/magdaline4/AI-Powered-PinPointing-EchoShopper-For-Blinduser.git",
    },
    {
      title: "Portfolio Website",
      description: "My project is a responsive personal portfolio website built using React.js, designed to showcase my skills, projects, and experiences with a modern, user-friendly interface that adapts seamlessly to different screen sizes and devices.",
      image: port,
      demoLink: "https://magportfoliowebsite.netlify.app/",
    },
    {
      title: "Hospital-Lab-Management",
      description:
        "Interactive lab management interface with real-time test status tracking, instant notifications, and an intuitive dashboard for streamlined workflows (Front-End Design)",
      image: Labimg,
      demoLink: "https://hospital-lab-managements.onrender.com/",
      gitLink: "https://github.com/magdaline4/hospital-Lab-management.git",
    },
    {
      title: "Memory-Game",
      description:
        "A memory card matching game where players flip cards to find matching image pairs.",
      image: Card,
      demoLink: "https://memory-fliped-card.netlify.app/",
      gitLink: "https://github.com/magdaline4/Memory-Flip-Card.git",
    },
  ];

  return (
    <section className="projects-container">
<h1 className="projects-title underline-title">
  <span className="title-with-icon">
    <AiFillCodepenCircle className="projects-icon" />
    My Projects
  </span>
</h1>      <div className="projects-grid">
        {projectData.map((project, index) => (
          <SpinCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            demoLink={project.demoLink}
            gitLink={project.gitLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
