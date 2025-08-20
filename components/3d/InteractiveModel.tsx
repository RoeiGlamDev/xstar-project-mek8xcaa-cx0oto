'use client';

import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { useLoader } from '@react-three/fiber';

const InteractiveModel: React.FC = () => {
  const modelRef = useRef<THREE.Group>(null);
  const gltf = useLoader(GLTFLoader, '/path/to/your/model.glb'); // Adjust path to your model

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y = Math.PI / 4; // Initial rotation
    }
  }, []);

  return (
    <Canvas style={{ height: '100vh', backgroundColor: 'white' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <primitive ref={modelRef} object={gltf.scene} />
      <OrbitControls />
    </Canvas>
  );
};

export default InteractiveModel;