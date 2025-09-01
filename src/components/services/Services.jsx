import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import { BiCheck } from "react-icons/bi";

// 3D Service Card Component
function ServiceCard3D({ position, rotation, title, services, index, isHovered, onHover }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      // Gentle floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2 + index) * 0.05;
      
      // Slight rotation
      if (!isHovered) {
        meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.1;
      }
    }
  });

  return (
    <mesh 
      ref={meshRef} 
      position={position}
      rotation={rotation}
      onPointerOver={() => onHover(index)}
      onPointerOut={() => onHover(null)}
      scale={isHovered ? 1.1 : 1}
    >
      <boxGeometry args={[3.5, 4, 0.2]} />
      <meshStandardMaterial 
        color={isHovered ? "#6366f1" : "#374151"} 
        metalness={0.8} 
        roughness={0.2}
        transparent
        opacity={0.9}
      />
      
      {/* Title on the front */}
      <Text
        position={[0, 1.5, 0.11]}
        fontSize={0.3}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {title}
      </Text>
      
      {/* Services list on the front */}
      <group position={[0, 0, 0.11]}>
        {services.slice(0, 3).map((service, i) => (
          <Text
            key={i}
            position={[0, 0.5 - (i * 0.4), 0]}
            fontSize={0.15}
            color="#e5e7eb"
            anchorX="center"
            anchorY="middle"
            maxWidth={3}
          >
            • {service}
          </Text>
        ))}
        {services.length > 3 && (
          <Text
            position={[0, -1, 0]}
            fontSize={0.15}
            color="#9ca3af"
            anchorX="center"
            anchorY="middle"
          >
            +{services.length - 3} more...
          </Text>
        )}
      </group>
    </mesh>
  );
}

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const servicesData = [
    {
      title: "UI/UX Design",
      services: [
        "Adobe Photoshop", "Adobe XD", "Figma", "Canva", 
        "Logo Design", "Poster Making", "Brand Identity"
      ]
    },
    {
      title: "Web Development",
      services: [
        "Frontend Development", "Dynamic Website", "Static Website", 
        "Single Page Website", "Multipage Website", "E-Commerce Website", 
        "Shopify Development", "Restaurant Website"
      ]
    },
    {
      title: "Content Creation",
      services: [
        "YouTube Content", "Tutorial Videos", "Educational Content", 
        "Tech Reviews", "Coding Tutorials", "UI/UX Tips", "Web Development Guides"
      ]
    }
  ];

  return (
    <section id="services" className="min-h-screen py-16 bg-gradient-to-b from-gray-900 to-gray-950 text-white overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h5 className="text-indigo-400 text-lg md:text-xl font-medium mb-2">What I Offer</h5>
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">Services</h2>
        </div>
        {/* Services Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div 
              key={index}
              className={`bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 ${
                hoveredCard === index 
                  ? "border-indigo-500 scale-105" 
                  : "border-gray-700"
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="service__head mb-6">
                <h3 className="text-xl font-bold text-indigo-300">{service.title}</h3>
              </div>
              <ul className="service__list space-y-3">
                {service.services.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <BiCheck className="service__list-icon text-indigo-400 mt-1 mr-2 text-xl flex-shrink-0" />
                    <p className="text-gray-300">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Interested in working together?</p>
          <a 
            href="#contact" 
            className="inline-block bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/30"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;