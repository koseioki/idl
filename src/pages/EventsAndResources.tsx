import { Card } from "../components/global/Card";
import { CardList } from "../components/global/CardList";
import { H1 } from "../components/header-and-footer/H1";
import { Drawing } from "../components/global/Drawing";
export function EventsAndResources() {
  return (
    <>
      <main id="main-content">
        <H1>Events and Resources</H1>
        {/* <p>Coming soon! This page is under construction.</p> */}
        <CardList>
          <Card
            heading="Events"
            headingLevel={2}
            linkTo="events"
            disabled={false}
          >
            <p>
              We host seminars, webinars, workshops, talks, and similar events.
            </p>
            <Drawing
              name="Share"
            />
          </Card>

          <Card
            heading="Resource Library"
            headingLevel={2}
            linkTo="resource-library"
            disabled={false}
          >
            <p>
              We share our curated research resources, including books, videos,
              courses, and more.
            </p>
            <Drawing
              name="Library"
            />
          </Card>
        </CardList>
      </main>
    </>
  );
}
