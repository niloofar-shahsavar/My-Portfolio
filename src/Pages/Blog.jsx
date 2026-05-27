import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Style/Blog.css";
import blogImg from "../assets/blog.png";
import SEO from "../components/SEO";

function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="blogPage">
      <SEO
        title="Blog Platform — Personal Project"
        description="A personal blog platform with user authentication, admin dashboard, and content management. Built with React for a clean, responsive reading experience."
        path="/blog"
      />
      <div className="blog">
        <h1 className="blog-first-title">Blog</h1>
        <p className="blog-subtitle">Personal Blog Platform with Authentication</p>

        <img
          src={blogImg}
          alt="Blog - Personal blogging platform"
          className="blog-hero-img"
        />

        <div className="blog-content">
          <h2>Overview</h2>
          <p>
            A personal blog platform built to share thoughts, experiences, and
            technical insights. The application features user authentication,
            allowing me to manage and publish content through a secure admin interface.
            Built with modern web technologies for a clean, responsive reading experience.
          </p>

          <h2>Tech Stack</h2>
          <div className="tech-stack">
            <div className="tech-category">
              <h3>Backend</h3>
              <ul>
                <li>***********************************</li>
                <li>***********************************</li>
                <li>***********************************</li>
                <li>***********************************</li>
              </ul>
            </div>
            <div className="tech-category">
              <h3>Frontend</h3>
              <ul>
                <li>React - Modern UI library</li>
                <li>CSS - Custom styling</li>
                <li>Responsive design for all devices</li>
              </ul>
            </div>
          </div>

          <h2>Key Features</h2>
          <ul className="features-list">
            <li>User authentication with secure login</li>
            <li>Admin dashboard for content management</li>
            <li>Create, edit, and delete blog posts</li>
            <li>Clean, readable typography and layout</li>
            <li>Responsive design for mobile and desktop</li>
            <li>Deployed on Netlify for fast delivery</li>
          </ul>

          <h2>My Role</h2>
          <p>
            ***********************************
          </p>

          <div className="blog-links">
            <a
              href="https://niloos-blog.netlify.app/login"
              target="_blank"
              rel="noopener noreferrer"
              className="blog-link"
            >
              View live project
              <span className="link-arrow">→</span>
            </a>
            <a
              href="https://github.com/niloofar-shahsavar/NiloosBlog"
              target="_blank"
              rel="noopener noreferrer"
              className="blog-link"
            >
              View on GitHub
              <span className="link-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;

