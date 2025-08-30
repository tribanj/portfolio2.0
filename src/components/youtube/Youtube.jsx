import React, { useRef, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Float } from '@react-three/drei';
import * as THREE from 'three';
import './youtube.css';

// 3D YouTube Logo Component
function YouTubeLogo() {
  const meshRef = useRef();
  const groupRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Red YouTube play button */}
      <mesh position={[0, 0, 0]} ref={meshRef}>
        <cylinderGeometry args={[1.2, 1.2, 0.4, 64]} />
        <meshStandardMaterial color="#FF0000" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Play triangle */}
      <mesh position={[0, 0, 0.25]} rotation={[0, 0, Math.PI / 2]}>
        <coneGeometry args={[0.7, 1, 3]} />
        <meshStandardMaterial color="#ffffff" metalness={0.5} roughness={0.3} />
      </mesh>
      
      {/* Floating text */}
      <Text
        position={[0, -2.2, 0]}
        fontSize={0.8}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
      >
        YouTube Channel
      </Text>
      
      {/* Subscriber count */}
      <Text
        position={[0, -3, 0]}
        fontSize={0.5}
        color="#FF0000"
        anchorX="center"
        anchorY="middle"
      >
        22K+ Subscribers
      </Text>
    </group>
  );
}

// Floating Video Cards
function FloatingVideoCard({ position, rotation, videoId }) {
  return (
    <Float speed={5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh position={position} rotation={rotation}>
        <boxGeometry args={[3, 2, 0.2]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.6} roughness={0.4} />
        {/* Video thumbnail would go here in a real implementation */}
      </mesh>
    </Float>
  );
}

const YouTubeChannel = () => {
  const openYoutube = () => {
    window.open('https://www.youtube.com/channel/UCBuy0RSnk-KGormyI_GJwXQ', '_blank');
  };

  const videos = [
    { id: '_ozYwoNxLWE', title: 'MERN Stack Tutorial' },
    { id: 'aqZbP2olX9s', title: 'React Three.js Guide' },
    { id: 'jSJxVatunh8', title: 'JavaScript Masterclass' },
    { id: 'jcyVfo_rLpk', title: 'Node.js Backend Development' },
    { id: 'RuP3IJqtPZc', title: 'CSS Animations Tutorial' },
    { id: 'vycGLy-jkt0', title: 'Web Development Tips' },
  ];

  return (
    <section id="youtube" className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-16 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent">
            My YouTube Content
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Explore my programming tutorials, web development guides, and tech content that helps thousands of developers.
          </p>
        </motion.div>

        {/* Large 3D YouTube Logo */}
        <motion.div 
          className="relative h-96 mb-20 cursor-pointer"
          onClick={openYoutube}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Canvas camera={{ position: [0, 0, 8], fov: 50 }} className="rounded-xl">
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <pointLight position={[-5, -5, 5]} intensity={0.5} color="#ff0000" />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
            
            <Suspense fallback={null}>
              <YouTubeLogo />
            </Suspense>
            
            <OrbitControls 
              enableZoom={false} 
              enablePan={false}
              autoRotate 
              autoRotateSpeed={2} 
            />
          </Canvas>
          
          {/* CTA Button */}
          <motion.button
            onClick={openYoutube}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
            Visit Channel
          </motion.button>
        </motion.div>

        {/* Video Grid */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-300">Popular Videos</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-red-500 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(255, 0, 0, 0.1)' }}
              >
                <div className="relative overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={video.title}
                    className="w-full h-48"
                  />
                  <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" />
                      </svg>
                      {Math.floor(Math.random() * 500) + 500}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 text-white">{video.title}</h3>
                  <div className="flex justify-between items-center text-sm text-gray-400">
                    <span>{Math.floor(Math.random() * 20) + 5}K views</span>
                    <span>{Math.floor(Math.random() * 12) + 1} months ago</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Channel Stats */}
        <motion.div 
          className="bg-gray-800/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-red-500">22K+</div>
              <div className="text-gray-400">Subscribers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-red-500">100+</div>
              <div className="text-gray-400">Videos</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-red-500">500K+</div>
              <div className="text-gray-400">Views</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-red-500">4.8</div>
              <div className="text-gray-400">Avg. Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default YouTubeChannel;