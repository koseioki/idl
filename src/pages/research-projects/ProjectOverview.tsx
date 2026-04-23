import { H1 } from "../../components/header-and-footer/H1";
import { NavLink, useParams } from "react-router-dom";
import projectData from "../../data/research-projects/research-projects.json";
export function ProjectOverview() {
  const { slug } = useParams();
  const project = projectData.find(
    (proj) => proj.slug === slug || proj.id === slug,
  );

//   console.log("Project data:", project);

  return (
    <main id="main-content">
      <H1>{project?.title ? project.title : "Project not found"}</H1>

      <h2>Background of this research</h2>
      <p>{project?.projectBackground ? project.projectBackground : "No background information available for this research."}</p>


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
      <NavLink to="about-this-project">Go to the research</NavLink>
    </main>
  );
}
