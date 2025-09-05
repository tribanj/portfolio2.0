import React from "react";
import { motion } from "framer-motion";
import CTA from "./CTA";
import "./header.css";
import me from '../../assets/me1.png';
import ProgressTimeline from "../progressTimeline/ProgressTimeLine";

// Variants for animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hover: { scale: 1.1, transition: { duration: 0.3 } },
};

// Floating Tech Icons Component
const FloatingTechIcons = () => {
  const techIcons = [
    { name: "React", icon: "⚛️", color: "text-blue-400", delay: 0 },
    { name: "Node.js", icon: "🟢", color: "text-green-400", delay: 1 },
    { name: "Three.js", icon: "🔺", color: "text-purple-400", delay: 2 },
    { name: "MongoDB", icon: "🍃", color: "text-green-500", delay: 3 },
    { name: "CSS3", icon: "🎨", color: "text-pink-400", delay: 4 },
    { name: "HTML5", icon: "🌐", color: "text-orange-400", delay: 5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {techIcons.map((tech, index) => (
        <motion.div
          key={index}
          className={`absolute text-xl md:text-2xl ${tech.color}`}
          style={{
            left: `${(index * 15) % 85}%`,
            top: `${(index * 20) % 85}%`,
          }}
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 1, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            delay: tech.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {tech.icon}
        </motion.div>
      ))}
    </div>
  );
};

const Header = () => {
  return (
    <header
      id="home"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden relative flex items-center justify-center pt-20 pb-10 md:pt-0 md:pb-0"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-transparent to-purple-900/10 animate-pulse-slow"></div>

      {/* Floating Tech Icons */}
      <FloatingTechIcons />

      {/* Geometric shapes in background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 md:top-20 md:left-20 md:w-40 md:h-40 bg-orange-500 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 md:bottom-20 md:right-20 md:w-32 md:h-32 bg-indigo-500 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 md:w-24 md:h-24 bg-purple-500 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Section: Details with animations */}
          <motion.div
            className="lg:w-1/2 flex flex-col order-2 lg:order-1 text-center lg:text-left"
            variants={itemVariants}
          >
            <motion.h5
              className="text-orange-400 text-lg md:text-xl font-medium mb-2"
              variants={itemVariants}
            >
              Hello, I'm
            </motion.h5>
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent"
              variants={itemVariants}
            >
              Tribuwan Kumar
            </motion.h1>
            <motion.div
              className="h-8 overflow-hidden mb-4"
              variants={itemVariants}
            >
              <div className="typing-effect">
                <h5 className="text-lg md:text-xl lg:text-2xl text-gray-300 font-medium">
                  MERN STACK Developer
                </h5>
              </div>
            </motion.div>
            <motion.p
              className="text-gray-300 mb-6 md:mb-8 text-base md:text-lg leading-relaxed max-w-md mx-auto lg:mx-0"
              variants={itemVariants}
            >
              I create immersive web experiences using modern technologies and
              innovative design principles. Passionate about clean code and
              user-centered interfaces.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6 md:mb-8"
              variants={itemVariants}
            >
              <CTA />
            </motion.div>

            {/* Progress Timeline - Hidden on mobile, shown on desktop */}
            <div className="hidden md:block">
              <motion.div variants={itemVariants}>
                <ProgressTimeline />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Section: Profile Image */}
          <motion.div
            className="lg:w-1/2 flex flex-col items-center order-1 lg:order-2 mb-8 lg:mb-0"
            variants={itemVariants}
          >
            {/* Profile Image Container with Glow Effect */}
            <motion.div
              className="relative mb-6 md:mb-8"
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              whileHover={{ scale: 1.05, rotate: 5 }}
            >
              <div className="absolute inset-0 bg-orange-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <img
                src={me}
                alt="Tribuwan Kumar"
                className="w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full object-cover shadow-2xl border-4 border-orange-500/50 relative z-10"
              />

              {/* Animated Rings around profile */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-orange-400/30"
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.2, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-orange-400/20"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              />
            </motion.div>

            {/* Enhanced Floating Badges with hover effects */}
            <motion.div
              className="flex flex-wrap justify-center gap-2 md:gap-3"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[
                { name: "React", color: "bg-blue-500/20", text: "text-blue-300", border: "border-blue-500/50" },
                { name: "Three.js", color: "bg-purple-500/20", text: "text-purple-300", border: "border-purple-500/50" },
                { name: "Node.js", color: "bg-green-500/20", text: "text-green-300", border: "border-green-500/50" },
                { name: "MongoDB", color: "bg-emerald-500/20", text: "text-emerald-300", border: "border-emerald-500/50" },
                { name: "Express", color: "bg-gray-500/20", text: "text-gray-300", border: "border-gray-500/50" },
                { name: "Tailwind", color: "bg-cyan-500/20", text: "text-cyan-300", border: "border-cyan-500/50" },
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  className={`backdrop-blur-md rounded-lg px-3 py-1 md:px-4 md:py-2 border ${tech.color} ${tech.text} ${tech.border} font-semibold text-xs md:text-sm shadow-lg`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                  variants={badgeVariants}
                  whileHover="hover"
                >
                  {tech.name}
                </motion.div>
              ))}
            </motion.div>

            {/* Progress Timeline - Shown on mobile, hidden on desktop */}
            <div className="md:hidden mt-6 w-full">
              <motion.div variants={itemVariants}>
                <ProgressTimeline />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;