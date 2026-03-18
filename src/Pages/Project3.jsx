import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Style/Portfolio.css";
import portfolioImg from "../assets/Portfolio-landing.png";

function Project3() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="portfolioPage">
      <div className="portfolio">
        <h1 className="portfolio-first-title">My Portfolio</h1>
        <p className="portfolio-subtitle">Personal Portfolio Website Built with React</p>

        <img
          src={portfolioImg}
          alt="My Portfolio - Personal website"
          className="portfolio-hero-img"
        />

        <div className="portfolio-content">
          <h2>Overview</h2>
          <p>
            This portfolio website showcases my work as a developer and UX/UI designer.
            Built from scratch with React, it serves as both a professional portfolio
            and a learning project where I experiment with new techniques, animations,
            and design patterns. The site features responsive design, smooth navigation,
            and a clean aesthetic that reflects my design sensibilities.
          </p>

          <h2>Tech Stack</h2>
          <div className="tech-stack">
            <div className="tech-category">
              <h3>Frontend</h3>
              <ul>
                <li>React - Component-based architecture</li>
                <li>React Router - Client-side routing</li>
                <li>JavaScript (ES6+) - Modern JavaScript features</li>
                <li>CSS3 - Custom styling with animations</li>
              </ul>
            </div>
            <div className="tech-category">
              <h3>Tools & Deployment</h3>
              <ul>
                <li>Vite - Fast build tool and dev server</li>
                <li>Netlify - Continuous deployment</li>
                <li>Git - Version control</li>
                <li>Figma - Design mockups</li>
              </ul>
            </div>
          </div>

          <h2>Key Features</h2>
          <ul className="features-list">
            <li>Responsive design for mobile, tablet, and desktop</li>
            <li>Project filtering by category (Development/UX/UI)</li>
            <li>Smooth scroll navigation and animations</li>
            <li>PDF CV viewer integration</li>
            <li>Optimized image loading and performance</li>
            <li>Clean, accessible user interface</li>
          </ul>

          <h2>My Role</h2>
          <p>
            I designed and developed this portfolio entirely on my own, from initial
            concept and wireframing through to final implementation and deployment.
            This project allowed me to practice React development, explore CSS animations,
            and create a cohesive visual identity. I continue to iterate and improve
            the site as I learn new techniques.
          </p>

          <button className="portfolio-repo-btn">
            <a
              href="https://github.com/niloofar-shahsavar/My-Portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Project3;
