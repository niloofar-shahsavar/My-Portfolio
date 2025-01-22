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
        <h1>Hello</h1>
      </div>
      <div>
        <AnimationComponent />{" "}
      </div>
    </div>
  );
}

export default About;
