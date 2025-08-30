import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import { BsPatchCheckFill } from "react-icons/bs";

// 3D Skill Object Component
function SkillObject({ skill, level, position, index }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  
  // Define colors based on skill level
  const getColor = () => {
    switch(level) {
      case "Experienced": return "#10b981"; // Green
      case "Intermediate": return "#3b82f6"; // Blue
      case "Initial": return "#8b5cf6"; // Purple
      default: return "#6366f1"; // Indigo
    }
  };

  // Define shapes for variety
  const getShape = (type) => {
    switch(type % 4) {
      case 0: return <sphereGeometry args={[0.4, 16, 16]} />;
      case 1: return <boxGeometry args={[0.7, 0.7, 0.7]} />;
      case 2: return <coneGeometry args={[0.5, 1, 8]} />;
      case 3: return <octahedronGeometry args={[0.5, 0]} />;
      default: return <sphereGeometry args={[0.4, 16, 16]} />;
    }
  };

  useFrame((state) => {
    if (meshRef.current) {
      // Floating animation with variation based on index
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2 + index) * 0.1;
      
      // Rotation animation
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.015;
    }
  });

  return (
    <mesh 
      ref={meshRef} 
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.2 : 1}
    >
      {getShape(index)}
      <meshStandardMaterial 
        color={getColor()} 
        metalness={0.8} 
        roughness={0.2}
        transparent
        opacity={0.8}
        emissive={getColor()}
        emissiveIntensity={0.2}
      />
      
      {/* Skill name on hover */}
      {hovered && (
        <Text
          position={[0, -1, 0]}
          fontSize={0.3}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          {skill}
        </Text>
      )}
    </mesh>
  );
}

const Experience = () => {
  const frontendSkills = [
    { skill: "HTML", level: "Experienced" },
    { skill: "CSS", level: "Intermediate" },
    { skill: "JavaScript", level: "Experienced" },
    { skill: "Bootstrap", level: "Intermediate" },
    { skill: "Tailwind", level: "Intermediate" },
    { skill: "React js", level: "Experienced" }
  ];

  const backendSkills = [
    { skill: "Node Js", level: "Experienced" },
    { skill: "MongoDb", level: "Intermediate" },
    { skill: "PHP", level: "Initial" },
    { skill: "Express js", level: "Intermediate" },
    { skill: "MySQL", level: "Initial" },
    { skill: "Python", level: "Initial" }
  ];

  const allSkills = [...frontendSkills, ...backendSkills];

  return (
    <section id="experience" className="min-h-screen py-16 bg-gradient-to-b from-gray-900 to-gray-950 text-white overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-transparent to-transparent"></div>
      
      {/* 3D Background with 38 floating objects */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 5]} intensity={0.6} />
          
          {/* Create 38 floating objects */}
          {Array.from({ length: 38 }).map((_, i) => {
            const position = [
              (Math.random() - 0.5) * 30, // x: -15 to 15
              (Math.random() - 0.5) * 30, // y: -15 to 15
              (Math.random() - 0.5) * 10 - 5 // z: -10 to 0
            ];
            
            // Random skill from our list for some objects
            const randomSkill = allSkills[i % allSkills.length];
            
            return (
              <mesh key={i} position={position}>
                <sphereGeometry args={[0.2 + Math.random() * 0.3, 8, 8]} />
                <meshStandardMaterial 
                  color={i % 3 === 0 ? "#6366f1" : i % 3 === 1 ? "#10b981" : "#8b5cf6"} 
                  metalness={0.7} 
                  roughness={0.3}
                  transparent
                  opacity={0.4}
                />
              </mesh>
            );
          })}
        </Canvas>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h5 className="text-indigo-400 text-lg md:text-xl font-medium mb-2">What Skills I Have</h5>
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">My Experience</h2>
        </div>

        {/* 3D Skills Visualization */}
        <div className="h-96 mb-16 rounded-xl overflow-hidden bg-gray-800/20 backdrop-blur-sm border border-indigo-500/20">
          <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <pointLight position={[-5, -5, 5]} intensity={0.5} color="#4f46e5" />
            
            {/* Frontend Skills */}
            {frontendSkills.map((skill, index) => {
              const x = -3 + (index % 3) * 3;
              const y = 2 - Math.floor(index / 3) * 2;
              
              return (
                <SkillObject
                  key={`frontend-${index}`}
                  skill={skill.skill}
                  level={skill.level}
                  position={[x, y, 0]}
                  index={index}
                />
              );
            })}
            
            {/* Backend Skills */}
            {backendSkills.map((skill, index) => {
              const x = 3 + (index % 3) * 3;
              const y = 2 - Math.floor(index / 3) * 2;
              
              return (
                <SkillObject
                  key={`backend-${index}`}
                  skill={skill.skill}
                  level={skill.level}
                  position={[x, y, 0]}
                  index={index + 6}
                />
              );
            })}
            
            <OrbitControls 
              enableZoom={true} 
              enablePan={true}
              autoRotate={false}
            />
          </Canvas>
        </div>

        {/* Skills Details with Glassmorphic Effect */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Frontend Development */}
          <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300">
            <h3 className="text-2xl font-bold text-indigo-300 mb-6 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 18l-6-6h12z"/>
              </svg>
              Frontend Development
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {frontendSkills.map((skill, index) => (
                <div key={index} className="flex items-center p-3 bg-gray-700/30 rounded-lg">
                  <BsPatchCheckFill className={`text-lg mr-3 ${
                    skill.level === "Experienced" ? "text-green-400" :
                    skill.level === "Intermediate" ? "text-blue-400" : "text-purple-400"
                  }`} />
                  <div>
                    <h4 className="font-medium text-white">{skill.skill}</h4>
                    <small className={`${
                      skill.level === "Experienced" ? "text-green-300" :
                      skill.level === "Intermediate" ? "text-blue-300" : "text-purple-300"
                    }`}>
                      {skill.level}
                    </small>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Development */}
          <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300">
            <h3 className="text-2xl font-bold text-indigo-300 mb-6 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2 12l9-9 9 9M12 2v20"/>
              </svg>
              Backend Development
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {backendSkills.map((skill, index) => (
                <div key={index} className="flex items-center p-3 bg-gray-700/30 rounded-lg">
                  <BsPatchCheckFill className={`text-lg mr-3 ${
                    skill.level === "Experienced" ? "text-green-400" :
                    skill.level === "Intermediate" ? "text-blue-400" : "text-purple-400"
                  }`} />
                  <div>
                    <h4 className="font-medium text-white">{skill.skill}</h4>
                    <small className={`${
                      skill.level === "Experienced" ? "text-green-300" :
                      skill.level === "Intermediate" ? "text-blue-300" : "text-purple-300"
                    }`}>
                      {skill.level}
                    </small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-12 flex justify-center gap-6">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-green-400 rounded-full mr-2"></div>
            <span className="text-sm text-gray-300">Experienced</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-blue-400 rounded-full mr-2"></div>
            <span className="text-sm text-gray-300">Intermediate</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-purple-400 rounded-full mr-2"></div>
            <span className="text-sm text-gray-300">Initial</span>
          </div>
        </div>
      </div>
    </section>  
  );
};

export default Experience;