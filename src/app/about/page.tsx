"use client"


import React from "react";
import { FaCode, FaPalette, FaObjectUngroup } from "react-icons/fa"; // Icons for each role
import "../stylying/about.css"

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img
            src="/yung.webp"
            loading="lazy" // Optimize image loading
          />
        </div>

        <div className="about-content">
          <h2 className="about-title">About Me</h2>
          <div className="about-roles">
            <div className="about-role">
              <FaCode size={30} color="#00bfff" /> {/* Icon for Web Developer */}
              <h3 className="role-title">Web Developer</h3>
              <p className="role-description">
                I’m a Web Developer with expertise in creating responsive and efficient web applications. I focus on delivering seamless user experiences through clean and scalable code.
              </p>
            </div>

            <div className="about-role">
              <FaPalette size={30} color="#00bfff" /> {/* Icon for Graphic Designer */}
              <h3 className="role-title">Graphic Designer</h3>
              <p className="role-description">
                I’m a Graphic Designer focused on creating stunning visuals that elevate brands. I bring ideas to life through creative design.
              </p>
            </div>

            <div className="about-role">
              <FaObjectUngroup size={30} color="#00bfff" /> {/* Icon for UI Designer */}
              <h3 className="role-title">UI Designer</h3>
              <p className="role-description">
                I have designed multiple landing pages and created design systems as well.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
