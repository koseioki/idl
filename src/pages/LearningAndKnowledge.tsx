import { Card } from "../components/global/Card";
import { CardList } from "../components/global/CardList";
import { H1 } from "../components/header-and-footer/H1";
import { Drawing } from "../components/global/Drawing";
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
            <Drawing
              name="Share"
              alt=""
            />
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
