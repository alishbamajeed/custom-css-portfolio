"use client";
import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub } from "react-icons/fa"; // Icons for skills
import { SiTailwindcss, SiTypescript, SiNextdotjs } from "react-icons/si"; // Additional icons for TailwindCSS, TypeScript, Next.js
import "../stylying/skill.css"

const Skill = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="skills-list">
          {/* Skill 1: HTML */}
          <div className="skill-item">
            <FaHtml5 size={50} color="#E44D26" />
            <h3>HTML5</h3>
            <div className="progress-bar">
              <div className="progress" style={{ width: "90%" }}></div>
            </div>
          </div>

          {/* Skill 2: CSS */}
          <div className="skill-item">
            <FaCss3Alt size={50} color="#2965f1" />
            <h3>CSS3</h3>
            <div className="progress-bar">
              <div className="progress" style={{ width: "85%" }}></div>
            </div>
          </div>

          {/* Skill 3: JavaScript */}
          <div className="skill-item">
            <FaJs size={50} color="#f7df1e" />
            <h3>JavaScript</h3>
            <div className="progress-bar">
              <div className="progress" style={{ width: "80%" }}></div>
            </div>
          </div>

          {/* Skill 4: React */}
          <div className="skill-item">
            <FaReact size={50} color="#61dafb" />
            <h3>React.js</h3>
            <div className="progress-bar">
              <div className="progress" style={{ width: "90%" }}></div>
            </div>
          </div>

          {/* Skill 5: Node.js */}
          <div className="skill-item">
            <FaNodeJs size={50} color="#8CC84B" />
            <h3>Node.js</h3>
            <div className="progress-bar">
              <div className="progress" style={{ width: "75%" }}></div>
            </div>
          </div>

          {/* Skill 6: Tailwind CSS */}
          <div className="skill-item">
            <SiTailwindcss size={50} color="#38BDF8" />
            <h3>Tailwind CSS</h3>
            <div className="progress-bar">
              <div className="progress" style={{ width: "80%" }}></div>
            </div>
          </div>

          {/* Skill 7: TypeScript */}
          <div className="skill-item">
            <SiTypescript size={50} color="#3178C6" />
            <h3>TypeScript</h3>
            <div className="progress-bar">
              <div className="progress" style={{ width: "85%" }}></div>
            </div>
          </div>

          {/* Skill 8: Next.js */}
          <div className="skill-item">
            <SiNextdotjs size={50} color="#000000" />
            <h3>Next.js</h3>
            <div className="progress-bar">
              <div className="progress" style={{ width: "80%" }}></div>
            </div>
          </div>

          {/* Skill 9: GitHub */}
          <div className="skill-item">
            <FaGithub size={50} color="#211F1F" />
            <h3>GitHub</h3>
            <div className="progress-bar">
              <div className="progress" style={{ width: "70%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
