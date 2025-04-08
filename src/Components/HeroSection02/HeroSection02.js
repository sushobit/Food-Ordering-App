import React from "react";
import "./HeroSection02.css";
import { Tooltip } from '@mui/material';
import image from '../HeroSection02/image.jpg'

const HeroSection02 = () => {
  return (
    <section className="hero-section">
      {/* Left Image & Badge */}
      <div className="hero-image-wrapper">
        <img
          src={image} // Replace with actual image path
          alt="Chef Image"
        />
      </div>

      {/* Right Content */}
      <div className="hero-content">
        <p className="hero-subtitle">Learn about HungryHub</p>
        <h1 className="hero-title">
          The Amazing & Quality Food For Your Good Health
        </h1>
        <p className="hero-description">
          Welcome to our restaurant, where culinary excellence meets warm hospitality
          in every dish we serve. Nestled in the heart of City Name, our eatery
          invites you on a journey.
        </p>

        <div className="hero-buttons">
          <a href='/contactus'>
                      <Tooltip title="ContactUs"><button className="hero-button">Learn More Us ↷</button></Tooltip>
                  </a>
                  <a href='/orderonline'>
                      <Tooltip title="Explore"><button className="hero-button">Explore Popular Menu ↷</button></Tooltip>
                  </a>
        </div>

        <div className="hero-icons">
          <div className="hero-icon-item">
            <span className="icon">🍎</span>
            <span>Best Quality Food</span>
          </div>
          <div className="hero-icon-item">
            <span className="icon">👨‍🍳</span>
            <span>Experience Our Chefs</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection02;
