import React, { useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import "../Style/Navbar.css";
import "../Style/LandingPage.css";
import cvImage from "../assets/CV.png";
import cvPdf from "../assets/CV.pdf";
import Subjectc from "../assets/Hero.jpeg";
import project1 from "../assets/luxbite-landing.jpg";
import RandomStuff from "../assets/randomstuff-landing.png";
import LinkdInIcon from "../assets/Icon-linkedin.svg";
import EmailIcon from "../assets/Icon-mail.svg";
import PhoneIcon from "../assets/Icon-phone.svg";
import arrowIcon from "../assets/Arrow.svg";
import arrowUp from "../assets/arrow-up.svg";
import blog from "../assets/Portfolio-landing.png";
import InterAction from "../assets/InterAction.png";
import Foooterdesign from "../assets/footer.svg";
import GitHubIcon from "../assets/GitHub-icon.svg";
import "../Style/Footer.css";
import Footer from "../components/Footer";

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
        <div className="hero-text">
          <h1 className="firstTitle">Hi there! I’m Niloo</h1>
          <p>(Also Niloofar)</p>
          <br />
          <h1 className="secondTitle">
            I am a junior UX/UI Designer & Frontend Developer
          </h1>
          <h3 className="thirdTitle">
            {" "}
            As a designer and developer, I understand that the perfect <br />{" "}
            user interface should look good and work even better
          </h3>
        </div>
        <div>
          {" "}
          <img className="hero-image" src={Subjectc} />{" "}
        </div>
        <br />
        <br />
        <br />
        <div>
          <img className="arrowIcon" src={arrowIcon} alt="Arrow Icon" />
        </div>
        <br />
        <br />
        <h2>Projects</h2>
      </div>
      <section id="section-work" className="section-projects">
        <div className="luxbite-project">
          <RouterLink to="/luxbite-project">
            <img className="luxbite-img" src={project1} />
          </RouterLink>{" "}
          <RouterLink to="/luxbite-project" className="luxbite-title">
            <p>LuxeBite</p>
          </RouterLink>
        </div>
        <div className="random-stuff-project">
          <RouterLink to="/randomStuff">
            {" "}
            <img className="random-stuff-img" src={RandomStuff} />
          </RouterLink>
          <RouterLink to="/randomStuff" className="random-stuff-title">
            <p>Random Stuff</p>
          </RouterLink>
        </div>

        <div className="myBlog-project">
          <RouterLink to="/project3">
            {" "}
            <img className="myBlog-img" src={blog} />
          </RouterLink>
          <RouterLink to="/project3" className="myBlog-title">
            <p>My Portfolio</p>
          </RouterLink>
        </div>

        <div className="interAction-project">
          <RouterLink to="/interaction">
            {" "}
            <img className="interAction-img" src={InterAction} />
          </RouterLink>
          <RouterLink to="/interaction" className="interAction-title">
            <p>InterAction</p>
          </RouterLink>
        </div>
      </section>
      <div className="arrowIconSeparator">
        <img className="arrowIconMid" src={arrowIcon} alt="Arrow Icon" />
      </div>
      <section id="section-about" className="section-about">
        <div className="aboutme-landingPage">
          <div className="aboutme-header">
            <h2>About me</h2>
          </div>
          <p>
            I’m Niloo, a UX/UI designer based in Stockholm, Sweden. Originally
            from Iran, I’m often described by friends as a kind, reliable, and
            hardworking team player. My passion lies in human-computer
            interaction, UX, and human-centered design. I have a strong ability
            to quickly absorb new information and am constantly seeking to
            challenge myself by learning and growing. I’m committed to
            continuously improving my technical skills and knowledge through
            workshops and seminars, viewing mistakes as valuable learning
            opportunities. I’m currently open to internships, as well as
            part-time and full-time junior positions in the UX/UI design field.
          </p>
          <RouterLink to="/about" className="about">
            more
          </RouterLink>
        </div>
      </section>
      <div className="arrowIconSeparator">
        <img className="arrowIcon" src={arrowIcon} alt="Arrow Icon" />
      </div>
      <section id="section-cv" className="section-cv">
        <div className="cv-div">
          <div className="cv-border-div">
            <h2>CV</h2>
              <a href={cvPdf} target="_blank">
                Click to view
              </a>
            <a href={cvPdf} target="_blank">
              <img className="cv-img" src={cvImage} alt="CV" />
            </a>
          </div>
        </div>
      </section>
     </div>
  );
};

export default LandingPage;
