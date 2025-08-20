'use client';

import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const ScrollRevealComponent: React.FC = ({ children }) => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom', // Animation starts from the bottom
      distance: '50px', // Distance to move
      duration: 1000, // Duration of the animation
      delay: 200, // Delay before starting the animation
      easing: 'ease-in-out', // Easing function
      reset: true, // Reset animation on scroll back
    });

    sr.reveal('.scroll-reveal', { interval: 200 }); // Reveal elements with class 'scroll-reveal'
  }, []);

  return <div className="scroll-reveal">{children}</div>; // Render children with scroll reveal
};

export default ScrollRevealComponent;