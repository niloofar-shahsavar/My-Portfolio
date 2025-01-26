import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Style/WIP.css";

function Project3() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
   <div> 
 
    <div className="rotate-animation"><div className="background-mic">
   
        <div className="mic">
        <span className="mic-text">Check back soon for updates!</span>
          <i className="mic-icon"></i>
          <div className="mic-shadow"></div>
        </div>
      </div>
      </div> 
    </div> 
  );
}

export default Project3;
