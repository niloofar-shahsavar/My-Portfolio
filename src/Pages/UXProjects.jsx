// src/pages/UXProjects.jsx
import SEO from "../components/SEO";

function UXProjects() {
  return (
    <div className="ux-projects-page">
      <SEO
        title="UX/UI Design Projects"
        description="UX/UI design and research case studies by Niloofar Shahsavar — LuxeBite, InterAction, HP-appen, and EdAider."
        path="/ux-projects"
      />
      <h1>UX/UI Research Projects</h1>
      <div className="projects-grid">
        {/* Project cards linking to individual projects */}
        <ProjectCard 
          title="Edaider"
          link="/Edaider"
          description="..."
        />
        <ProjectCard 
          title="HP Appen"
          link="/HPAppen"
          description="..."
        />
        <ProjectCard 
          title="Luxbite"
          link="/luxbite-project"
          description="..."
        />
        <ProjectCard 
          title="InterAction"
          link="/interaction"
          description="..."
        />
      </div>
    </div>
  );
}

export default UXProjects;