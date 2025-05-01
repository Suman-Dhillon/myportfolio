"use client";
import React from "react";
import "./Skills.css";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiOracle,
  SiGit,
  SiFigma,
  SiDocker
} from "react-icons/si";

const Skills = () => {
  const techStack = {
    frontend: [
      { name: "JavaScript", Icon: SiJavascript, acronym: "JS", color: "#F7DF1E" },
      { name: "TypeScript", Icon: SiTypescript, acronym: "TS", color: "#3178C6" },
      { name: "React", Icon: SiReact, acronym: "React", color: "#61DAFB" }
    ],
    frontendTools: [
      { name: "Next.js", Icon: SiNextdotjs, acronym: "Next.Js", color: "#000000" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, acronym: "Tailwind CSS", color: "#38B2AC" },
      { name: "Bootstrap", Icon: SiBootstrap, acronym: "Bootstrap", color: "#7952B3" }
    ],
    backend: [
      { name: "Node.js", Icon: SiNodedotjs, acronym: "Node.Js", color: "#339933" },
      { name: "NestJS", Icon: SiNestjs, acronym: "Nest.Js", color: "#E0234E" },
      { name: "Express", Icon: SiExpress, acronym: "Express.Js", color: "#000000" }
    ],
    database: [
      { name: "MySQL", Icon: SiMysql, acronym: "MySQL", color: "#4479A1" },
      { name: "MongoDB", Icon: SiMongodb, acronym: "MongoDB", color: "#47A248" },
      { name: "Oracle", Icon: SiOracle, acronym: "Oracle", color: "#F80000" }
    ],
    tools: [
      { name: "Git", Icon: SiGit, acronym: "Git", color: "#F05032" },
      { name: "Figma", Icon: SiFigma, acronym: "Figma", color: "#F24E1E" },
      { name: "Docker", Icon: SiDocker, acronym: "Docker", color: "#2496ED" }
    ]  
  };

  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <h1 className="section-title">MY STACK</h1>
        
        <div className="stack-grid">
          {/* Frontend Column */}
          <div className="stack-category">
            <h2 className="category-title">FRONTEND</h2>
            <div className="tech-items">
              {techStack.frontend.map((tech, index) => (
                <TechItem key={index} tech={tech} />
              ))}
            </div>
          </div>
          
          {/* Frontend Tools Column */}
          <div className="stack-category">
            <h2 className="category-title">&nbsp;</h2>
            <div className="tech-items">
              {techStack.frontendTools.map((tech, index) => (
                <TechItem key={index} tech={tech} />
              ))}
            </div>
          </div>
          
          {/* Backend Column */}
          <div className="stack-category">
            <h2 className="category-title">BACKEND</h2>
            <div className="tech-items">
              {techStack.backend.map((tech, index) => (
                <TechItem key={index} tech={tech} />
              ))}
            </div>
          </div>
          
          {/* Database Column */}
          <div className="stack-category">
            <h2 className="category-title">DATABASE</h2>
            <div className="tech-items">
              {techStack.database.map((tech, index) => (
                <TechItem key={index} tech={tech} />
              ))}
            </div>
          </div>

          {/* Tools Column */}
          <div className="stack-category">
            <h2 className="category-title">TOOLS</h2>
            <div className="tech-items">
              {techStack.tools.map((tech, index) => (
                <TechItem key={index} tech={tech} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TechItem = ({ tech }) => {
  const { Icon, name, acronym, color } = tech;
  return (
    <div className="tech-item">
      <div className="tech-logo" style={{ color }}>
        <Icon size={24} />
      </div>
      <div className="tech-info">
        <span className="tech-acronym">{acronym}</span>
        <span className="tech-fullname">{name}</span>
      </div>
    </div>
  );
};

export default Skills;