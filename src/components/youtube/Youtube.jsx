import React, { useRef, Suspense } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import * as THREE from "three";
import "./youtube.css";

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
        // ✅ Use Google Fonts .ttf version
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptug8zYS_SKggPN-Co.ttf"
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
        32K+ Subscribers
      </Text>
    </group>
  );
}

const YouTubeChannel = () => {
  const openYoutube = () => {
    window.open(
      "https://www.youtube.com/channel/UCBuy0RSnk-KGormyI_GJwXQ",
      "_blank"
    );
  };

  const videos = [
    { id: "_ozYwoNxLWE", title: "Exploring Very Old Hidden Temple" },
    { id: "aqZbP2olX9s", title: "Vaishnodevi complete tour guide" },
    { id: "jSJxVatunh8", title: "One Of The Best Bhojpuri movie review" },
    { id: "jcyVfo_rLpk", title: "Hostel Tour Video After Tufan" },
    { id: "RuP3IJqtPZc", title: "College Event, Bihar Folk Dance " },
    { id: "vycGLy-jkt0", title: "Birth-Day Celebration Iin Boys Hostel " },
  ];

  return (
    <section
      id="youtube"
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-16 overflow-hidden relative"
    >
      {/* Background */}
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
            Explore My Youtube Video,Discover the perfect blend of travel experiences and stock market insights. Learn, explore, and grow while on the move 
          </p>
        </motion.div>

        {/* 3D YouTube Logo */}
        <motion.div
          className="relative h-96 mb-20 cursor-pointer"
          onClick={openYoutube}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <pointLight position={[-5, -5, 5]} intensity={0.5} color="#ff0000" />
            <spotLight
              position={[10, 10, 10]}
              angle={0.15}
              penumbra={1}
              intensity={1}
            />

            <Suspense fallback={null}>
              <YouTubeLogo />
            </Suspense>

            {/* ✅ Safe OrbitControls */}
            <OrbitControls
              makeDefault
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
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-300">
            Popular Videos
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-red-500 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(255, 0, 0, 0.1)",
                }}
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
                    {Math.floor(Math.random() * 500) + 500}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 text-white">
                    {video.title}
                  </h3>
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
              <div className="text-3xl md:text-4xl font-bold text-red-500">
                32K+
              </div>
              <div className="text-gray-400">Subscribers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-red-500">
                250+
              </div>
              <div className="text-gray-400">Videos</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-red-500">
                100M+
              </div>
              <div className="text-gray-400">Views</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-red-500">
                4.8
              </div>
              <div className="text-gray-400">Avg. Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default YouTubeChannel;
