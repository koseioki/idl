// import { NavLink } from "react-router-dom";
import { ReadMore } from "../components/global/ReadMore";
import "./Home.css";
import { Card } from "../components/global/Card";
import { Drawing } from "../components/global/Drawing";
import { CardList } from "../components/global/CardList";
import projectData from "../data/research-projects/research-projects.json";

export function Home() {
  // Change document title
  document.title = "Intersectional Design Lab";

  return (
    <main id="main-content">
      <h1>How can we make the digital space more inclusive?</h1>
      <p className="lead-text">
        At Intersectional Design Lab, we research, experiment with, and share
        design practices for Information and Communication Technologies (ICT)
        through an <i>intersectional lens</i>.
      </p>
      <p>
        <ReadMore to="/what-is-intersectional-design">
          Read more about "What is Intersectional Design?"
        </ReadMore>
      </p>
      {/* <img src={TwoPeopleCraftingICT} alt="Two people crafting ICT" /> */}
      <Drawing
        name="TwoPeopleCraftingICT"
      />

      <h2>Research Projects</h2>
      <CardList>
             {projectData.map((project) => (
            <Card
              key={project.slug}
              heading={project.title}
              headingLevel={3}
              linkTo={`/research-projects/${project.slug}`}
              disabled={project.disabled}
          >
            <p>{project.shortDescription}</p>
          </Card>))}

        
      </CardList>
      <h2>Learning and Knowledge</h2>

      <CardList>
        <Card
          heading="Events"
          headingLevel={3}
          linkTo="/events-and-resources/events"
          disabled={false}
        >
          <p>
            We host seminars, webinars, workshops, talks, and similar events.
          </p>
          <Drawing name="Share" />
        </Card>

        <Card
          heading="Resource Library"
          headingLevel={3}
          linkTo="/events-and-resources/resource-library"
          disabled={false}
        >
          <p>
            We share our curated research resources, including books, videos,
            courses, and more.
          </p>
          <Drawing name="Library" />
        </Card>
      </CardList>
    </main>
  );
}
