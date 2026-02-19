import { Card } from "../Components/Global/Card";
export function ResearchProjects() {
  return (
    <>
      <head>
        <title>Research Projects - Intersectional Design Lab</title>
      </head>
      <main id="main-content">
        <h1>Research Projects</h1>
                <p>Coming soon! This page is under construction.</p>
  <ul className="card-list">
        <li>
          <Card
          heading="Marginalisation and Design"
          headingLevel={2}
          linkTo="/research-projects/marginalisation-and-design"
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
          headingLevel={2}
          linkTo="/research-projects/design-in-practice"
          disabled={false}>
            <p>
              We discuss how design can become more inclusive, with practical examples.
            </p>
            {/* <Drawing /> */}
          </Card>
        </li>
</ul>
      </main>
    </>
  );
}
