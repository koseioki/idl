import { H1 } from "../../components/header-and-footer/H1";
import { InTextCitation } from "../../components/resources/InTextCitation";
import { References } from "../../components/resources/References";
import { Note } from "../../components/global/Note";


export function WhatIsIntersectionality() {
    const lastUpdated = "2026-02-28";

  return (
    
    <main id="main-content">
      <H1>What is Intersectionality?</H1>

      <Note title="Note:">
        <p>
          This page is a work in progress. We are still developing the content.
        </p>
        <p>
          Last updated:{" "}
          {new Date(lastUpdated).toLocaleDateString([], {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </Note>

      <blockquote>
        Intersectionality is an analytic sensibility, a way of thinking about
        identity and its relationship to power.
      </blockquote>
      <cite>
        <InTextCitation id="99473857" />
      </cite>
      <iframe
        className="youtube-video"
        src="https://www.youtube-nocookie.com/embed/O1islM0ytkE?si=XNP-7wdXZfmkJfNx"
        title="YouTube video player"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
      />
      <p>
        Intersectionality is a way of understanding social relations by
        examining intersecting forms of discrimination.
      </p>
      <p>
        This means acknowledging that social systems are complicated and that
        many forms of oppression—like racism, sexism, and ageism—might be
        present and active at the same time in a person's life.
      </p>
      <p>
        Everyday approaches to building equality tend to focus on one type of
        discrimination—for instance, sexism—and then work to address only that
        specific concern <InTextCitation id="23459734" />.
      </p>
      <References ids={["99473857", "23459734"]} />
    </main>
  );
}
