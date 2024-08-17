import React from 'react';
import './HeroSection.css'; 
import { Tooltip } from '@mui/material';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Savor Every Bite with Fast Delivery!</h1>
        <p className="hero-subtitle">Discover delicious meals delivered right to your door.</p>
        <a href='/orderonline'>
        <Tooltip title="ORDER NOW"><button className="hero-button">Order Now</button></Tooltip>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
