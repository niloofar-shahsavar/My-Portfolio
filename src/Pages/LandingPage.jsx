import React, { useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import "../Style/Navbar.css";
import "../Style/LandingPage.css";
import cvImage from "../assets/CV.jpg";
import Subjectc from "../assets/Hero.jpeg";
import project1 from "../assets/luxbite.png";
import RandomStuff from "../assets/RandomStuff.png";
import LinkdInIcon from "../assets/Linkdin-icon.png";
import EmailIcon from "../assets/Email-icon.png";
import arrowIcon from "../assets/Arrow.png";
import blog from "../assets/MyPortfolio.png";
import fairy from "../assets/Fairy.png";

const LandingPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="LandingPage">
      <div className="hero-section">
        <div className="hero-text">
          <h1 className="firstTitle">Hello! My name is Niloo</h1>
          <h1 className="secondTitle">
            I am a junior UX/UI Designer & Frontend Developer
          </h1>
          <h3 className="thirdTitle">
            {" "}
            As a designer and developer, I understand that the perfect <br />{" "}
            user interface should look good and work even better.
          </h3>
        </div>
        <div className="landingPage-photo">
          {" "}
          <img className="my-photo" src={Subjectc} />{" "}
        </div>
        <img className="arrow-icon" src={arrowIcon} />
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

        <div className="fairyTailor-project">
          <RouterLink to="/project4">
            {" "}
            <img className="fairyTailor-img" src={fairy} />
          </RouterLink>
          <RouterLink to="/project4" className="fairyTailor-title">
            <p>Fairy Tailor App</p>
          </RouterLink>
        </div>
      </section>
      <section id="section-about" className="section-about">
        <div className="aboutMe">
          <h2>About me</h2>
          <p>
            Hi! I’m Niloo, a UX/UI designer based in Stockholm, Sweden. I’m
            originally from Iran and my friends describe me as a kind, reliable
            and hardworking team player. I am passionate about interaction, UX,
            and human-centered design. I am a person who can absorb information
            and knowledge quickly and I look to challenge myself by learning,
            growing, and continously improving each day my technical skills and
            knowledge through workshops and seminars. I see mistakes as
            opportunities to learn and grow from. I am open to internships as
            well as part-time and full-time junior positions in the UX/UI design
            field.
          </p>
          <RouterLink to="/about" className="about">
            More about me
          </RouterLink>
        </div>
      </section>
      <section id="section-cv" className="section-cv">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="cv-div">
          <div className="cv-border-div">
            <h2>CV</h2>
            <img className="cv-img" src={cvImage} alt="CV" />
          </div>{" "}
        </div>
      </section>
      <section id="section-contact" className="section-contact">
        <div className="contact">
          <h2>Do I have your attention? Hit me up :)</h2>
          <p>
            {" "}
            <div className="linkdin-div">
              <img className="linkdin-icon" src={LinkdInIcon} />
            </div>{" "}
            <a
              href="https://www.linkedin.com/in/niloofar-shahsavar-997262137/"
              target="_blank"
            >
              {" "}
              Niloofar Shahsavar{" "}
            </a>{" "}
          </p>
          <p>
            {" "}
            <div className="email-div">
              <img className="email-icon" src={EmailIcon} />
            </div>{" "}
            shahsavar.niloofar@gmail.com{" "}
          </p>
          <p> +46(0)79 333 72 40 </p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
