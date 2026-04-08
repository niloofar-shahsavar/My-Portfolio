import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Style/Survii.css";
import surviiImg from "../assets/Survii.png";

function Survii() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="surviiPage">
      <div className="survii">
        <h1 className="survii-first-title">Survii</h1>
        <p className="survii-subtitle">AI-Powered Survey Application</p>

        <img
          src={surviiImg}
          alt="Survii - AI Survey Application"
          className="survii-hero-img"
        />

        <div className="survii-content">
          <h2>Overview</h2>
          <p>
            Survii is an intelligent survey application that leverages AI to
            create, manage, and analyze surveys efficiently. Built with a modern
            tech stack combining FastAPI on the backend and React on the
            frontend, it provides a seamless experience for both survey creators
            and respondents.
          </p>

          <h2>Tech Stack</h2>
          <div className="tech-stack">
            <div className="tech-category">
              <h3>Backend</h3>
              <ul>
                <li>FastAPI - High-performance Python web framework</li>
                <li>Python - Core backend logic and AI integration</li>
                <li>AI/ML models for intelligent survey analysis</li>
              </ul>
            </div>
            <div className="tech-category">
              <h3>Frontend</h3>
              <ul>
                <li>React - Modern UI library</li>
                <li>Responsive design for all devices</li>
                <li>Interactive survey components</li>
              </ul>
            </div>
          </div>

          <h2>Key Features</h2>
          <ul className="features-list">
            <li>AI-assisted survey question generation</li>
            <li>Smart response analysis and insights</li>
            <li>Real-time survey response tracking</li>
            <li>Intuitive survey builder interface</li>
            <li>Data visualization for survey results</li>
            <li>Export capabilities for survey data</li>
          </ul>

          <h2>My Role</h2>
          <p>
            I developed this project as a full-stack application, handling both
            the FastAPI backend with AI integration and the React frontend. This
            included designing the API architecture, implementing the AI-powered
            features, and creating a user-friendly interface for survey
            management.
          </p>

          <div className="blog-links">
            <a
              href="https://survey-app-niloofar-shahsavars-projects.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="survii-link"
            >
              View live project
              <span className="link-arrow">→</span>
            </a>

            <a
              href="https://github.com/niloofar-shahsavar/survey-app/tree/dev"
              target="_blank"
              rel="noopener noreferrer"
              className="survii-link"
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

export default Survii;
