import React from 'react';
import '../assets/style/AchievementCard.css';


const AchievementCard = ({ image, title, description ,  technologies ,achievement }) => {
  return (
    <div className="achievement-card">
      <img className="profile-img" src={image} alt="Profile" />
      <div className="info">
        <h2>{title}</h2>
        <p>{description}</p>
        <h3>{technologies}</h3>
        <h3>{achievement}</h3>
    
      </div>
    </div>
  );
};

export default AchievementCard;
