import React from 'react';
import img from './WhatsApp Image 2025-01-30 at 18.06.04_fe27e5bd.jpg';
import './home.css';

export const Home = () => {
  return (
    <div className="home-container">
      <div className="profile-section">
        <div className="profile-image-container">
          <img 
            src={img} 
            alt="Vishal" 
            className="profile-img"
          />
        </div>
        <h1 className="profile-name">Hi, I am Vishal</h1>
        <p className="profile-details">
          A passionate student at <strong>Sri Eshwar College of Engineering</strong>,<br />
          honing my skills as a <strong>Full Stack Developer</strong>.
        </p>
      </div>
    </div>
  );
};

export default Home;
