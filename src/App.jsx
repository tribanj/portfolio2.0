import React from "react";
import Contact from "./components/contacts/Contact";
import Experience from "./components/experience/Experience";
import Header from "./components/header/Header";
import Navbar from "./components/nav/Navbar";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
// import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";
import vid from "../src/assets/bg (1).mp4";
import Uxui from "./components/UXUI/Uxui";
import YouTubeChannel from "./components/youtube/Youtube";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Sw from "./components/portfolio/SwSlider/sw";
const App = () => {
  return (
    <>
      <div className="app">
        <Router>
          <Routes>
            <Route path="/uxui" element={<Uxui />} />
          </Routes>
        </Router>
        <video autoPlay muted loop id="background-video">
          <source src={vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Your website content goes here */}
        <Header />
        {/* <Uxui /> */}
        <Navbar />
        <About />
        <YouTubeChannel />
        <Experience />
        <Services />
        <Portfolio />
        {/* <Testimonials /> */}
        {/* <Sw /> */}
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
