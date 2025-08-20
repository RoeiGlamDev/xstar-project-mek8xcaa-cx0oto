import React from 'react';
import './GlassCard.css'; // Importing CSS for styling

interface GlassCardProps {
    title: string;
    description: string;
    imageUrl: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ title, description, imageUrl }) => {
    return (
        <div className="glass-card">
            <img src={imageUrl} alt={title} className="glass-card-image" />
            <div className="glass-card-content">
                <h3 className="glass-card-title">{title}</h3>
                <p className="glass-card-description">{description}</p>
            </div>
        </div>
    );
};

export default GlassCard;