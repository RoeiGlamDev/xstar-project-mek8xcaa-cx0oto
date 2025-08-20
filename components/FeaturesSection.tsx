import React from 'react';
import './FeaturesSection.css'; // Import CSS for styling

const FeaturesSection: React.FC = () => {
    return (
        <section className="features-section">
            <div className="container">
                <h2 className="features-title">Why Choose GlamCS?</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon luxury-effect"> {/* Add 3D effect here */}
                            <img src="/icons/quality.svg" alt="Quality" />
                        </div>
                        <h3 className="feature-heading">Premium Quality</h3>
                        <p className="feature-description">Our products are crafted with the finest ingredients.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon luxury-effect"> {/* Add 3D effect here */}
                            <img src="/icons/eco-friendly.svg" alt="Eco-Friendly" />
                        </div>
                        <h3 className="feature-heading">Eco-Friendly</h3>
                        <p className="feature-description">Committed to sustainability and the environment.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon luxury-effect"> {/* Add 3D effect here */}
                            <img src="/icons/innovation.svg" alt="Innovation" />
                        </div>
                        <h3 className="feature-heading">Innovative Formulas</h3>
                        <p className="feature-description">Cutting-edge technology for stunning results.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon luxury-effect"> {/* Add 3D effect here */}
                            <img src="/icons/cruelty-free.svg" alt="Cruelty-Free" />
                        </div>
                        <h3 className="feature-heading">Cruelty-Free</h3>
                        <p className="feature-description">No animal testing, just beauty.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;