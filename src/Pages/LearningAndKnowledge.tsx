import { Card } from "../Components/Global/Card";
export function LearningAndKnowledge() {
  return (
    <>
      <head>
        <title>Learning and Knowledge - Intersectional Design Lab</title>
      </head>
      <main id="main-content">
        <h1>Learning and Knowledge</h1>
        <p>Coming soon! This page is under construction.</p>
        <ul className="card-list">
          <li>
            <Card
              heading="Seminars & Workshops"
              headingLevel={2}
              linkTo="/learning-and-knowledge/seminars-and-workshops"
              disabled={false}
            >
              <p>
                We host seminars, webinars, workshops, talks, and similar
                events.
              </p>
              {/* <Drawing /> */}
            </Card>
          </li>
          <li>
            <Card
              heading="Resource Library"
              headingLevel={2}
              linkTo="/learning-and-knowledge/resource-library"
              disabled={false}
            >
              <p>
                We share our curated research resources, including books,
                videos, courses, and more.
              </p>
              {/* <Drawing /> */}
            </Card>
          </li>
        </ul>
      </main>
    </>
  );
}
