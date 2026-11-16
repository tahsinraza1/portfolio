import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function FloatingOrb() {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      meshRef.current.rotation.y += 0.003;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <group ref={meshRef} position={[2.5, 0, -2]}>
      <mesh scale={1.8}>
        <icosahedronGeometry args={[1.5, 4]} />
        <meshBasicMaterial
          color="#2dd4bf"
          wireframe={true}
          transparent={true}
          opacity={0.16}
        />
      </mesh>
    </group>
  );
}
