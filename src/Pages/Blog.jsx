import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Style/Blog.css";
import blogImg from "../assets/blog.png";

function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="blogPage">
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
                <li>Node.js - Server-side runtime</li>
                <li>Express - Web application framework</li>
                <li>MongoDB - NoSQL database for content storage</li>
                <li>JWT - Authentication and session management</li>
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
            I developed this blog as a personal project to practice full-stack
            development and have a platform to share my thoughts. I handled
            everything from backend API design and database modeling to frontend
            implementation and deployment.
          </p>

          <button className="blog-repo-btn">
            <a
              href="https://niloos-blog.netlify.app/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit the Blog
            </a>
          </button>
          <button className="blog-repo-btn">
            <a
              href="https://github.com/niloofar-shahsavar/NiloosBlog"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Blog;

