import React from 'react';
import '../assets/style/Footer.css';
import { FaPhoneAlt, FaLinkedin, FaGithub  } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";


const ContactSection = () => {
  return (
    <section className="contact-section">
      <p className="mini-heading">HAVE PROJECT IN MIND?</p>
      <h2 className="main-heading">Let’s Turn your Ideas into Reality</h2>
      <a href="mailto:idamagdaline330@gmail.com" className="email"><SiGmail /> idamagdaline339@gmail.com</a>
      <p className="phone"><FaPhoneAlt /> +91 8610803583</p>
      <div className="social-icons">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
      </div>
    </section>
  );
};

export default ContactSection;
