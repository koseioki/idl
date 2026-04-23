import { H1 } from "../../components/header-and-footer/H1";
import { NavLink, useParams } from "react-router-dom";
import projectData from "../../data/research-projects/research-projects.json";
export function ProjectOverview() {
  const { slug } = useParams();
  const project = projectData.find(
    (proj) => proj.slug === slug || proj.id === slug,
  );

  return (
    <main id="main-content">
      <H1>{project?.title}</H1>

      {project?.active ? (
        <>
          <h2>Background of this research</h2>
          <p>{project?.projectBackground}</p>

          <h2>Goals of this research</h2>
          <ul>
            {project?.projectGoals?.map((goal, index) => (
              <li key={index}>{goal}</li>
            ))}
          </ul>

          <NavLink to="about-this-project">Go to the research</NavLink>
        </>
      ) : (
        <p>Coming soon! This page is under construction.</p>
      )}
    </main>
  );
}
