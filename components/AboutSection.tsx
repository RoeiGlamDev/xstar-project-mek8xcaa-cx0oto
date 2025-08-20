import React from 'react';
import './AboutSection.css'; // Importing CSS for styling

const AboutSection: React.FC = () => {
    return (
        <section className="about-section">
            <div className="about-content">
                <h1 className="about-title">Welcome to GlamCS</h1>
                <p className="about-description">
                    At GlamCS, we believe in enhancing your natural beauty with our luxurious cosmetics. 
                    Our products are crafted with the finest ingredients, ensuring a high-end experience.
                </p>
                <p className="about-description">
                    Discover the elegance of our 3D designs and effects that bring your makeup routine to life.
                </p>
            </div>
            <div className="about-image">
                <img src="/images/about-image.jpg" alt="GlamCS Cosmetics" className="about-img" />
            </div>
        </section>
    );
};

export default AboutSection;