import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  color: orange;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 40px;
`;

const Button = styled.button`
  background-color: orange;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05); // Luxurious hover effect
  }
`;

const ThreeTypes: React.FC = () => {
  return (
    <Container>
      <Title>GlamCS Cosmetics</Title>
      <Description>Discover our luxurious range of cosmetics designed for elegance.</Description>
      <Button>Shop Now</Button>
    </Container>
  );
};

export default ThreeTypes;