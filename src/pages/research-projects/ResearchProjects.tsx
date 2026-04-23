import { Card } from "../../components/global/Card";
import { CardList } from "../../components/global/CardList";
import { H1 } from "../../components/header-and-footer/H1";
import projectData from "../../data/research-projects/research-projects.json";
export function ResearchProjects() {
  return (
    <>
      <main id="main-content">
        <H1>Research Projects</H1>
        <p>
          Here is an overview of the research projects by the Intersectional
          Design Lab. The research is continuously conducted and updated.
        </p>

        <CardList>
          {projectData.map((project) => (
            <Card
              key={project.slug}
              heading={project.title}
              headingLevel={2}
              linkTo={`/research-projects/${project.slug}`}
              disabled={false}
          >
            <p>{project.shortDescription}</p>
          </Card>))}
        </CardList>
      </main>
    </>
  );
}
