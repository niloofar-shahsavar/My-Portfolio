import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import "../Style/WIP.css";
import sign from "../assets/sign-pic.jpg";

function Project3() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
   setIsVisible((prev) => !prev);
  }; 

  return (
    <div>
      <div className="portfolio-description">
        <p>
          I designed and built my website with React—it’s still under
          construction, but let’s pretend the ‘under construction’ sign is a
          trendy design choice!
        </p>
        <div className="sign-pic-div">
          <img className="sign-pic" src={sign} alt="Under construction sign" />
          </div>
         <div className="animationButton-div"><button className="animation-button" onClick={toggleVisibility}> {isVisible ? "Hide Animation" : "Show Animation"}</button></div>
      </div>
      {isVisible && (
      <div className="rotate-animation">
        <div className="background-mic">
          <div className="mic">
            <span className="mic-text">Under construction!</span>
            <i className="mic-icon"></i>
            <div className="mic-shadow"></div>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}

export default Project3;
