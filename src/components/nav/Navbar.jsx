import React, { useState, useEffect } from 'react';
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineCode
} from 'react-icons/ai';
import {
  BiBook,
  BiMessageSquareDetail,
  BiBriefcase
} from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#home');
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Hide navbar on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 200) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-gray-900/80 backdrop-blur-md rounded-full px-4 py-3 transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'}`}>
      <div className="flex items-center justify-center space-x-2 md:space-x-4">
        <a
          href="#home"
          onClick={() => setActiveNav('#home')}
          className={`p-3 rounded-full transition-all duration-300 flex flex-col items-center group ${activeNav === '#home' ? 'bg-indigo-600 text-white' : 'text-gray-300 hover:bg-gray-800'}`}
          title="Home"
        >
          <AiOutlineHome className="text-xl" />
          <span className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Home</span>
        </a>

        <a
          href="#about"
          onClick={() => setActiveNav('#about')}
          className={`p-3 rounded-full transition-all duration-300 flex flex-col items-center group ${activeNav === '#about' ? 'bg-indigo-600 text-white' : 'text-gray-300 hover:bg-gray-800'}`}
          title="About"
        >
          <AiOutlineUser className="text-xl" />
          <span className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">About</span>
        </a>

        <a
          href="#experience"
          onClick={() => setActiveNav('#experience')}
          className={`p-3 rounded-full transition-all duration-300 flex flex-col items-center group ${activeNav === '#experience' ? 'bg-indigo-600 text-white' : 'text-gray-300 hover:bg-gray-800'}`}
          title="Experience"
        >
          <BiBook className="text-xl" />
          <span className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Experience</span>
        </a>

        <a
          href="#portfolio"
          onClick={() => setActiveNav('#portfolio')}
          className={`p-3 rounded-full transition-all duration-300 flex flex-col items-center group ${activeNav === '#portfolio' ? 'bg-indigo-600 text-white' : 'text-gray-300 hover:bg-gray-800'}`}
          title="Portfolio"
        >
          <BiBriefcase className="text-xl" />
          <span className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Portfolio</span>
        </a>

        <a
          href="#services"
          onClick={() => setActiveNav('#services')}
          className={`p-3 rounded-full transition-all duration-300 flex flex-col items-center group ${activeNav === '#services' ? 'bg-indigo-600 text-white' : 'text-gray-300 hover:bg-gray-800'}`}
          title="Services"
        >
          <RiServiceLine className="text-xl" />
          <span className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Services</span>
        </a>

        <a
          href="#contact-us"
          onClick={() => setActiveNav('#contact-us')}
          className={`p-3 rounded-full transition-all duration-300 flex flex-col items-center group ${activeNav === '#contact-us' ? 'bg-indigo-600 text-white' : 'text-gray-300 hover:bg-gray-800'}`}
          title="Contact"
        >
          <BiMessageSquareDetail className="text-xl" />
          <span className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Contact</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;