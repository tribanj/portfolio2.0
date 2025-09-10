import React from "react";
import Contact from "./components/contacts/Contact";
import Experience from "./components/experience/Experience";
import Header from "./components/header/Header";
import Navbar from "./components/nav/Navbar";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer";
import Uxui from "./components/UXUI/Uxui";
import YouTubeChannel from "./components/youtube/Youtube";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SMMWork from "./components/socialmediamarketing/SMMWork";

const MainWebsite = () => {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <YouTubeChannel />
      <Contact />
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* UXUI page */}
        <Route path="/uxui" element={<Uxui />} />

        {/* Social Media Marketing Work page */}
        <Route path="/social-media-marketing-work" element={<SMMWork />} />

        {/* Default main website */}
        <Route path="/*" element={<MainWebsite />} />
      </Routes>
    </Router>
  );
};

export default App;
