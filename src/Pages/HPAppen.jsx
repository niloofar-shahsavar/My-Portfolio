import React, { useEffect } from "react";
import "../Style/HPAppen.css";

const HPAppen = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      <div className="HPAppenPage">
        <h1>HP-appen – UX/UI Design Internship</h1>
        <p>
          <a
            href="https://www.figma.com/your-link-here"
            target="_blank"
            rel="noopener noreferrer"
          >
            View project in Figma
          </a>
        </p>
      </div>

      <div className="hpappen-description">
        <div className="hpappen-descriptionTitle">
          <h2>Gamifying Learning with HP-appen</h2>
        </div>

        <div className="project-section">
          <h3>Project Type:</h3>
          UX/UI Design, Internship
          <h3>Role:</h3>
          UX/UI Designer
          <h3>Tools:</h3>
          Figma, Notion, Slack
          <h3>Methods:</h3>
          Wireframing, Prototyping, Mobile-first Design, User Feedback
          <h3>Timeline:</h3>
          January – March 2025 (10 weeks)
        </div>

        <div className="project-section">
          <h3>The Challenge</h3>
          <p>
            HP-appen helps students prepare for the Swedish university admission exam. My mission was to improve the app’s user experience by redesigning key flows and enhancing visual appeal — especially to boost engagement through gamification.
          </p>
        </div>

        <div className="project-section">
          <h3>My Contribution</h3>
          <ul>
            <li>Designed new flows for Quests, Factions, Challenges, and Lectures</li>
            <li>Improved the mobile login and dashboard experience</li>
            <li>Enhanced visual structure and UI clarity</li>
            <li>Applied accessibility best practices (WCAG)</li>
          </ul>
        </div>

        <div className="project-section">
          <h3>Methods & Tools</h3>
          <p>
            Used Figma for all design work, collaborated in Slack, structured tasks in Notion, and followed agile design cycles based on real user feedback.
          </p>
        </div>

        <div className="project-section">
          <h3>Learnings & Results</h3>
          <p>
            I delivered 8+ redesigned flows with strong user focus and responsive behavior. The new interface simplified the learning journey and increased clarity. This internship helped me understand the dynamics of real product teams and design with both constraints and creativity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HPAppen;
