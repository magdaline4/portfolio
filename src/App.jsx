import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Hero";
import About from "./components/About";
import Projects from "./data/Projects";
import CardsRow from "./data/CardsRow";
import Certificates from "./components/Certificates";
import NormalSkills from "./components/NormalSkills";
import TechnicalSkills from "./components/TechnicalSkills";
import Footer from "./components/Footer";
import SocialIcons from "./components/SocialIcons";

const App = () => {
  return (
    <>
      <Navbar />
      <div id="home"><Header /></div>
      <div id="about"><About /></div>
      <div id="projects"><Projects /></div>
      <div id="cards"><CardsRow /></div>
      <div id="certificates"><Certificates /></div>
      <div id="skills">
        <NormalSkills />
        <TechnicalSkills />
      </div>
      <div id="contact"><Footer /></div>


      <SocialIcons />
    </>
  );
};

export default App;
