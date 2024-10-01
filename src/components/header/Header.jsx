import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/ME (2).jpeg";
import HeaderSocial from "./HeaderSocial";
const Header = () => {
  return (
    <header id="home">
      <div
        className="container header__container"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div className="headerContent">
          <h5>Hello I'm</h5>
          <h1>Tribuwan Kumar</h1>
          <h5 className="text-light BLD">MERN STACK developer, YouTuber</h5>
          <span className="exp">
            <li>
              Work experience:- Worked at "Headway Vision" (Aug(22) - jan(24))
            </li>
            <li>working at varad digital marketing (march(24)- current)</li>
          </span>
        </div>

        <div className="me">
          <img
            src={ME}
            alt="ME"
            className="meimg"
            // style={{ height: "18rem", width: "17rem" }}
          />
        </div>

        <HeaderSocial />
        <a href="#contact-us" className="scrol__down">
          Scrol Down
        </a>
      </div>
      <CTA />
    </header>
  );
};

export default Header;
