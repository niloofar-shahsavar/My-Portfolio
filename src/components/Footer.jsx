import React from 'react'
import LinkdInIcon from "../assets/Icon-linkedin.svg";
import EmailIcon from "../assets/Icon-mail.svg";
import PhoneIcon from "../assets/Icon-phone.svg";
import GitHubIcon from "../assets/GitHub-icon.svg";
import arrowUp from "../assets/arrow-up.svg";
import Foooterdesign from "../assets/footer.svg";
import "../Style/Footer.css";

const Footer = () => {
  
    const smoothScrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth", 
        });
  
    };
    return (
    <div>
    <div className="Footer">
            <div>
            <div class="arrow-up-container">
            <button onClick={smoothScrollToTop} className="arrow-up-button">
                <img className="arrow-up" src={arrowUp} alt="Scroll to Top" />
                </button>
              <div>Scroll to top</div>
            </div>
          </div>
          <div className="footerdesign">
            <img src={Foooterdesign} alt="CV" />
          </div>
    
          <section id="section-contact" className="section-contact">
            <div>
              <div className="contact">
                <div className="divider"></div>
                <div className="contactText">
                  Let’s Collaborate
                </div>
                <div className="footer-contact">
                  <div className="contact-item">
                  <a href="https://www.linkedin.com/in/niloofar-shahsavar-997262137/" target="_blank">
                    <img className="icon" src={LinkdInIcon} alt="LinkedIn Icon" /> </a>
                    <a
                      href="https://www.linkedin.com/in/niloofar-shahsavar-997262137/"
                      target="_blank"
                    >
                      LinkedIn
                    </a>
                  </div>
                  <div className="contact-item">
                  <a href="https://github.com/niloofar-shahsavar" target="_blank">
                    <img className="icon" src={GitHubIcon} alt="GitHub Icon" />
                    </a>
                    <a href="https://github.com/niloofar-shahsavar" target="_blank">
                      GitHub
                    </a>
                  </div>
                  <div className="contact-item">
                  <a href="mailto:shahsavar.niloofar@gmail.com">
                    <img className="icon" src={EmailIcon} alt="Email Icon" />
                    </a> 
                    <span><a href="mailto:shahsavar.niloofar@gmail.com">shahsavar.niloofar@gmail.com</a></span>
                  </div>
                  <div className="contact-item">
                    <img className="icon" src={PhoneIcon} alt="Phone Icon" />
                    <span>+46(0)79 333 72 40</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="copyRight">
              <p>Copyright © Niloofar shahsavar 2024. All rights reserved.</p>
            </div>
          </section>
        </div>
    </div>
  )
}

export default Footer


