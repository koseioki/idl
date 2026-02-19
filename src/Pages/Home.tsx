import { NavLink } from "react-router-dom";
import "./Home.css";
import { Card } from "../Components/Global/Card";
import { Drawing } from "../Components/Global/Drawing";

export function Home() {
  // Change document title
  document.title = "Home - Intersectional Design Lab";

  return (
    <>

    <main id="main-content">
      <h1>How can we make the digital world inclusive?</h1>
      <p>
        At Intersectional Design Lab, wwe research, experiment with, and sharedesign practices for
        Information and Communication Technologies (ICT) from an{" "}
        <i>intersectional perspective</i> to make the digital space a more
        inclusive place for everyone.
      </p>
      <p>
      <NavLink to="/what-is-intersectional-design">
        Read more about "What is Intersectional Design?"
      </NavLink></p>
      {/* <img src={TwoPeopleCraftingICT} alt="Two people crafting ICT" /> */}
      <Drawing
      name="TwoPeopleCraftingICT"
      alt="Two people are discussing a computer. One person has tangled thoughts above their head, while the other has a light bulb above hers, drawing."/>


      <h2>Research Projects</h2>

      <ul className="card-list">
        <li>
          <Card
          heading="Marginalisation and Design"
          headingLevel={3}
          linkTo="/"
          disabled={false}>
            <p>
              What kinds of marginalisation exist, and how do they affect design?
            </p>
            {/* <Drawing /> */}
          </Card>
        </li>
        <li>
          <Card
          heading="Design in Practice"
          headingLevel={3}
          linkTo="/design-in-practice"
          disabled={false}>
            <p>
              We discuss how design can become more inclusive, with practical examples.
            </p>
            {/* <Drawing /> */}
          </Card>
        </li>
</ul>
      <h2>Learning and Knowledge</h2>

<ul className="card-list">
        <li>
          <Card
          heading="Seminars and Workshops"
          headingLevel={3}
          linkTo="/events-and-resources/seminars-and-workshops"
          disabled={false}>
            <p>
              We host seminars, webinars, workshops, talks, and similar events.
            </p>
            {/* <Drawing /> */}
          </Card>
        </li>
        <li>
          <Card
          heading="Resource Library"
          headingLevel={3}
          linkTo="/events-and-resources/resource-library"
          disabled={false}>
            <p>
              We share our curated research resources, including books, videos,
              courses, and more.
            </p>
            {/* <Drawing /> */}
          </Card>
        </li>
      </ul>
     
    </main>
    </>
  );
}
