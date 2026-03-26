import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Style/InterAction-project.css";
import InterActionVideo from "../assets/InterAction.mp4";

function InterAction() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="interActionPage">
      <div className="interAction-container">
        <h1 className="interAction-title">InterAction</h1>
        <p className="interAction-subtitle">Empowering Immigrant Women Through Digital Integration</p>

        <video
          className="interAction-hero-video"
          autoPlay
          loop
          muted
          playsInline
          aria-label="InterAction Project Prototype Video"
        >
          <source src={InterActionVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="interAction-content">
          <h2>Overview</h2>
          <p>
            InterAction is a mobile application designed to bridge the information gap
            faced by immigrant women in Sweden. By combining accessible information,
            social connectivity, and language support, the app empowers users to navigate
            Swedish society with confidence and build a sense of belonging.
          </p>

          <h2>Project Details</h2>
          <div className="project-meta">
            <div className="meta-item">
              <h3>Project Type</h3>
              <p>UX/UI Design, User Research</p>
            </div>
            <div className="meta-item">
              <h3>Role</h3>
              <p>UX/UI Designer & Researcher</p>
            </div>
            <div className="meta-item">
              <h3>Tools</h3>
              <p>Figma, Notion, Miro, Slack</p>
            </div>
            <div className="meta-item">
              <h3>Methods</h3>
              <p>Design Thinking, Qualitative Research, Scenario-Based Design, Agile Workflow</p>
            </div>
          </div>

          <h2>The Challenge</h2>
          <p>
            Immigrant women in Sweden often face significant barriers during their
            integration journey. Through qualitative interviews with nine women from
            our target demographic, we identified three primary pain points:
          </p>
          <ul className="features-list">
            <li>Difficulty accessing relevant and reliable information</li>
            <li>Feelings of social isolation and disconnection</li>
            <li>Language barriers hindering daily interactions</li>
          </ul>

          <h2>Target Audience</h2>
          <p>
            Women aged 25-50 who have been living in Sweden for a maximum of five years.
            These users often struggle to adapt to Swedish society due to language and
            cultural barriers, and need a centralized source of trustworthy information.
          </p>

          {/* IMAGE PLACEHOLDER - Add user persona or research insights image */}
          <div className="image-placeholder">
            <span>User Research Insights Image</span>
          </div>

          <h2>Design Principles</h2>
          <div className="principles-grid">
            <div className="principle-card">
              <h3>Accessibility</h3>
              <p>Information presented in multiple languages with clear, intuitive categories.</p>
            </div>
            <div className="principle-card">
              <h3>Engagement</h3>
              <p>Social features like activity bookings and feedback systems encourage community interaction.</p>
            </div>
            <div className="principle-card">
              <h3>Clarity</h3>
              <p>Minimalistic design and user-friendly navigation prevent cognitive overload.</p>
            </div>
          </div>

          <h2>Key Features</h2>
          <ul className="features-list">
            <li>Multilingual interface supporting diverse language needs</li>
            <li>Categorized information and frequently asked questions</li>
            <li>Social and cultural activity bookings</li>
            <li>Feedback and contact options for personalized support</li>
            <li>Community-building features to combat isolation</li>
          </ul>

          {/* IMAGE PLACEHOLDER - Add wireframes or UI screenshots */}
          <div className="image-placeholder">
            <span>App Wireframes / UI Design Image</span>
          </div>

          <h2>Process & Team Workflow</h2>
          <p>
            Our team, Flowgrammers, utilized tools like Figma, Notion, and Miro to design
            and prototype the application. We employed scenario-based design techniques
            to visualize user behavior, while agile workflows ensured iterative improvements
            based on continuous user feedback. Priorities were set using the MoSCoW method
            to focus on the most impactful features first.
          </p>

          <h2>My Role</h2>
          <p>
            As a UX/UI Designer and Researcher, I contributed to user research, persona
            development, and interface design. I helped conduct qualitative interviews,
            synthesized research findings into actionable insights, and collaborated on
            creating wireframes and prototypes that addressed our users' core needs.
          </p>

          {/* IMAGE PLACEHOLDER - Add final prototype screens */}
          <div className="image-placeholder">
            <span>Final Prototype Screens Image</span>
          </div>

          <a
            href="https://www.figma.com/proto/KXEFtu5amIdwGjnVmeKiyv/InterAction-Prototype?node-id=2690-9817&page-id=2262%3A610&starting-point-node-id=2694%3A9114&t=HVbYLLD3hKeo5mXG-1"
            target="_blank"
            rel="noopener noreferrer"
            className="interAction-link"
          >
            View Prototype in Figma
            <span className="link-arrow">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default InterAction;
