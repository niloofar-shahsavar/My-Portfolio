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
        <div className="hero-text"><h1>Hello & Welcome!</h1>
        As a junior UX/UI designer and a front-end developer, there are many things to learn, so be patient with me as I grow. 
      </div></div>
      <div>
        <AnimationComponent />{" "}
      </div>
    </div>
  );
}

export default About;
