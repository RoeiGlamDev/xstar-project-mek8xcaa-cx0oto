import React from 'react';
import './AboutPage.css'; // Importing CSS for styling

const AboutPage: React.FC = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About GlamCS</h1>
        <p>Your destination for luxury cosmetics.</p>
      </header>
      <section className="about-content">
        <h2>Our Philosophy</h2>
        <p>
          At GlamCS, we believe in enhancing natural beauty through high-quality, luxurious products designed for the modern individual.
        </p>
        <h2>Our Products</h2>
        <p>
          Each product is crafted with precision, utilizing the finest ingredients to ensure a lavish experience with every application.
        </p>
      </section>
      <footer className="about-footer">
        <p>Connect with us on social media for the latest updates.</p>
      </footer>
    </div>
  );
};

export default AboutPage;