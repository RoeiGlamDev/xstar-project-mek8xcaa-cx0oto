import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const FloatingElements: React.FC = () => {
  return (
    <Canvas style={{ height: '100vh', background: 'white' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 5]} intensity={1} />
      <mesh position={[-1, 0, 0]} scale={[1, 1, 1]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="orange" roughness={0.5} />
      </mesh>
      <mesh position={[1, 0, 0]} scale={[1, 1, 1]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="orange" roughness={0.5} />
      </mesh>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default FloatingElements;