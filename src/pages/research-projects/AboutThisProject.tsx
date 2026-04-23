import { useParams } from "react-router-dom";
import { H1 } from "../../components/header-and-footer/H1";
import projectData from "../../data/research-projects/research-projects.json";
import { SideNav } from "../../components/global/SideNav";
import "./ResearchProjectPage.css";
export function AboutThisProject() {
  const { slug } = useParams();
  const project = projectData.find(
    (proj) => proj.slug === slug || proj.id === slug,
  );

  return (
    <div className="research-project-page">
      <SideNav />
      <main id="main-content">
        <H1>About this research - {project?.title}</H1>
        <h2>Background of this research</h2>
        <p>
          {project?.projectBackground
            ? project.projectBackground
            : "No background information available for this research."}
        </p>

        <h2>Goals of this research</h2>
        <ul>
          {project?.projectGoals && project.projectGoals.length > 0 ? (
            project.projectGoals.map((goal, index) => (
              <li key={index}>{goal}</li>
            ))
          ) : (
            <p>No goals found for this research.</p>
          )}
        </ul>
      </main>
    </div>
  );
}
