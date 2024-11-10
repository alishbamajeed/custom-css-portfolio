
"use client"

import React from 'react';
import Image from 'next/image';

import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import '../app/stylying/hero.css'

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Hello, I'm Alishba</h1>
        <p className="hero-description">
          Exploring creativity through web development and design. Check out my latest projects and journey in tech!
        </p>
        <a href="https://github.com/alishbamajeed" className="hero-button" target="_blank" rel="noopener noreferrer">
          Explore My Work
        </a>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/alishba-majeed-5099b8310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/alishbamajeed" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.facebook.com/alishbah.rajput.12?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
        </div>
      </div>
      <div className="hero-image">
        <Image src="/pic1.jpeg" alt="Alishba's portrait" width={350} height={350} className="image-styling" />
      </div>
    </section>
  );
};

export default Hero;
