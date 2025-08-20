'use client';

import React from 'react';
import { useEffect, useRef } from 'react';
import './ParallaxSection.css'; // Assuming you have a CSS file for styles

const ParallaxSection: React.FC = () => {
    const parallaxRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        if (parallaxRef.current) {
            const scrollPosition = window.scrollY;
            parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.5}px)`; // Parallax effect
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="parallax-section" ref={parallaxRef}>
            <div className="parallax-background" />
            <div className="parallax-content">
                <h1>Elevate Your Beauty</h1>
                <p>Discover the luxury of GlamCS cosmetics.</p>
            </div>
        </div>
    );
};

export default ParallaxSection;