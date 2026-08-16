import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import FloatingOrb from './FloatingOrb';
import ParticleField from './ParticleField';
import Lights from './Lights';

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 50 }}
      style={{ width: '100%', height: '100%' }}
      gl={{ 
        antialias: true, 
        alpha: true,
        powerPreference: 'high-performance'
      }}
    >
      <Suspense fallback={null}>
        <Lights />
        <FloatingOrb />
        <ParticleField />
      </Suspense>
    </Canvas>
  );
}
