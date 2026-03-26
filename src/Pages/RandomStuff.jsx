import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Style/RandomStuff.css";
import randomStuffImg from "../assets/randomstuff-landing.png";

function RandomStuff() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="randomStuffPage">
      <div className="randomStuff">
        <h1 className="random-first-title">Random Stuff</h1>
        <p className="random-subtitle">E-commerce Webshop with Full Shopping Flow</p>

        <img
          src={randomStuffImg}
          alt="Random Stuff - E-commerce webshop"
          className="random-hero-img"
        />

        <div className="random-content">
          <h2>Overview</h2>
          <p>
            Random Stuff is an e-commerce webshop built as a collaborative school project
            with four classmates. The project followed a complete design-to-development
            process, starting with sketches, wireframes, and prototypes before diving
            into implementation. Our team achieved the highest grade for the course
            through effective collaboration and attention to both UX and technical details.
          </p>

          <h2>Tech Stack</h2>
          <div className="tech-stack">
            <div className="tech-category">
              <h3>Frontend</h3>
              <ul>
                <li>React - Component-based UI development</li>
                <li>JavaScript - Core application logic</li>
                <li>CSS - Custom styling and responsive design</li>
                <li>React Router - Client-side navigation</li>
              </ul>
            </div>
            <div className="tech-category">
              <h3>Features & Tools</h3>
              <ul>
                <li>State management for cart functionality</li>
                <li>Netlify - Deployment and hosting</li>
                <li>Git - Version control and collaboration</li>
                <li>Figma - Design and prototyping</li>
              </ul>
            </div>
          </div>

          <h2>Key Features</h2>
          <ul className="features-list">
            <li>Complete shopping flow from browsing to checkout</li>
            <li>Product filtering and search functionality</li>
            <li>Pagination for product listings</li>
            <li>Shopping cart with quantity management</li>
            <li>Responsive design for all screen sizes</li>
            <li>Clean, intuitive user interface</li>
          </ul>

          <h2>My Role</h2>
          <p>
            I was responsible for implementing part of the shopping flow, including
            pagination and product filtering. I contributed to the design phase
            with wireframing and prototyping, and collaborated closely with teammates
            on code reviews and integration. This project strengthened my skills in
            React, state management, and working effectively in a team environment.
          </p>

          <div className="random-links">
            <a
              href="https://random-stuff-webshop.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="random-link"
            >
              Visit the Website
              <span className="link-arrow">→</span>
            </a>
            <a
              href="https://github.com/niloofar-shahsavar/random-stuff"
              target="_blank"
              rel="noopener noreferrer"
              className="random-link"
            >
              View on GitHub
              <span className="link-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RandomStuff;
