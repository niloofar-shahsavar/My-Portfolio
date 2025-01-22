import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Style/WIP.css";

function Project3() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Project3">
      My portfolio is a work in progress. Check back soon for updates!
    </div>
  );
}

export default Project3;
