import React, { useEffect } from "react";
import { Element } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import "../Style/Navbar.css";
import "../Style/LandingPage.css";
import cvImage from "../assets/CV.jpg";
import Subjectc from "../assets/Subjectc.png";
import project1 from "../assets/luxbite.png";

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
      <h1 className="firstTitle">Hello! My name is Niloo</h1>

      <h2 className="secondTitle">
        I am a UX/UI designer & a Frontend Developer
      </h2>
      <div className="landingPage-photo">
        {" "}
        <img className="photo1" src={Subjectc} />{" "}
      </div>
      <section id="section-work" className="section">
        <div className="luxbite-project">
          <h2>
            <RouterLink to="/luxbite-project">
              <img className="luxbite-img" src={project1} />
            </RouterLink>
          </h2>{" "}
          <RouterLink to="/luxbite-project">
            <p>Luxbite Project</p>
          </RouterLink>
        </div>
        <h2>
          <RouterLink to="/project2">project 2</RouterLink>
        </h2>
        <p>Innehåll för project 2</p>
        <h2>
          <RouterLink to="/project3">project 3</RouterLink>
        </h2>
        <p>Innehåll för Project 3</p>
        <h2>
          <RouterLink to="/project4">project 4</RouterLink>
        </h2>
        <p>Innehåll för Project 4</p>
      </section>
      <section id="section-about" className="section-about">
        <h2>Short about me</h2>
        <div className="aboutMe"><p>
        Hi! I’m Niloo

I’m a UX/UI designer based in Stockholm, Sweden. I’m originally from Iran and my friends describe me as a kind, reliable and hardworking team player. I am passionate about interaction, UX, and human-centered design. 

I am a person who can absorb information and knowledge quickly and I look to challenge myself by learning, growing, and improving each day my technical skills and knowledge through workshops and seminars. I see mistakes as opportunities to learn and grown from.


I am open to internships as well as part-time and full-time junior positions in the UX/UI design field. 
 
        </p></div>
      </section>
      <section id="section-cv" className="section-cv">
        <h2>CV</h2>
        <img className="cv-img" src={cvImage} alt="CV" />
      </section>
     <div className="contact"><section id="section-contact" className="section-contact">
        <h2>You can reach me by:</h2>
        <p>Email: shahsavar.niloofar@gmail.com </p>
          <p>Telephone nummber: +4679-333-7240 </p>
          <p>Linkdin</p>
      </section></div> 
    </div>
  );
};

export default LandingPage;
