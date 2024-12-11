"use client";

import React from "react";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import "../app/styling/hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      {/* Content Section */}
      <div className="hero-content">
        <h1 className="hero-title">Hello, I'm Alishba</h1>
        <p className="hero-description">
          Exploring creativity through web development and design. Check out my
          latest projects and journey in tech!
        </p>
        <a
          href="https://github.com/alishbamajeed"
          className="hero-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore My Work
        </a>
        {/* Social Icons */}
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/alishba-majeed-5099b8310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my LinkedIn profile"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/alishbamajeed"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my GitHub profile"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.facebook.com/alishbah.rajput.12?mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my Facebook profile"
          >
            <FaFacebook />
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="hero-image">
        <Image
          src="/pic1.jpeg"
          alt="Portrait of Alishba"
          width={350}
          height={350}
          className="image-styling"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
