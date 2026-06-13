// This page is right under "research-projects", and shows the overview of the research project, including the background and goals. It also has a link to "about-this-project" page, which will show the details of the research project, including the methods and findings.

import { H1 } from "../../components/header-and-footer/H1";
import { useParams } from "react-router-dom";
import projectData from "../../data/research-projects/research-projects.json";
import { SideNav } from "../../components/global/SideNav";
import "./ResearchProjectPage.css";
export function ProjectOverview() {
  const { slug } = useParams();
  const project = projectData.find(
    (proj) => proj.slug === slug || proj.id === slug,
  );

  return (
    <div className="research-project-page">
      <main id="main-content">
        <H1>{project?.title}</H1>

        
          <h2>Background</h2>
          <p>{project?.projectBackground}</p>

          <h2>Goals</h2>
          <ul>
            {project?.projectGoals?.map((goal, index) => (
              <li key={index}>{goal}</li>
            ))}
          </ul>

      
      </main>
            <SideNav />

    </div>
  );
}
