import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Style/RandomStuff.css";

function RandomStuff() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    
   <div  className="randomStuffPage">
    <div className="randomStuff">
      <h1 className="random-first-title">Random Stuff</h1>
      <p>
        Random Stuff was a school project that I worked on with four of my
        classmates. We started the project with sketches, wireframes, and
        prototypes, and divided the coding tasks among us. <br /><br />I was responsible for
        part of the shopping flow, as well as pagination and product filtering,
        which helped us achieve the highest grade for the course.
      </p>
      <button className="VisitSite">
        <a href="https://random-stuff-webshop.netlify.app/" target="_blank">
          Visit the website
        </a>
      </button>
    </div></div>
  );
}

export default RandomStuff;
