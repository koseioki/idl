import { NavLink } from "react-router-dom";
import "./Home.css";
import { Card } from "../Components/Global/Card";
import { Drawing } from "../Components/Global/Drawing";
import { CardList } from "../Components/Global/CardList";

export function Home() {
  // Change document title
  document.title = "Home - Intersectional Design Lab";

  return (
    <>
      <main id="main-content">
        <h1>How can we make the digital world more inclusive?</h1>
        <p>
          At Intersectional Design Lab, we research, experiment with, and
          share design practices for Information and Communication Technologies
          (ICT) from an <i>intersectional perspective</i> to make the digital
          space a more inclusive place for everyone.
        </p>
        <p>
          <NavLink to="/what-is-intersectional-design">
            Read more about "What is Intersectional Design?"
          </NavLink>
        </p>
        {/* <img src={TwoPeopleCraftingICT} alt="Two people crafting ICT" /> */}
        <Drawing
          name="TwoPeopleCraftingICT"
          alt="Two people are discussing a computer. One person has tangled thoughts above their head, while the other has a light bulb above hers, drawing."
        />

        <h2>Research Projects</h2>

        <CardList>
          <Card
            heading="Marginalisation and Design"
            headingLevel={3}
            linkTo="/research-projects/marginalisation-and-design"
            disabled={false}
          >
            <p>
              What kinds of marginalisation exist, and how do they affect
              design?
            </p>
            {/* <Drawing /> */}
          </Card>

          <Card
            heading="Design in Practice"
            headingLevel={3}
            linkTo="/research-projects/design-in-practice"
            disabled={false}
          >
            <p>
              We discuss how design can become more inclusive, with practical
              examples.
            </p>
            {/* <Drawing /> */}
          </Card>
        </CardList>
        <h2>Learning and Knowledge</h2>

        <CardList>
          <Card
            heading="Seminars and Workshops"
            headingLevel={3}
            linkTo="/learning-and-knowledge/seminars-and-workshops"
            disabled={false}
          >
            <p>
              We host seminars, webinars, workshops, talks, and similar events.
            </p>
            {/* <Drawing /> */}
          </Card>

          <Card
            heading="Resource Library"
            headingLevel={3}
            linkTo="/learning-and-knowledge/resource-library"
            disabled={false}
          >
            <p>
              We share our curated research resources, including books, videos,
              courses, and more.
            </p>
            {/* <Drawing /> */}
          </Card>
        </CardList>
      </main>
    </>
  );
}
