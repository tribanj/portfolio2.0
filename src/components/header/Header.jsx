import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocial from "./HeaderSocial";
import ME from "../../assets/maihi to hun.jpg";

const Header = () => {
  return (
    <header id="home" style={{ backgroundColor: "#000", color: "#FFA500" }}>
      <div
        className="container header__container"
        style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}
      >
        {/* Left Section: Details */}
        <div className="headerContent" style={{ maxWidth: "60%" }}>
          <h5 
            style={{ 
              color: "#FFA500", 
              fontSize: "2rem", 
              fontWeight: "bold", 
              animation: "revealText 2s ease-in-out"
            }}
          >
            Hello, I'm
          </h5>
          <h1 style={{ fontSize: "4rem", margin: "0.5rem 0", fontWeight: "900" }}>Tribuwan Kumar</h1>
          <h5 
            className="text-light BLD typing-effect" 
            style={{ 
              color: "#FFF", 
              marginBottom: "1rem", 
              fontSize: "1.5rem",
              fontWeight: "bolder"
            }}
          >
            MERN STACK Developer & YouTuber
          </h5>
          <ul className="exp" style={{ listStyleType: "none", padding: 0, color: "#FFA500", fontSize: "1.2rem", fontWeight: "bold" }}>
            <a href="https://www.ambeynexus.com" style={{color: "white"}}>Currently Ambey nexus (March 2024 - Present)</a>
          </ul>
        </div>

        {/* Right Section: Buttons and Image */}
        <div className="headerButtons" style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }}>
          <div style={{ position: "relative", marginBottom: "1rem" }}>
            <img
              src={ME}
              alt="Tribuwan Kumar"
              style={{ 
                width: "350px", 
                height: "350px", 
                borderRadius: "50%", 
                border: "3px solid #FFA500", 
                animation: "bounce 2s infinite ease-in-out" 
              }}
            />
          </div>
          <CTA />
        </div>
      </div>
    </header>
  );
};

export default Header;
