import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import ME from "../../assets/me1.png";
import { FaAward, FaYoutube } from "react-icons/fa";
import { BsFolderCheck } from "react-icons/bs";

// Simple 3D Floating Sphere
function ImageSphere() {
  const meshRef = useRef();
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.8, 64, 64]} />
      <meshStandardMaterial color="#6366f1" metalness={0.8} roughness={0.2} />
    </mesh>
  );
}

const About = () => {
  return (
    <section id="about" className="min-h-screen py-16 bg-gradient-to-br from-gray-900 to-gray-950 text-white overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h5 className="text-indigo-400 text-lg md:text-xl font-medium mb-2">Get To Know</h5>
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">About Me</h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* 3D Visualization Section */}
          <div className="w-full lg:w-2/5 h-96 relative">
            <Canvas
              camera={{ position: [0, 0, 5], fov: 50 }}
              gl={{ antialias: true }}
              className="rounded-xl bg-gray-800/20 backdrop-blur-sm border border-indigo-500/20"
            >
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 3, 3]} intensity={1} />
              <pointLight position={[-3, -3, -3]} intensity={0.5} color="#4f46e5" />
              
              <ImageSphere />
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
            </Canvas>
            
            {/* Your photo positioned over the 3D sphere */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-4 border-gray-800 shadow-xl">
              <img 
                src={ME} 
                alt="Tribhuwan Kumar" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating info elements around the sphere */}
            <div className="absolute top-4 left-4 bg-indigo-600/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg animate-float">
              <span className="font-semibold">Experience</span>
              <p className="text-sm">1.5+ Years</p>
            </div>
            
            <div className="absolute top-4 right-4 bg-pink-600/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg animate-float" style={{animationDelay: '0.5s'}}>
              <span className="font-semibold">YouTube</span>
              <p className="text-sm">32K+ Subs</p>
            </div>
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-green-600/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg animate-float" style={{animationDelay: '1s'}}>
              <span className="font-semibold">Projects</span>
              <p className="text-sm">10+ Completed</p>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-3/5">
            <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 group">
                <div className="flex justify-center mb-3">
                  <FaAward className="text-3xl text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h5 className="text-center font-semibold mb-1">Experience</h5>
                <small className="text-gray-400 block text-center">1+ Years Working</small>
              </div>

              <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 group">
                <div className="flex justify-center mb-3">
                  <FaYoutube className="text-3xl text-red-500 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h5 className="text-center font-semibold mb-1">YouTube</h5>
                <small className="text-gray-400 block text-center">32K+ Subscriber</small>
              </div>

              <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 group">
                <div className="flex justify-center mb-3">
                  <BsFolderCheck className="text-3xl text-green-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h5 className="text-center font-semibold mb-1">Projects</h5>
                <small className="text-gray-400 block text-center">10+ Completed</small>
              </div>
            </div>

            <p className="text-gray-300 mb-8 text-lg leading-relaxed bg-gray-800/30 p-6 rounded-xl border border-indigo-500/10">
              My name is Tribhuwan kumar. I am a skilled MERN Stack Developer with
              a passion for building dynamic, responsive web applications. My
              expertise lies in full-stack development, utilizing MongoDB,
              Express.js, React, and Node.js to create seamless user experiences
              and efficient, maintainable code. I excel at integrating front-end
              and back-end services, ensuring robust and scalable solutions.
              Dedicated to continuous learning and growth, I am committed to
              delivering high-quality projects that meet user needs and industry
              standards.
            </p>

            <a 
              href="#contact" 
              className="inline-block bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/30"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;