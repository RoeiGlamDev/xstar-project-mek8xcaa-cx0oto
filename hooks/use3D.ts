import { useEffect, useRef } from 'react';

const use3D = (modelUrl: string) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('webgl');
    if (!context) return;

    // Load and render the 3D model
    const loadModel = async () => {
      const response = await fetch(modelUrl);
      const modelData = await response.arrayBuffer();
      // Process and render the model data with WebGL
    };

    loadModel();

    return () => {
      // Cleanup resources if necessary
    };
  }, [modelUrl]);

  return canvasRef; // Return the ref to attach to a canvas element
};

export default use3D;