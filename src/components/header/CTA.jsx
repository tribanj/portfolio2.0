import React from "react";
import CV from "../../assets/cv.pdf";

const CTA = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-6">
      <a
        href={CV}
        download
        className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-indigo-900 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-indigo-500"
      >
        <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500"></span>
        <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out -rotate-45 -translate-x-56 -translate-y-24 bg-yellow-100 opacity-100 group-hover:-translate-x-56"></span>
        <span className="relative w-full text-center font-bold flex items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download CV
        </span>
      </a>
      
      <a
        href="#contact-us"
        className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-indigo-100 transition duration-300 ease-out rounded-full shadow-md group hover:ring-1 hover:ring-indigo-300"
      >
        <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-indigo-600 to-indigo-700"></span>
        <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out -rotate-45 -translate-x-56 -translate-y-24 bg-indigo-500 opacity-70 group-hover:-translate-x-56"></span>
        <span className="relative w-full text-center font-bold flex items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Let's Talk
        </span>
      </a>
      <a
        href="/social-media-marketing-work"
        className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-indigo-100 transition duration-300 ease-out rounded-full shadow-md group hover:ring-1 hover:ring-indigo-300"
      >
        <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-indigo-600 to-indigo-700"></span>
        <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out -rotate-45 -translate-x-56 -translate-y-24 bg-indigo-500 opacity-70 group-hover:-translate-x-56"></span>
        <span className="relative w-full text-center font-bold flex items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Chec My SMM work
        </span>
      </a>
    </div>
  );
};

export default CTA;