import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Scene3D: React.FC = () => {
  return (
    <Canvas style={{ background: 'white' }}> {/* Set background color */}
      <ambientLight intensity={0.5} /> {/* Ambient light for soft illumination */}
      <pointLight position={[10, 10, 10]} intensity={1} /> {/* Point light for highlights */}
      <OrbitControls /> {/* Enable orbit controls for 3D interaction */}
      {/* Add your 3D models/components here */}
      {/* Example: <Model /> */}
    </Canvas>
  );
};

export default Scene3D;