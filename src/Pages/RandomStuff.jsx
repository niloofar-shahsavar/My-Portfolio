import React from "react";
import { Link } from "react-router-dom";
import "../Style/RandomStuff.css";

const RandomStuff = () => {
  return (
    <div className="randomStuff">
      <h1 className="random-first-title">Random Stuff</h1>
      <b>Project description:</b> Random Stuff was a school project that I
      worked on with four of my classmates. We started the project with
      sketches, wireframes, and prototypes, and divided the coding tasks among
      us. I was responsible for part of the shopping flow, as well as pagination
      and product filtering, which helped us achieve the highest grade for the
      course.
      <br />
      <br />
      <a href="https://random-stuff-webshop.netlify.app/" target="_blank">
        Visit our website
      </a>
    </div>
  );
};

export default RandomStuff;
