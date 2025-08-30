import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function AIGeometricShape() {
  const mainRef = useRef();
  const particlesRef = useRef();
  const glowRef = useRef();
  
  useFrame((state) => {
    if (mainRef.current) {
      // Gentle floating animation
      mainRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
      
      // Continuous rotation
      mainRef.current.rotation.x += 0.005;
      mainRef.current.rotation.y += 0.008;
    }
    
    if (particlesRef.current) {
      // Particle animation
      particlesRef.current.rotation.y += 0.01;
    }
    
    if (glowRef.current) {
      // Pulsating glow effect
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      glowRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group>
      {/* Glow Effect - using a larger transparent sphere */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[2.2, 32, 32]} />
        <meshStandardMaterial 
          color="#00aaff" 
          transparent
          opacity={0.2}
          emissive="#0088ff"
          emissiveIntensity={0.3}
        />
      </mesh>
      
      <group ref={mainRef}>
        {/* Main AI Brain Shape */}
        <mesh>
          <octahedronGeometry args={[1.6, 0]} />
          <meshStandardMaterial 
            color="#00f0ff" 
            metalness={0.9} 
            roughness={0.1} 
            emissive="#0077ff"
            emissiveIntensity={0.6}
          />
        </mesh>
        
        {/* Inner Intelligence Core */}
        <mesh scale={0.5}>
          <sphereGeometry args={[1.2, 32, 32]} />
          <meshStandardMaterial 
            color="#ff00cc" 
            metalness={0.8} 
            roughness={0.2} 
            emissive="#ff0066"
            emissiveIntensity={0.7}
            transparent
            opacity={0.8}
          />
        </mesh>
        
        {/* Neural Connections */}
        <group ref={particlesRef}>
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i / 8) * Math.PI * 2;
            const radius = 2.2;
            return (
              <mesh key={i} position={[Math.cos(angle) * radius, 0, Math.sin(angle) * radius]}>
                <sphereGeometry args={[0.2, 16, 16]} />
                <meshStandardMaterial 
                  color="#00ff95" 
                  emissive="#00ff66"
                  emissiveIntensity={0.8}
                />
              </mesh>
            );
          })}
        </group>
      </group>
    </group>
  );
}

export default AIGeometricShape;