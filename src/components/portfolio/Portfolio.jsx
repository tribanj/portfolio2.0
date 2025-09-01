import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text, Float } from "@react-three/drei";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";
import IMG7 from "../../assets/portfolio7.png";
import IMG8 from "../../assets/portfolio8.png";
import IMG9 from "../../assets/shoping app.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "E-commerce Website Amazon Clone",
    github: "https://github.com/tribanj",
    demo: "https://amazonlandingpagecss.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Restaurent Website",
    github: "https://github.com/tribanj",
    demo: "https://restauhotel.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "New Visual of GPT 3.O Website",
    github: "https://github.com/tribanj",
    demo: "https://gpt3point0.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "React Portfolio Design",
    github: "https://github.com/tribanj",
    demo: "https://reactportfoliodesign.netlify.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Room Renting Website (Full Stack)",
    github: "https://github.com/tribanj",
    demo: "https://room-marketplace.netlify.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Hotel Renting Site Design",
    github: "https://github.com/tribanj",
    demo: "https://tribhuwan-first-react-project.netlify.app/",
  },
  {
    id: 7,
    image: IMG7,
    title: "Personal Portfolio",
    github: "https://github.com/tribanj",
    demo: "https://github.com/tribanj/restaurant",
  },
  {
    id: 8,
    image: IMG8,
    title: "Name Suggestion application",
    github: "https://github.com/tribanj",
    demo: "https://name-suggesting-application.netlify.app/",
  },
  {
    id: 9,
    image: IMG9,
    title: "Online shoping Application",
    github: "https://github.com/tribanj",
    demo: "https://electricworld.netlify.app/",
  },
];

// 3D Portfolio Item Component
function PortfolioCube({ image, title, position, onClick, isSelected }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      // Gentle floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.05;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh 
        ref={meshRef} 
        position={position}
        onClick={onClick}
        scale={isSelected ? 1.2 : 1}
      >
        <boxGeometry args={[2, 2, 0.2]} />
        <meshStandardMaterial 
          color={isSelected ? "#6366f1" : "#374151"} 
          metalness={0.8} 
          roughness={0.2}
          transparent
          opacity={0.9}
        />
        <mesh position={[0, 0, 0.11]}>
          <planeGeometry args={[1.9, 1.9]} />
          <meshBasicMaterial attach="material" transparent>
            <canvasTexture attach="map" image={image} />
          </meshBasicMaterial>
        </mesh>
      </mesh>
    </Float>
  );
}

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="portfolio" className="min-h-screen py-16 bg-gradient-to-b from-gray-900 to-gray-950 text-white overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h5 className="text-indigo-400 text-lg md:text-xl font-medium mb-2">My Recent Work</h5>
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">Portfolio</h2>
        </div>

        {/* 3D Portfolio Gallery */}
        {/* <div className="h-96 mb-12 rounded-xl overflow-hidden bg-gray-800/20 backdrop-blur-sm border border-indigo-500/20">
          <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <pointLight position={[-5, -5, 5]} intensity={0.5} color="#4f46e5" />
            
            {/* Arrange portfolio items in a grid */}
            {/* {data.map((item, index) => {
              const row = Math.floor(index / 3);
              const col = index % 3;
              const x = (col - 1) * 3;
              const y = (1 - row) * 3;
              
              return (
                <PortfolioCube
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  position={[x, y, 0]}
                  onClick={() => setSelectedProject(item)}
                  isSelected={selectedProject?.id === item.id}
                />
              );
            })} */}
            
            {/* <OrbitControls 
              enableZoom={true} 
              enablePan={true}
              autoRotate={false} 
            /> */}
          {/* </Canvas> */}
        {/* </div> */} */

        {/* Project Details */}
        {selectedProject && (
          <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/20 mb-12">
            <h3 className="text-2xl font-bold mb-4 text-indigo-300">{selectedProject.title}</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={selectedProject.github} 
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                target="_blank" 
                rel="noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View Code
              </a>
              <a 
                href={selectedProject.demo} 
                className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                target="_blank" 
                rel="noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.947v1.053h-1v-1.053c-3.94-.366-7-1.167-7-5.447h2c0 2.936 2.174 3.381 5 3.801v-7.994h1v7.994c2.826-.42 5-.865 5-3.801h2c0 4.28-3.06 5.081-7 5.447z"/>
                </svg>
                Live Demo
              </a>
            </div>
          </div>
        )}

        {/* Grid view for smaller screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item) => (
            <div 
              key={item.id} 
              className="bg-gray-800/40 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-indigo-500 transition-all duration-300 hover:scale-105"
              onClick={() => setSelectedProject(item)}
            >
              <div className="h-48 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-3 text-white">{item.title}</h3>
                <div className="flex gap-2">
                  <a 
                    href={item.github} 
                    className="text-sm bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded transition-colors"
                    target="_blank" 
                    rel="noreferrer"
                  >
                    Code
                  </a>
                  <a 
                    href={item.demo} 
                    className="text-sm bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1 rounded transition-colors"
                    target="_blank" 
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;