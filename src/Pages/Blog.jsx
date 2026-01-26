import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Style/RandomStuff.css";

function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="randomStuffPage">
      <div className="randomStuff">
        <h1 className="random-first-title">Blog</h1>
        <p>My blog</p>
        <p>
          <button className="VisitSite">
            <a href="https://niloos-blog.netlify.app/login" target="_blank">
              Visit my blog
            </a>
          </button>
        </p>
      </div>
    </div>
  );
}

export default Blog;
