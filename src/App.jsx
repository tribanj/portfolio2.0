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
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
        <Route path="/uxui" element={<Uxui />} />
        <Route path="/*" element={<MainWebsite />} />
      </Routes>
    </Router>
  );
};

export default App;