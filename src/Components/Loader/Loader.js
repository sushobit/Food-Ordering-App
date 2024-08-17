// src/Components/Loader.js
import React from 'react';
import './Loader.css'; // Import the CSS file for styling

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="food-loader">
        <div className="food-item burger"></div>
        <div className="food-item donut"></div>
        <div className="food-item pizza"></div>
      </div>
      <p className='p'>Loading your delicious experience...</p>
    </div>
  );
};

export default Loader;
