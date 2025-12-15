import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Style/RandomStuff.css";

function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    
   <div  className="randomStuffPage">
    <div className="randomStuff">
      <h1 className="random-first-title">Blog</h1>
      <p>
       My blog
      </p>
      <p>
        <a href="https://niloos-blog.netlify.app/login" target="_blank">
          Visit my blog
        </a>
      </p>
    </div></div>
  );
}

export default Blog;
