'use client';

import React from 'react';
import styled from 'styled-components';

const SliderContainer = styled.div`
  width: 100%;
  height: 300px; // Adjust height as needed
  position: relative;
  overflow: hidden;
  border-radius: 15px; // Luxurious rounded corners
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); // Subtle shadow for elegance
`;

const Slide = styled.div<{ background: string }>`
  width: 100%;
  height: 100%;
  background: ${(props) => props.background}; // Dynamic background
  position: absolute;
  transition: transform 0.5s ease; // Smooth transition effect
`;

const SliderWrapper = styled.div`
  display: flex;
  height: 100%;
  transform: translateX(0); // Initial position
`;

const SliderButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: orange; // High-end color
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  z-index: 10; // Ensure buttons are on top
  
  &:hover {
    background-color: darkorange; // Hover effect
  }
`;

const PrevButton = styled(SliderButton)`
  left: 20px; // Positioning
`;

const NextButton = styled(SliderButton)`
  right: 20px; // Positioning
`;

const Slider: React.FC<{ slides: string[] }> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <SliderContainer>
      <SliderWrapper style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <Slide key={index} background={slide} />
        ))}
      </SliderWrapper>
      <PrevButton onClick={prevSlide}>Prev</PrevButton>
      <NextButton onClick={nextSlide}>Next</NextButton>
    </SliderContainer>
  );
};

export default Slider;