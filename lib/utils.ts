import { useEffect, useState } from 'react';

// Function to debounce input for better performance
export const useDebounce = (value: string, delay: number): string => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

// Function to format currency
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

// Function to generate a random ID
export const generateId = (): string => {
  return 'id-' + Math.random().toString(36).substr(2, 9);
};

// Function to check if a string is empty
export const isEmpty = (str: string): boolean => {
  return !str || str.trim().length === 0;
};

// Function to apply 3D effect styles
export const apply3DEffect = (element: HTMLElement): void => {
  if (element) {
    element.style.transform = 'perspective(1000px) rotateY(10deg) rotateX(10deg)';
    element.style.transition = 'transform 0.3s ease';
  }
};

export default {
  useDebounce,
  formatCurrency,
  generateId,
  isEmpty,
  apply3DEffect,
};