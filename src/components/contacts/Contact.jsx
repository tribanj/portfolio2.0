import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import emailjs from "emailjs-com";
import { AiOutlineMail } from "react-icons/ai";
import { BsMessenger, BsWhatsapp } from "react-icons/bs";

// 3D Floating Message Icon
function FloatingMessageIcon({ position, icon, color, rotationSpeed }) {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += rotationSpeed;
      // Floating animation
      meshRef.current.position.y = position[1] + Math.sin(Date.now() * 0.002) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.5, 16, 16]} />
      <meshStandardMaterial
        color={color}
        metalness={0.8}
        roughness={0.2}
        transparent
        opacity={0.7}
        emissive={color}
        emissiveIntensity={0.3}
      />

      {/* Icon inside the sphere */}
      <Text
        position={[0, 0, 0.6]}
        fontSize={0.4}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {icon}
      </Text>
    </mesh>
  );
}

// 3D Floating Shape
function FloatingShape({ shape, position, color, size }) {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.015;
    }
  });

  const getGeometry = () => {
    switch (shape) {
      case 'cube': return <boxGeometry args={[size, size, size]} />;
      case 'cone': return <coneGeometry args={[size, size * 1.5, 8]} />;
      case 'torus': return <torusGeometry args={[size, size / 3, 16, 32]} />;
      case 'octahedron': return <octahedronGeometry args={[size, 0]} />;
      default: return <sphereGeometry args={[size, 16, 16]} />;
    }
  };

  return (
    <mesh ref={meshRef} position={position}>
      {getGeometry()}
      <meshStandardMaterial
        color={color}
        metalness={0.7}
        roughness={0.3}
        transparent
        opacity={0.4}
      />
    </mesh>
  );
}

const Contact = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aryw26q",
        "template_wwtdc1l",
        form.current,
        "A454Mioe1Zr7nTb5v"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true);
          setTimeout(() => setIsSubmitted(false), 3000);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact-us" className="min-h-screen py-16 bg-gradient-to-b from-gray-900 to-gray-950 text-white overflow-hidden relative">
      {/* 3D Background with floating shapes */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 5]} intensity={0.6} />

          {/* Floating message icons */}
          <FloatingMessageIcon
            position={[-8, 2, -5]}
            icon="✉️"
            color="#6366f1"
            rotationSpeed={0.01}
          />
          <FloatingMessageIcon
            position={[8, -1, -3]}
            icon="💬"
            color="#10b981"
            rotationSpeed={0.015}
          />
          <FloatingMessageIcon
            position={[0, 5, -7]}
            icon="📱"
            color="#ec4899"
            rotationSpeed={0.02}
          />

          {/* Additional floating shapes */}
          <FloatingShape shape="cube" position={[-10, -3, -8]} color="#3b82f6" size={0.8} />
          <FloatingShape shape="torus" position={[12, 4, -6]} color="#8b5cf6" size={1} />
          <FloatingShape shape="cone" position={[-5, -6, -4]} color="#f59e0b" size={0.6} />
          <FloatingShape shape="octahedron" position={[6, 7, -9]} color="#ec4899" size={0.7} />
        </Canvas>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h5 className="text-indigo-400 text-lg md:text-xl font-medium mb-2">Get in Touch</h5>
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">Contact Me</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Options with Glassmorphic Effect */}
          <div className="space-y-6">
            <article className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-500/20 p-3 rounded-full mr-4">
                  <AiOutlineMail className="text-2xl text-indigo-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Email</h4>
                  <h5 className="text-gray-300">tribhuwanja@gmail.com</h5>
                </div>
              </div>
              <a
                href="mailto:tribhuwanja@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded-lg transition-colors text-sm"
              >
                Send me a message
              </a>
            </article>

            <article className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500/20 p-3 rounded-full mr-4">
                  <BsMessenger className="text-2xl text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Messenger</h4>
                  <h5 className="text-gray-300">Facebook</h5>
                </div>
              </div>
              <a
                href="http://m.me/profile.php?id=100051992145488"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg transition-colors text-sm"
              >
                Send me a message
              </a>
            </article>

            <article className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="bg-green-500/20 p-3 rounded-full mr-4">
                  <BsWhatsapp className="text-2xl text-green-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white">WhatsApp</h4>
                  <h5 className="text-gray-300">7700826056</h5>
                </div>
              </div>
              <a
                href="http://api.whatsapp.com/send?phone=7700826056"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded-lg transition-colors text-sm"
              >
                Send me a message
              </a>
            </article>
          </div>

          {/* Contact Form with Glassmorphic Effect */}
          <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/20">
            {isSubmitted && (
              <div className="bg-green-500/20 text-green-300 p-4 rounded-lg mb-6 border border-green-500/30">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  required
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg py-4 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg py-4 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                />
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Write your message here..."
                  required
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg py-4 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-medium py-4 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/30 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Floating 3D Element in the center background */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-10 z-0">
          <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 2, 2]} intensity={1} />
            <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
              <dodecahedronGeometry args={[3, 0]} />
              <meshStandardMaterial
                color="#6366f1"
                wireframe={true}
                transparent
                opacity={0.3}
              />
            </mesh>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Contact;