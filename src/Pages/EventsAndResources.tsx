import { Card } from "../Components/Global/Card";
import { Drawing } from "../Components/Global/Drawing";
import { useEffect, useRef } from "react";
export function EventsAndResources() {
    const headingRef = useRef<HTMLHeadingElement>(null);
    useEffect(() => {
      if (headingRef.current) {
        headingRef.current.focus();
      }
    }, []);


  return (
    <>
      <head>
        <title>Events & Resources - Intersectional Design Lab</title>
      </head>
      <main id="main-content">
        <h1 ref={headingRef} tabIndex="-1">Events & Resources</h1>
        {/* introduction text */}
        <p>
          We offer a variety of events and resources to support your learning
          and growth.
        </p>

        {/* menu */}
        <ul className="card-list">
          <li>
            <Card heading="Seminars & Workshops" disabled>
              <p>
                We host seminars, webinars, workshops, talks, and similar
                events.
              </p>
              <Drawing />
            </Card>
          </li>
          <li>
            <Card heading="Resource Library" disabled>
              <p>
                We share our curated research resources, including books,
                videos, courses, and more.
              </p>
              <Drawing />
            </Card>
          </li>
        </ul>
      </main>
    </>
  );
}
