import React, { useEffect } from "react";
import "../Style/HPAppen.css";
import image1 from "../assets/caseStudies/hp-p2.png";
import image2 from "../assets/caseStudies/hp-p1.png";

const HPAppen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="hpappenPage">
      <div className="hpappen-container">
        <h1 className="hpappen-title">HP-appen</h1>
        <p className="hpappen-subtitle">Gamifying Learning for University Admission Success</p>

        {/* IMAGE PLACEHOLDER - Add hero image of the app or key screens */}
        <div className="image-placeholder hero-placeholder">
          <span>HP-appen Hero Image / App Preview</span>
        </div>

        <div className="hpappen-content">
          <h2>Overview</h2>
          <p>
            HP-appen is a mobile application that helps students prepare for the Swedish
            university admission exam (Högskoleprovet). During my internship, I focused
            on improving the app's user experience through redesigned flows and enhanced
            visual appeal—with a particular emphasis on boosting engagement through
            gamification elements.
          </p>

          <h2>Project Details</h2>
          <div className="project-meta">
            <div className="meta-item">
              <h3>Project Type</h3>
              <p>UX/UI Design, Internship</p>
            </div>
            <div className="meta-item">
              <h3>Role</h3>
              <p>UX/UI Designer</p>
            </div>
            <div className="meta-item">
              <h3>Tools</h3>
              <p>Figma, Notion, Slack, Trello</p>
            </div>
            <div className="meta-item">
              <h3>Timeline</h3>
              <p>January - March 2025 (10 weeks)</p>
            </div>
          </div>

          <h2>Methods</h2>
          <div className="methods-list">
            <span className="method-tag">Wireframing</span>
            <span className="method-tag">Prototyping</span>
            <span className="method-tag">Mobile-first Design</span>
            <span className="method-tag">User Feedback</span>
            <span className="method-tag">WCAG Accessibility</span>
            <span className="method-tag">Agile Design Cycles</span>
          </div>

          <h2>The Challenge</h2>
          <p>
            Students preparing for Sweden's university admission exam need consistent
            motivation and engagement to succeed. The existing app had potential but
            lacked the visual polish and gamified elements that could transform
            studying from a chore into an engaging experience. My mission was to
            redesign key user flows and enhance the overall visual appeal.
          </p>

          {/* IMAGE PLACEHOLDER - Add before/after or problem visualization */}
          <div className="image-placeholder">
            <span>Challenge Visualization / Before State Image</span>
          </div>

          <h2>My Contributions</h2>
          <div className="contributions-grid">
            <div className="contribution-card">
              <h3>Flow Design</h3>
              <p>Designed new flows for Quests, Factions, Challenges, and Lectures</p>
            </div>
            <div className="contribution-card">
              <h3>Login & Dashboard</h3>
              <p>Improved the mobile login experience and dashboard usability</p>
            </div>
            <div className="contribution-card">
              <h3>Visual Enhancement</h3>
              <p>Enhanced visual structure, hierarchy, and UI clarity throughout</p>
            </div>
            <div className="contribution-card">
              <h3>Accessibility</h3>
              <p>Applied WCAG accessibility best practices to all designs</p>
            </div>
          </div>

          <h2>Gamification Features</h2>
          <p>
            A core focus of my work was implementing gamification elements that
            would motivate students to study consistently:
          </p>
          <ul className="features-list">
            <li><strong>Quests:</strong> Goal-based learning paths with clear progression</li>
            <li><strong>Factions:</strong> Team-based competition to encourage community</li>
            <li><strong>Challenges:</strong> Daily and weekly tasks to build study habits</li>
            <li><strong>Progress Tracking:</strong> Visual indicators of learning achievements</li>
          </ul>

          {/* IMAGE PLACEHOLDER - Add gamification UI screens */}
          <div className="image-placeholder">
            <span>Gamification Features UI Image</span>
          </div>

          <h2>Process</h2>
          <p>
            Using Figma for all design work, I collaborated closely with the team
            through Slack and structured tasks in Notion. The project followed agile
            design cycles, with regular iterations based on real user feedback.
            This approach allowed for rapid validation of design decisions and
            continuous improvement.
          </p>

          <h2>Results & Learnings</h2>
          <div className="results-grid">
            <div className="result-card">
              <h3>8+ Flows</h3>
              <p>Redesigned user flows with strong user focus and responsive behavior</p>
            </div>
            <div className="result-card">
              <h3>Simplified Journey</h3>
              <p>New interface streamlined the learning experience and increased clarity</p>
            </div>
            <div className="result-card">
              <h3>Professional Growth</h3>
              <p>Gained understanding of real product team dynamics and constraints</p>
            </div>
          </div>
          <p>
            This internship helped me understand how to design with both constraints
            and creativity, balancing business requirements with user needs in a
            fast-paced product environment.
          </p>

          <h2>Design Samples</h2>
          <p>
            Below are examples of the design work I created during my internship:
          </p>
          <div className="design-samples">
            <div className="sample-image">
              <img src={image1} alt="HP-appen Design Sample 1" />
            </div>
            <div className="sample-image">
              <img src={image2} alt="HP-appen Design Sample 2" />
            </div>
          </div>

          {/* IMAGE PLACEHOLDER - Add more design samples if available */}
          <div className="image-placeholder">
            <span>Additional Design Samples Image</span>
          </div>

          <h2>My Role</h2>
          <p>
            As a UX/UI Design Intern, I was responsible for designing and iterating
            on multiple user flows within the application. I worked independently
            on design tasks while collaborating with the product team for feedback
            and alignment. This experience strengthened my skills in mobile-first
            design, gamification principles, and working within an agile environment.
          </p>

          <a
            href="https://www.figma.com/proto/qN3kQO7mkrNKQC9CvGftX5/Test.1?node-id=1-3371&page-id=0%3A1&starting-point-node-id=1%3A3371&t=T925EOi3Ce0X56Rb-1"
            target="_blank"
            rel="noopener noreferrer"
            className="hpappen-link"
          >
            View Project in Figma
            <span className="link-arrow">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HPAppen;
