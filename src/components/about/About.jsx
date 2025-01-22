import React from "react";
import "./About.css";
import ME from "../../assets/me1.png";
import { FaAward, FaYoutube } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { BsFolderCheck } from "react-icons/bs";
const About = () => {
  return (
    <section id="about">
      <h5>Get TO Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="ME" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about__card">
              <FaYoutube className="about_icon" />
              <h5>YouTube</h5>
              <small>22K+ Subscriber</small>
            </article>

            <article className="about__card">
              <BsFolderCheck className="about_icon" />
              <h5>Project </h5>
              <small>5+ Completed</small>
            </article>
          </div>
          <p>
            My name is Tribhuwan kumar. I am a skilled MERN Stack Developer with
            a passion for building dynamic, responsive web applications. My
            expertise lies in full-stack development, utilizing MongoDB,
            Express.js, React, and Node.js to create seamless user experiences
            and efficient, maintainable code. I excel at integrating front-end
            and back-end services, ensuring robust and scalable solutions.
            Dedicated to continuous learning and growth, I am committed to
            delivering high-quality projects that meet user needs and industry
            standards.
          </p>
          <a href="#contact-us" id="contact" className="btn btn-primary">
            {" "}
            Let's Talk{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
