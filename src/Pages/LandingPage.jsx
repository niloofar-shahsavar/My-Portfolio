import React, { useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import "../Style/Navbar.css";
import "../Style/LandingPage.css";
import cvImage from "../assets/CV_Niloo.jpg";
import cvPdf from "../assets/CV_Niloo.pdf";
import Subjectc from "../assets/Hero2.jpeg";
import project1 from "../assets/luxbite-landing.jpg";
import RandomStuff from "../assets/randomstuff-landing.png";
import arrowIcon from "../assets/Arrow.svg";
import blog from "../assets/Portfolio-landing.png";
import InterAction from "../assets/InterAction.png";
import HPappen from "../assets/Coming-soon.png";
import Edaider from "../assets/Edaider-logo.jpg";
import "../Style/Footer.css";
import blog2 from "../assets/blog.png"

const LandingPage = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const smoothScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="LandingPage">
      <div className="hero-section" id="hero">
        <div className="hero-text-landing">
          <h1 className="firstTitle">Hi there! I’m Niloo</h1>
          <p>(Also Niloofar)</p>
          <br />
          <h1 className="secondTitle">A junior AI Developer</h1>
          <h3 className="thirdTitle">
            {" "}
            Design-driven AI developer working with SQL and data-driven systems,
            <br /> combining backend AI development with thoughtful frontend
            experiences.
          </h3>
        </div>
        <div>
          {" "}
          <img
            className="hero-image"
            src={Subjectc}
            alt="Portrait of Niloofar Shahsavar, UX/UI designer"
          />{" "}
        </div>

        <br />
        <br />
        <br />
        <div>
          <img
            className="arrowIcon"
            src={arrowIcon}
            alt=" "
            aria-hidden="true"
          />
        </div>
        <br />
        <br />
        <h3 className="common-title">Projects</h3>
      </div>
      <section id="section-work" className="section-projects">
        <div className="random-stuff-project">
          <RouterLink to="/blog">
            {" "}
            <img
              className="random-stuff-img"
              src={blog2}
              alt="RandomStuff project - UX/UI design case study"
            />
          </RouterLink>
          <RouterLink to="/randomStuff" className="random-stuff-title">
            <p>Blog</p>
          </RouterLink>
        </div>
        <div className="random-stuff-project">
          <RouterLink to="/randomStuff">
            {" "}
            <img
              className="random-stuff-img"
              src={RandomStuff}
              alt="RandomStuff project - UX/UI design case study"
            />
          </RouterLink>
          <RouterLink to="/randomStuff" className="random-stuff-title">
            <p>Random Stuff</p>
          </RouterLink>
        </div>

        <div className="myBlog-project">
          <RouterLink to="/project3">
            {" "}
            <img
              className="myBlog-img"
              src={blog}
              alt="My portfolio project - UX/UI design case study"
            />
          </RouterLink>
          <RouterLink to="/project3" className="myBlog-title">
            <p>My Portfolio</p>
          </RouterLink>
        </div>
        <div className="luxbite-project">
          <RouterLink to="/luxbite-project">
            <img
              className="luxbite-img-landing"
              src={project1}
              alt="LuxeBite project - UX/UI design case study"
            />
          </RouterLink>{" "}
          <RouterLink to="/luxbite-project" className="luxbite-title">
            <p>LuxeBite</p>
          </RouterLink>
        </div>
        <div className="interAction-project">
          <RouterLink to="/interaction">
            {" "}
            <img
              className="interAction-img"
              src={InterAction}
              alt="InterAction project - UX/UI design case study"
            />
          </RouterLink>
          <RouterLink to="/interaction" className="interAction-title">
            <p>InterAction</p>
          </RouterLink>
        </div>

        <div className="HP-appen-project">
          <RouterLink to="/HPAppen">
            {" "}
            <img
              className="HP-appen-img"
              src={HPappen}
              alt="HP-appen Project - UX/UI design case study"
            />
          </RouterLink>
          <RouterLink to="/HPAppen" className="HP-appen-title">
            <p>HP-appen</p>
          </RouterLink>
        </div>
        <div className="Edaider-project">
          <RouterLink to="/Edaider">
            {" "}
            <img
              className="Edaider-logo"
              src={Edaider}
              alt="Edaider Project - UX/UI design case study"
            />
          </RouterLink>
          <RouterLink to="/Edaider" className="Edaider-title">
            <p>EdAider</p>
          </RouterLink>
        </div>
      </section>
      <div className="arrowIconSeparator">
        <img
          className="arrowIconMid"
          src={arrowIcon}
          alt=" "
          aria-hidden="true"
        />
      </div>
      <section id="section-about" className="section-about">
        <div className="aboutme-landingPage">
          <div className="aboutme-header">
            <h3 className="common-title">About me</h3>
          </div>
          <p>
            I’m Niloo, a developer based in Stockholm with a strong interest in
            data-driven and design-aware software development. I enjoy building
            structured solutions and understanding how systems behave in
            real-world use. I learn quickly, adapt easily to new technologies,
            and actively develop my skills through hands-on projects and
            technical studies. I value clear logic, thoughtful analysis, and
            practical problem-solving, and I see mistakes as an essential part
            of learning. I’m currently open to internships, as well as part-time
            and full-time junior developer roles.
          </p>
          <RouterLink to="/about" className="about">
            more
          </RouterLink>
        </div>
      </section>
      <div className="arrowIconSeparator">
        <img className="arrowIcon" src={arrowIcon} alt=" " aria-hidden="true" />
      </div>
      <section id="section-cv" className="section-cv">
        <div className="cv-div">
          <div className="cv-border-div">
            <h3 className="common-title">CV</h3>
            <a href={cvPdf} target="_blank" rel="noopener noreferrer">
              Click to view CV
            </a>
            <a href={cvPdf} target="_blank" rel="noopener noreferrer">
              <img
                className="cv-img"
                src={cvImage}
                alt="Niloofar Shahsavar's CV"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
