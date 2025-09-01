import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaHeart } from "react-icons/fa";

// 3D Floating Shape Component
function FloatingShape({ shape, position, color, size, rotationSpeed }) {
  const meshRef = useRef();
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += rotationSpeed;
      meshRef.current.rotation.y += rotationSpeed * 1.3;
      // Floating animation
      meshRef.current.position.y = position[1] + Math.sin(Date.now() * 0.001) * 0.2;
    }
  });

  const getGeometry = () => {
    switch(shape) {
      case 'cube': return <boxGeometry args={[size, size, size]} />;
      case 'cone': return <coneGeometry args={[size, size * 1.5, 8]} />;
      case 'torus': return <torusGeometry args={[size, size/3, 16, 32]} />;
      case 'octahedron': return <octahedronGeometry args={[size, 0]} />;
      case 'dodecahedron': return <dodecahedronGeometry args={[size, 0]} />;
      case 'icosahedron': return <icosahedronGeometry args={[size, 0]} />;
      default: return <sphereGeometry args={[size, 16, 16]} />;
    }
  };

  return (
    <mesh ref={meshRef} position={position}>
      {getGeometry()}
      <meshStandardMaterial 
        color={color} 
        metalness={0.8} 
        roughness={0.2}
        transparent
        opacity={0.7}
        emissive={color}
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

const Footer = () => {
  return (
    <footer className="relative min-h-80 bg-gradient-to-b from-gray-900 to-gray-950 text-white overflow-hidden pt-16 pb-8">
      {/* 3D Background with floating shapes */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={0.8} />
          <pointLight position={[-5, 5, 5]} intensity={0.5} color="#6366f1" />
          <pointLight position={[5, -5, 5]} intensity={0.5} color="#ec4899" />
          
          {/* Create multiple floating shapes */}
          <FloatingShape shape="sphere" position={[-12, 2, -5]} color="#6366f1" size={0.6} rotationSpeed={0.01} />
          <FloatingShape shape="cube" position={[10, -3, -3]} color="#ec4899" size={0.7} rotationSpeed={0.015} />
          <FloatingShape shape="cone" position={[-8, -6, -7]} color="#f59e0b" size={0.5} rotationSpeed={0.02} />
          <FloatingShape shape="torus" position={[12, 4, -4]} color="#10b981" size={0.8} rotationSpeed={0.018} />
          <FloatingShape shape="octahedron" position={[-5, 7, -6]} color="#8b5cf6" size={0.6} rotationSpeed={0.012} />
          <FloatingShape shape="dodecahedron" position={[7, 1, -8]} color="#3b82f6" size={0.5} rotationSpeed={0.022} />
          <FloatingShape shape="icosahedron" position={[0, -4, -2]} color="#ef4444" size={0.7} rotationSpeed={0.016} />
          <FloatingShape shape="sphere" position={[-15, -2, -9]} color="#06b6d4" size={0.4} rotationSpeed={0.025} />
          <FloatingShape shape="torus" position={[14, 5, -5]} color="#84cc16" size={0.6} rotationSpeed={0.019} />
        </Canvas>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Footer Logo */}
        <div className="text-center mb-8">
          <a href="/" className="inline-block text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Tribhuwan
          </a>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-6 mb-8">
          {['Home', 'About', 'Experience', 'Services', 'Portfolio', 'Testimonials', 'Contact'].map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`} 
                className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          <a 
            href="https://www.facebook.com/profile.php?id=61555580574776" 
            className="bg-indigo-600/20 hover:bg-indigo-600/30 p-3 rounded-full border border-indigo-500/30 text-indigo-300 hover:text-white transition-all duration-300 hover:scale-110"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaFacebookF className="text-xl" />
          </a>
          <a 
            href="http://instagram.com/tribhuwan11_" 
            className="bg-pink-600/20 hover:bg-pink-600/30 p-3 rounded-full border border-pink-500/30 text-pink-300 hover:text-white transition-all duration-300 hover:scale-110"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-xl" />
          </a>
          <a 
            href="http://twitter.com/@tribhuwan_93" 
            className="bg-blue-500/20 hover:bg-blue-500/30 p-3 rounded-full border border-blue-400/30 text-blue-300 hover:text-white transition-all duration-300 hover:scale-110"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-xl" />
          </a>
          <a 
            href="http://youtube.com/@exploreechox" 
            className="bg-red-600/20 hover:bg-red-600/30 p-3 rounded-full border border-red-500/30 text-red-300 hover:text-white transition-all duration-300 hover:scale-110"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaYoutube className="text-xl" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <div className="inline-flex items-center bg-gray-800/40 backdrop-blur-sm rounded-full px-6 py-3 border border-indigo-500/20">
            <small className="text-gray-300 mr-2">
              &copy; Tribhuwan Personal Portfolio 2025. All rights reserved.
            </small>
            <FaHeart className="text-red-500 animate-pulse" />
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute left-10 bottom-10 opacity-20">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 blur-xl"></div>
        </div>
        <div className="absolute right-10 top-10 opacity-20">
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 blur-xl"></div>
        </div>
        <div className="absolute left-1/4 bottom-1/4 opacity-20">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 blur-xl"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;