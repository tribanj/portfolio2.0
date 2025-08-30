import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import CTA from './CTA';
import './header.css';

// Orange Geometric Shape
function GeometricShape() {
  return (
    <mesh rotation={[0.5, 0.5, 0]}>
      <icosahedronGeometry args={[1.5, 0]} />
      <meshStandardMaterial
        color="#FF8C00"
        metalness={0.8}
        roughness={0.2}
        emissive="#FFA500"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

// Technology Labels that appear around the shape
function TechnologyLabels() {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  const technologies = [
    { name: "REACT", position: [3, 3, 0], color: "#61DAFB" },
    { name: "THREE.JS", position: [-3, 3, 0], color: "#000000" },
    { name: "NODE.JS", position: [0, -3, 0], color: "#339933" },
    { name: "WEBGL", position: [3, -3, 0], color: "#990000" },
    { name: "HTML5", position: [-3, -3, 0], color: "#E34F26" },
    { name: "CSS3", position: [0, 3, 0], color: "#1572B6" },
  ];

  return (
    <group ref={groupRef}>
      {technologies.map((tech, index) => (
        <Text
          key={index}
          position={tech.position}
          fontSize={0.5}
          color={tech.color}
          anchorX="center"
          anchorY="middle"
          font="https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fBBc4.woff2"
        >
          {tech.name}
        </Text>
      ))}
    </group>
  );
}

const Header = () => {
  return (
    <header id="home" className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-white overflow-hidden relative">
      {/* Background effect */}
      <div className="absolute top-[-50%] right-[-50%] w-full h-full bg-[radial-gradient(circle,_rgba(99,102,241,0.1)_0%,_transparent_70%)]"></div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Section: Details */}
          <div className="lg:w-1/2 mb-12 lg:mb-0 animate-fade-in-up">
            <h5 className="text-indigo-400 text-lg lg:text-xl font-medium mb-2">
              Hello, I'm
            </h5>
            <h1 className="text-4xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
              Tribuwan Kumar
            </h1>
            <div className="h-8 overflow-hidden mb-4">
              <div className="typing-effect">
                <h5 className="text-xl lg:text-2xl text-gray-300 font-medium">
                  MERN STACK Developer & Content Creator
                </h5>
              </div>
            </div>
            <p className="text-gray-400 mb-8 max-w-md text-lg leading-relaxed">
              I create immersive web experiences using modern technologies
              and innovative design principles. Passionate about clean code
              and user-centered interfaces.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <CTA />
            </div>
          </div>

          {/* Right Section: 3D Element */}
          <div className="lg:w-1/2 flex flex-col items-center">
            <div className="w-64 h-64 lg:w-80 lg:h-80 mb-6">
              <Suspense fallback={
                <div className="w-full h-full flex justify-center items-center text-orange-500 text-lg rounded-2xl bg-gray-800/30">
                  Loading 3D Element...
                </div>
              }>
                <Canvas
                  camera={{ position: [0, 0, 10], fov: 50 }}
                  gl={{ antialias: true }}
                  className="rounded-2xl"
                >
                  <ambientLight intensity={0.5} />
                  <directionalLight position={[2, 2, 2]} intensity={1} />
                  <pointLight position={[-2, -2, -2]} intensity={0.5} color="#FFA500" />
                  <GeometricShape />
                  <TechnologyLabels />
                  <OrbitControls
                    enableZoom={false}
                    autoRotate
                    autoRotateSpeed={3}
                  />
                </Canvas>
              </Suspense>
            </div>

            <div className="flex gap-3">
              <div className="bg-indigo-500/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-indigo-500/30 text-indigo-300 font-medium text-sm animate-float">
                React
              </div>
              <div className="bg-purple-500/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-purple-500/30 text-purple-300 font-medium text-sm animate-float" style={{ animationDelay: '0.5s' }}>
                Three.js
              </div>
              <div className="bg-green-500/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-green-500/30 text-green-300 font-medium text-sm animate-float" style={{ animationDelay: '1s' }}>
                Node.js
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
 
export default Header;