import React from 'react';
import './LandingPage.css';

const LandingPage = ({ history }) => {
  return (
    <div className="landing-page">
      <div className="background-image">
        <h1 className="company-name">Paradise Nursery</h1>
        <p className="company-description">
        Welcome to Paradise Nursery, where nature's beauty meets your home! 
        We're thrilled to help you discover the perfect plants to brighten your space. 
        Whether you're a seasoned plant parent or just starting your green journey, 
        our carefully curated selection of houseplants offers something for everyone. 
        Browse our collection and let's grow something wonderful together!
        </p>
        <button className="get-started-btn">
          <a href='/products' className="get-started-link">
          Get Started</a>
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
