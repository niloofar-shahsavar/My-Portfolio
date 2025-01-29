import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Style/WIP.css";

function Project3() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="portfolio-description">
        <p>
          I designed and built my website with React—it’s still under
          construction, but let’s pretend the ‘under construction’ sign is a
          trendy design choice!
        </p>
      </div>
      <div className="rotate-animation">
        <div className="background-mic">
          <div className="mic">
            <span className="mic-text">Under construction!</span>
            <i className="mic-icon"></i>
            <div className="mic-shadow"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project3;
