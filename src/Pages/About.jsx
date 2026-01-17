import { Link } from "react-router-dom";
import AnimationComponent from "../components/AnimationComponent";
import "../Style/About.css";
import React, { useEffect } from "react";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="about-me-div">
        <div className="hero-text">
          <h1> About</h1>
          <h2>Hi</h2>
          I’m Niloo, a developer based in Stockholm with a strong interest in
          data-driven and design-aware software development. I enjoy building
          structured solutions and understanding how systems behave in
          real-world use. I learn quickly, adapt easily to new technologies, and
          actively develop my skills through hands-on projects and technical
          studies. I value clear logic, thoughtful analysis, and practical
          problem-solving, and I see mistakes as an essential part of learning.
          I’m currently open to internships, as well as part-time and full-time
          junior developer roles. I’m a software developer with a focus on
          Python, SQL, and data-driven development, currently studying
          AI-focused software development at Nackademin in Stockholm. I have a
          background in UX/UI design, which gives me a strong foundation in
          user-centered thinking that I apply when building technical solutions.{" "}
          <br /> <br />
          My current studies cover backend development, databases, cloud
          fundamentals, and applied AI concepts. I work hands-on with Python and
          PostgreSQL, and I build data-driven applications with a clear
          structure and readable logic. <br />
          <br />
          I also use modern frontend technologies such as React, JavaScript,
          HTML, and CSS to design and validate complete application flows. I
          have practical experience with AWS fundamentals, including EC2
          provisioning, Elastic IPs, and SSH key management. I’m familiar with
          working in Linux environments, basic user and permission concepts, and
          introductory Bash scripting for simple automation tasks. <br />
          <br />
          My background in UX helps me bridge the gap between technical
          implementation and real user needs — from structuring data and APIs to
          designing interfaces that are understandable and usable. I’m
          particularly interested in backend systems, applied AI, and building
          products where data, logic, and user experience work together.
        </div>
      </div>
      <div>
        <AnimationComponent />{" "}
      </div>
    </div>
  );
}

export default About;
