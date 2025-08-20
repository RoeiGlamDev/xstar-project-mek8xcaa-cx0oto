import React from 'react';

const README: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <h1 style={{ color: '#FFA500' }}>GlamCS Cosmetics Website</h1>
      <h2>Overview</h2>
      <p>
        Welcome to the GlamCS project! This is a high-end cosmetics website 
        designed with elegance in mind, featuring a luxurious orange and white 
        color scheme.
      </p>
      
      <h2>Design Goals</h2>
      <ul>
        <li>Elegant and high-end aesthetics</li>
        <li>Luxurious 3D designs and effects</li>
        <li>Responsive and user-friendly interface</li>
      </ul>
      
      <h2>Technologies Used</h2>
      <ul>
        <li>React</li>
        <li>TypeScript</li>
        <li>CSS3 for styling</li>
        <li>3D effects using WebGL or CSS3</li>
      </ul>
      
      <h2>Getting Started</h2>
      <ol>
        <li>Clone the repository: <code>git clone <repository-url></code></li>
        <li>Navigate to the project directory: <code>cd glamcs</code></li>
        <li>Install dependencies: <code>npm install</code></li>
        <li>Run the development server: <code>npm start</code></li>
      </ol>
      
      <h2>Contributing</h2>
      <p>
        We welcome contributions! Please fork the repository and submit a pull request 
        for any enhancements or bug fixes.
      </p>
      
      <h2>License</h2>
      <p>This project is licensed under the MIT License.</p>
    </div>
  );
};

export default README;