import React from 'react';
import './Card.css'; // Importing CSS for styling

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="card"> {/* Main card container */}
      <img src={imageUrl} alt={title} className="card-image" /> {/* Image */}
      <div className="card-content"> {/* Content container */}
        <h2 className="card-title">{title}</h2> {/* Title */}
        <p className="card-description">{description}</p> {/* Description */}
      </div>
    </div>
  );
};

export default Card; // Exporting the Card component