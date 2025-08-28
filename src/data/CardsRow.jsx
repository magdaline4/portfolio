import React from 'react';
import AchievementCard from '../components/AchievementCard'
import Img from '../assets/images/achive.jpg'
import '../assets/style/AchievementCard.css'
import { GiAchievement } from "react-icons/gi";

const cardData = [
  {
    id: 1,
  title: "Web Design Competition Winner",
  description: "Secured first place in my college web design competition by  Developed a responsive login page using HTML, CSS, and JavaScript. Focused on clean design, form validation, and cross-device compatibility.",
  technologies: ["HTML, ", "CSS, ", "JavaScript."],
  achievement: "1st Place Winner",
    image: Img,
    articles: 34,
    followers: 980,
    rating: 8.9
  },
{
  id: 2,
  title: "English Speech Competition",
  description: "Achieved runner-up position in the college English Speech Competition. Recognized for strong communication skills, confident delivery, and engaging presentation.",
  technologies: ["Public Speaking, ", "Communication, ", "Presentation."],
  achievement: "Runner-up",
  image: Img,
  articles: 12,
  followers: 450,
  rating: 8.5
},
{
  id: 3,
  title: "Short Film Competition",
  description: "Won 2nd prize in the college Short Film Competition by independently managing story writing, direction, and video editing. I also acted as all characters in the film — including myself, mom, dad, and daughter — showcasing versatility and creativity.",
  technologies: ["Storytelling, ", "Direction, ", "Acting (Multiple Roles), ", "Video Editing."],
  achievement: "2nd Prize",
  image: Img,
  articles: 8,
  followers: 320,
  rating: 9.5
},
{
  id: 4,
  title: "Fireless Cooking Competition",
  description: "Participated in two college Fireless Cooking Competitions. Although I couldn’t win in the first attempt, I improved my creativity and skills in the second competition and secured 3rd place, demonstrating persistence and innovation.",
  technologies: ["Creative Cooking, ", "Time Management, ", "Presentation."],
  achievement: "3rd Prize",
  image: Img,
  articles: 5,
  followers: 200,
  rating: 8.2
}


];



const CardsRow = () => {
  return (
    <><h1 className="projects-title underline-title">
  <span className="title-with-icon">
    <GiAchievement className="achievement-icon" />
    My Achievements
  </span>
</h1>

    <div className='cards-grid'>
    
      {cardData.map((card) => (
        <AchievementCard
          key={card.id}
          title={card.title}
          description={card.description}
          technologies={card.technologies}
          achievement={card.achievement}
          image={card.image}
        />
      ))}
    </div>
    </>
  );
};

export default CardsRow;
