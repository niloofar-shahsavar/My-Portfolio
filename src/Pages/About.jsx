import { Link } from "react-router-dom";
import AnimationComponent from "../components/AnimationComponent";
import "../Style/About.css";
import React, { useEffect } from "react";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="aboutPage">
      <div className="about-container">
        <h1 className="about-title">About Me</h1>

        <section className="about-intro">
          <h2>Hi, I'm Niloo</h2>
          <p>
I'm a developer based in Stockholm with a strong interest in data-driven and design-aware software development. Currently studying AI-focused software development at Nackademin, I combine my background in UX/UI design with technical skills to build solutions that are both functional and user-friendly.

<p> I also have a background in languages, having studied English and Persian, which has shaped my interest in communication, meaning, and how ideas are structured and understood. In many ways, that interest naturally connects to programming. Human languages and programming languages are both built on logic, patterns, structure, and interpretation — and I’ve always been drawn to understanding how they work.</p>


          </p>
          <p>
            I have also always enjoyed puzzles, mysteries, board games, and problem-solving. I’m especially interested in things that are not immediately obvious: patterns that need to be recognized, problems that need to be untangled, and systems that need to be understood before they can be improved. That is one of the reasons programming suits me so well. It combines analytical thinking with curiosity and turns complexity into something clear, logical, and useful.

<p>I enjoy building structured solutions and understanding how systems behave in real-world use. I learn quickly, adapt easily to new technologies, and value clear logic, thoughtful analysis, and practical problem-solving. I see mistakes as an essential part of learning.</p>
          </p>
        </section>

        <section className="about-skills">
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Backend & Data</h3>
              <ul>
                <li>Python</li>
                <li>SQL / PostgreSQL</li>
                <li>FastAPI</li>
                <li>RESTful APIs</li>
                <li>Data-driven development</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Frontend</h3>
              <ul>
                <li>React</li>
                <li>JavaScript (ES6+)</li>
                <li>HTML5 & CSS3</li>
                <li>Responsive Design</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Cloud & DevOps</h3>
              <ul>
                <li>AWS (EC2, Elastic IP)</li>
                <li>Linux environments</li>
                <li>Bash scripting</li>
                <li>Git version control</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Design & UX</h3>
              <ul>
                <li>Figma</li>
                <li>User Research</li>
                <li>Wireframing & Prototyping</li>
                <li>Usability Testing</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="about-background">
          <h2>Background</h2>
          <div className="background-content">
            <div className="background-item">
              <h3>Education</h3>
              <p>
                <strong>AI-focused Software Development</strong><br />
                Nackademin, Stockholm<br />
                Backend development, databases, cloud fundamentals, and applied AI concepts.
              </p>
            </div>
            <div className="background-item">
              <h3>UX/UI Design</h3>
              <p>
                My background in UX helps me bridge the gap between technical
                implementation and real user needs — from structuring data and APIs
                to designing interfaces that are understandable and usable.
              </p>
            </div>
          </div>
        </section>

        <section className="about-interests">
          <h2>What I'm Interested In</h2>
          <p>
            I'm particularly interested in backend systems, applied AI, and building
            products where data, logic, and user experience work together. I enjoy
            the challenge of creating solutions that are technically sound while
            remaining accessible and intuitive for users.
          </p>
        </section>

        <section className="about-looking">
          <h2>What I'm Looking For</h2>
          <p>
            I'm currently open to internships, as well as part-time and full-time
            junior developer roles. I'm eager to join a team where I can contribute,
            learn, and grow as a developer while working on meaningful projects.
          </p>
        </section>
      </div>

      <div>
        <AnimationComponent />
      </div>
    </div>
  );
}

export default About;
