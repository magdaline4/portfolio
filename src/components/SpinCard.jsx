import React, { useState } from 'react';
import '../assets/style/SpinCard.css';

const SpinCard = ({ title, description, image, demoLink, gitLink }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="spin-card">
      <div className={`spin-card-inner ${isFlipped ? 'flipped' : ''}`}>

        {/* Front Side */}
        <div className="spin-card-front">
          <img src={image} alt={title} className="spin-card-img" />
          <div className="spin-card-content">
            <h3 className="spin-card-title">{title}</h3>
            <p className="spin-card-desc">{description}</p>
            <button 
              className="read-more-btn" id='btns'
              onClick={() => setIsFlipped(true)}
            >
              <span>Read More</span>
            </button>
          </div>
        </div>

        {/* Back Side */}
        <div className="spin-card-back">
          <div className="spin-card-content">
            <h3 className="spin-card-title">{title}</h3>
            <p className="spin-card-desc">{description}</p>
            <p className="additional-details">
              Additional project details would go here.
            </p>
            <div className="btn">
              <a href={demoLink} target="_blank" rel="noopener noreferrer">
                <button className='Demo'><span>Demo Live</span></button>
              </a>
              <a href={gitLink} target="_blank" rel="noopener noreferrer">
                <button className='Git'><span>Git Link</span></button>
              </a>
            </div>
            <button 
              className="back-btn" 
              onClick={() => setIsFlipped(false)}
            >
              <span>Read Less</span> 
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SpinCard;
