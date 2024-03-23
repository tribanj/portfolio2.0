import React from "react";
import Contact from "./components/contacts/Contact";
import Experience from "./components/experience/Experience";
import Header from "./components/header/Header";
import Navbar from "./components/nav/Navbar";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";
import vid from "../src/assets/bg (1).mp4";
// import Sw from "./components/portfolio/SwSlider/sw";
const App = () => {
  // const vid = "https://youtu.be/kAPuM32sm58?si=vi9ZftPHtl7ngMTZ";
  return (
    <>
      <div className="app">
        <video autoPlay muted loop id="background-video">
          <source src={vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Your website content goes here */}
        <Header />
        <Navbar />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        {/* <Sw /> */}
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;


// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/tribanj/portfolio2.0.git
// git push -u origin main