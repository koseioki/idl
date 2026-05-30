// import { Note } from "../../components/global/Note";
import { Card } from "../../components/global/Card";
import { CardList } from "../../components/global/CardList";
import { H1 } from "../../components/header-and-footer/H1";
export function WhatIsIntersectionalDesign() {
  // const lastUpdated = "2026-04-15";

  return (
    <main id="main-content">
      <H1>What is Intersectional Design?</H1>

      <p className="lead-text">
        <b>Intersectional Design</b> is a concept that combines
        intersectionality and design.
      </p>

      <p>
        in other words, it's about designing a digital society while considering "intersecting"
        forms of discrimination.
      </p>

      <p>
        Here, you can learn more about what intersectionality is, why
        intersectional design matters, and how we can start practising it.{" "}
      </p>

      <CardList>
        <Card
          heading="What is Intersectionality?"
          headingLevel={2}
          linkTo="what-is-intersectionality"
          disabled={false}
        >
          {""}
        </Card>
        <Card
          heading="Why is Intersectional Design important?"
          headingLevel={2}
          linkTo="why-is-intersectional-design-important"
          disabled={false}
        >
          {""}
        </Card>
        <Card
          heading="How do we start?"
          headingLevel={2}
          linkTo="how-do-we-start"
          disabled={false}
        >
          {""}
        </Card>
      </CardList>
    </main>
  );
}
