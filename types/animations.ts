import { AnimationType } from './types'; // Importing AnimationType from types file

const animationTypes: AnimationType[] = [
  {
    name: 'Fade In',
    duration: 500,
    effect: 'opacity',
    description: 'Smoothly fades in the element.',
  },
  {
    name: 'Slide Up',
    duration: 700,
    effect: 'transform',
    description: 'Slides the element up into view.',
  },
  {
    name: 'Scale Up',
    duration: 600,
    effect: 'transform',
    description: 'Scales the element up from a smaller size.',
  },
  {
    name: 'Rotate',
    duration: 800,
    effect: 'transform',
    description: 'Rotates the element around its center.',
  },
  {
    name: 'Bounce',
    duration: 900,
    effect: 'transform',
    description: 'Bounces the element in a playful manner.',
  },
];

export default animationTypes; // Exporting the animationTypes array as default export