import React from 'react';
import './TestimonialsSection.css'; // Assuming you have a CSS file for styles

const testimonials = [
  {
    name: 'Sophia L.',
    feedback: 'GlamCS has transformed my beauty routine! The products are luxurious and effective.',
    image: '/images/testimonial1.jpg', // Path to image
  },
  {
    name: 'Olivia M.',
    feedback: 'I love the elegant packaging and the quality of the cosmetics. Highly recommend!',
    image: '/images/testimonial2.jpg', // Path to image
  },
  {
    name: 'Emma R.',
    feedback: 'The 3D designs are stunning! GlamCS truly stands out in the cosmetics industry.',
    image: '/images/testimonial3.jpg', // Path to image
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="testimonials-section">
      <h2 className="section-title">What Our Customers Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <p className="testimonial-feedback">"{testimonial.feedback}"</p>
            <h3 className="testimonial-name">- {testimonial.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;