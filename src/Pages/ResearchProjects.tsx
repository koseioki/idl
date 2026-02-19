import { Card } from "../Components/Global/Card";
import { H1 } from "../Components/Global/H1";
export function ResearchProjects() {
  return (
    <>
      <main id="main-content">
        <H1>Research Projects</H1>
        <p>Coming soon! This page is under construction.</p>
        <ul className="card-list">
          <li>
            <Card
              heading="Marginalisation and Design"
              headingLevel={2}
              linkTo="/research-projects/marginalisation-and-design"
              disabled={false}
            >
              <p>
                What kinds of marginalisation exist, and how do they affect
                design?
              </p>
              {/* <Drawing /> */}
            </Card>
          </li>
          <li>
            <Card
              heading="Design in Practice"
              headingLevel={2}
              linkTo="/research-projects/design-in-practice"
              disabled={false}
            >
              <p>
                We discuss how design can become more inclusive, with practical
                examples.
              </p>
              {/* <Drawing /> */}
            </Card>
          </li>
        </ul>
      </main>
    </>
  );
}
