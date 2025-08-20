import React from 'react';
import './PricingSection.css'; // Importing CSS for styling

const PricingSection: React.FC = () => {
    return (
        <section className="pricing-section">
            <div className="container">
                <h2 className="section-title">Our Pricing</h2>
                <div className="pricing-cards">
                    <div className="pricing-card">
                        <h3 className="card-title">Basic Package</h3>
                        <p className="card-price">$29</p>
                        <ul className="card-features">
                            <li>High-quality cosmetic products</li>
                            <li>Free shipping on orders over $50</li>
                            <li>24/7 customer support</li>
                        </ul>
                        <button className="card-button">Choose Plan</button>
                    </div>
                    <div className="pricing-card premium">
                        <h3 className="card-title">Premium Package</h3>
                        <p className="card-price">$49</p>
                        <ul className="card-features">
                            <li>All Basic Package features</li>
                            <li>Exclusive access to new arrivals</li>
                            <li>Personalized beauty consultations</li>
                        </ul>
                        <button className="card-button">Choose Plan</button>
                    </div>
                    <div className="pricing-card">
                        <h3 className="card-title">Luxury Package</h3>
                        <p className="card-price">$99</p>
                        <ul className="card-features">
                            <li>All Premium Package features</li>
                            <li>Luxury gift wrapping</li>
                            <li>VIP access to events</li>
                        </ul>
                        <button className="card-button">Choose Plan</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;