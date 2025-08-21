// src/components/Certificates.jsx
import React from 'react';
import '../assets/style/Certificates.css';
import { FaGraduationCap, FaHeart } from 'react-icons/fa';

// Import data
import certificateData from '../data/certificatesData';

const Certificates = () => {
  return (
    <div className="certificates-section">
      <div className="cert-heading-wrapper">
        <h2 className="cert-heading">
          <FaGraduationCap className="cert-icon" />
          My Certificates
        </h2>
      </div>

      <div className="cert-grid">
        {certificateData.map((cert) => (
          <div className="cert-card" key={cert.id}>
            <FaHeart className="heart-icon" />
            <h2>{cert.title}</h2>
            <p><strong>Issued by:</strong> {cert.issuedBy}</p>
            <p><strong>Date:</strong> {cert.date}</p>
            <a href={cert.link} target="_blank" rel="noopener noreferrer">View Certificate</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
