import React from "react";
import { Link } from "react-router-dom";
import "../Style/LuxbiteProject.css";
import project1 from "../assets/luxbite.png";

function Luxbite() {
  return (
    <div>
      <div className="LuxebitePage">
        <h1>LuxeBite</h1>
        <a
          href="https://www.figma.com/proto/0WcU52ESl9ufsiJr8cbURJ/VG-LuxeBite?node-id=0-1&t=yJ5YrCW6cVj5nVBw-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit the project in Figma
        </a>
        <img className="luxbite-img" src={project1} alt="Luxbite Project" />
      </div>
      <div className="luxbite-description">
        <h2>Project Description:</h2>
        <div className="project-section">
          <h3>Vision</h3>
          <p>
            LuxeBite was born out of a desire to create something unique that
            didn’t exist in the market—a luxurious food experience that caters
            to those seeking that little extra in their daily lives. We aim to
            deliver an extraordinary culinary experience straight to the
            customer’s home, blending convenience with elegance.
          </p>
        </div>

        <div className="project-section">
          <h3>Purpose (Why)</h3>
          <p>
            Our goal is to make every day a little more special by offering
            luxurious meal boxes that add a touch of gold to the everyday
            routine. LuxeBite isn’t just about food; it’s about elevating the
            ordinary to the extraordinary.
          </p>
        </div>

        <div className="project-section">
          <h3>Target Audience (Who)</h3>
          <p>
            LuxeBite is designed for the upper-middle class in Stockholm—people
            who desire a touch of luxury in their daily lives. Our target
            audience includes:
          </p>
          <p>
            Middle managers looking to impress colleagues. Groups of friends
            seeking to add a bit of luxury to their week. Influencers aiming to
            create Instagram-worthy moments.
          </p>
        </div>

        <div className="project-section">
          <h3>User Experience Goals (How)</h3>
          <p>Our approach is guided by three key principles:</p>
          <p>
            Exclusivity: Every aspect of LuxeBite, from the ingredients to the
            packaging, exudes luxury. Convenience: We ensure a seamless and
            effortless experience for our customers, from ordering to delivery.
            Uniqueness: We offer something beyond the ordinary, a product and
            service that stand out in the market. User Research
          </p>
        </div>

        <div className="project-section">
          <h3>User Research</h3>
          <p>
            To better understand our audience, we conducted qualitative research
            involving 18 participants through structured and semi-structured
            interviews. The insights we gathered led us to identify three
            distinct customer types:
          </p>
          <p>
            The Indulgent: They desire larger portions, premium ingredients, and
            little extras in their delivery. The Efficient: They prioritize fast
            delivery, easy ordering, and convenience in their daily lives. The
            Showy: They seek a flashy, innovative experience with a personal
            touch in the delivery process.
          </p>
        </div>

        <div className="project-section">
          <h3>Project Development and Team Workflow</h3>
          <p>
            We kicked off the project by structuring our weeks, setting regular
            meetings, and defining roles, such as the Scrum Master, which
            rotates among team members. We utilized tools like Notion, Figma,
            Miro, and Slack to streamline our work.
          </p>
          <p>
            In our initial brainstorming session, we generated a variety of
            ideas, eventually narrowing them down to two key concepts. After
            consulting with a mentor, we decided to focus on the more luxurious
            concept of meal boxes.
          </p>
          <p>
            We developed our "Why," "How," and Target Audience, focusing on
            radiating luxury to those who want to add a touch of glamour to
            their lives. This concept is ideal for middle managers, friend
            groups, or influencers looking to make a statement.
          </p>
        </div>
      </div>{" "}
    </div>
  );
}

export default Luxbite;
