import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCalendar, FiBriefcase, FiAward, FiBook } from "react-icons/fi";

const CompactProgressTimeline = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(100);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const experiences = [
    {
      id: 1,
      title: "College Education",
      institution: "IKGPTU",
      duration: "2020 - 2024",
      description: "Bachelor's in Computer Science",
      icon: <FiBook className="text-sm" />,
      progress: 100,
      position: 0,
      color: "bg-blue-500",
      year: "2020"
    },
    {
      id: 2,
      title: "Web Developer Intern",
      institution: "Headway Vision",
      duration: "January 2023 - February 2024",
      description: "FrontEnd Developer",
      icon: <FiBriefcase className="text-sm" />,
      progress: 100, // Changed to 100% since this is completed
      position: 50, // Changed position to 50% for better spacing
      color: "bg-yellow-600", // Fixed: changed "bg-YEllow-500" to "bg-yellow-500"
      year: "2023"
    },
    {
      id: 3,
      title: "Current Position",
      institution: "Ambey Nexus",
      duration: "March 2024 - Present",
      description: "React Js Developer",
      icon: <FiBriefcase className="text-sm" />,
      progress: 40,
      position: 100,
      color: "bg-orange-500",
      year: "2024"
    }
  ];

  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="m-2">
        <div className="relative">
          {/* Main progress line - shorter */}
          <div className="absolute top-6 left-10 right-10 h-1 bg-gray-700 rounded-full z-0"></div>
          
          {/* Animated progress fill - shorter */}
          <motion.div
            className="absolute top-6 left-10 right-10 h-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full z-10"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeOut" }}
            style={{ originX: 0 }}
          />
          
          {/* Experience points - compact */}
          <div className="flex justify-between px-8 relative z-20">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="relative"
                onMouseEnter={() => setHoveredCard(exp.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Smaller circle with number */}
                <motion.div
                  className={`w-10 h-10 rounded-full border-2 border-white ${exp.color} flex items-center justify-center text-white font-bold text-sm shadow-md cursor-pointer relative z-20`}
                  whileHover={{ scale: 1.15 }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.2, type: "spring", stiffness: 200 }}
                >
                  {exp.id}
                </motion.div>
                
                {/* Year label */}
                <motion.div
                  className="absolute top-12 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                >
                  {exp.year}
                </motion.div>

                {/* Compact hover card */}
                <AnimatePresence>
                  {hoveredCard === exp.id && (
                    <motion.div
                      className="absolute top-14 left-1/2 transform -translate-x-1/2 w-56 bg-gray-800/95 backdrop-blur-sm rounded-lg p-4 border border-gray-600 shadow-lg z-30"
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-start mb-2">
                        <div className={`p-1 rounded-md ${exp.color} mr-2`}>
                          {exp.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-white text-sm">
                            {exp.title}
                          </h3>
                          <p className="text-gray-400 text-xs">
                            {exp.institution}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-xs text-gray-400 mb-2">
                        <FiCalendar className="mr-1" />
                        {exp.duration}
                      </div>
                      
                      <p className="text-gray-300 text-xs mb-2">
                        {exp.description}
                      </p>
                      
                      <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full ${exp.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={{ width: `${exp.progress}%` }}
                          transition={{ duration: 0.8, delay: 0.3 }}
                        />
                      </div>
                      <div className="text-xs text-gray-400 mt-1 text-right">
                        {exp.progress}%
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Current status indicator - smaller */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center bg-gray-800/50 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-600 text-xs">
            <div className="w-2 h-2 rounded-full bg-green-500 mr-1 animate-pulse"></div>
            <span className="text-green-400">Currently at Ambey Nexus</span>
          </div>
        </motion.div>
      </div>
  );
};

export default CompactProgressTimeline;