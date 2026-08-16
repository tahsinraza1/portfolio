import { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function FloatingOrb() {
  const meshRef = useRef<THREE.Group>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001;
      meshRef.current.rotation.y += 0.002;
      
      meshRef.current.position.x += (mousePosition.x * 2 - meshRef.current.position.x) * 0.05;
      meshRef.current.position.y += (mousePosition.y * 2 - meshRef.current.position.y) * 0.05;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Main sphere */}
      <mesh>
        <icosahedronGeometry args={[2, 8]} />
        <meshPhongMaterial
          color="#00d9ff"
          emissive="#004466"
          wireframe={false}
          shininess={100}
        />
      </mesh>

      {/* Wireframe overlay */}
      <mesh scale={2.01}>
        <icosahedronGeometry args={[2, 8]} />
        <meshBasicMaterial
          color="#00d9ff"
          wireframe={true}
          opacity={0.3}
          transparent={true}
        />
      </mesh>

      {/* Glowing rings */}
      <group>
        {[0, 45, 90].map((rotation) => (
          <mesh key={rotation} rotation={[
            (rotation * Math.PI) / 180,
            0,
            0
          ]}>
            <torusGeometry args={[3, 0.1, 16, 100]} />
            <meshBasicMaterial
              color="#00d9ff"
            />
          </mesh>
        ))}
      </group>
    </group>
  );
}
