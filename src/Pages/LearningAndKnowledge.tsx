import { Card } from "../Components/Global/Card";
import { CardList } from "../Components/Global/CardList";
import { H1 } from "../Components/Global/H1";
export function LearningAndKnowledge() {
  return (
    <>
      <main id="main-content">
        <H1>Learning and Knowledge</H1>
        {/* <p>Coming soon! This page is under construction.</p> */}
        <CardList>
          <Card
            heading="Seminars and Workshops"
            headingLevel={2}
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
            headingLevel={2}
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
