import React from 'react';
import './PricingPage.css'; // Importing CSS for styling

const PricingPage: React.FC = () => {
    return (
        <div className="pricing-page">
            <header className="pricing-header">
                <h1 className="title">GlamCS Pricing</h1>
                <p className="subtitle">Elevate your beauty experience with our luxury products.</p>
            </header>
            <section className="pricing-plans">
                <div className="plan">
                    <h2 className="plan-title">Basic Plan</h2>
                    <p className="plan-price">$29/month</p>
                    <p className="plan-description">Access to basic cosmetics and skincare products.</p>
                    <button className="plan-button">Choose Plan</button>
                </div>
                <div className="plan">
                    <h2 className="plan-title">Premium Plan</h2>
                    <p className="plan-price">$59/month</p>
                    <p className="plan-description">Includes premium products and exclusive discounts.</p>
                    <button className="plan-button">Choose Plan</button>
                </div>
                <div className="plan">
                    <h2 className="plan-title">Luxury Plan</h2>
                    <p className="plan-price">$99/month</p>
                    <p className="plan-description">Full access to all products and personalized services.</p>
                    <button className="plan-button">Choose Plan</button>
                </div>
            </section>
            <footer className="pricing-footer">
                <p>Join us and experience luxury like never before.</p>
            </footer>
        </div>
    );
};

export default PricingPage;