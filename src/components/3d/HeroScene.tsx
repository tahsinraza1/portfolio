import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import FloatingOrb from './FloatingOrb';
import ParticleField from './ParticleField';
import Lights from './Lights';

export default function HeroScene() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        style={{ width: '100%', height: '100%', pointerEvents: 'none' }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
      >
        <Suspense fallback={null}>
          <Lights />
          <FloatingOrb />
          <ParticleField />
        </Suspense>
      </Canvas>
    </div>
  );
}
