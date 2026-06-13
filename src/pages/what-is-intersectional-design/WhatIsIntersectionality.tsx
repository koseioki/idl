import { Video } from "../../components/global/Video";
import { H1 } from "../../components/header-and-footer/H1";
import { InTextCitation } from "../../components/resources/InTextCitation";
import { References } from "../../components/resources/References";

export function WhatIsIntersectionality() {
  return (
    <main id="main-content">
      <H1>What is Intersectionality?</H1>
      <p className="lead-text">
        Intersectionality is the idea that a person can experience multiple
        forms of marginalisation at the same time.
      </p>
      <p>
        These forms of marginalisation can be present due to factors such as:
      </p>
      <ul>
        <li>Race</li>
        <li>Age</li>
        <li>Gender</li>
        <li>Sexual orientation</li>
        <li>Disability</li>
        <li>Socio-Economic status</li>
        <li>Location</li>
        <li>Migration status</li>
      </ul>
      <p>
        When someone exists at the "intersection" of several of these factors,
        the effects are not simply added together.
      </p>
      <p>
        Instead, they interact and create unique experiences of disadvantage or
        oppression.
      </p>

      <h2>Problem with today's approach</h2>
      <p>Many approaches to equality today focus on only one form of marginalisation at a time. This can leave some people unsupported, as they may not fully fit into any single category <InTextCitation id="23459734" />.</p>
      <p>As a result, this can put them in a situation, "sitting between two chairs," where neither approach fully addresses their needs or helps them achieve independence and dignity.</p>
      
      <Video
        src="https://www.youtube-nocookie.com/embed/O1islM0ytkE?si=XNP-7wdXZfmkJfNx"
        title="What is Intersectionality?"
      />
      
      <References ids={["23459734"]} />
    </main>
  );
}
