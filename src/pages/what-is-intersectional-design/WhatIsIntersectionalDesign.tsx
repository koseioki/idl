import { Note } from "../../components/global/Note";
import { H1 } from "../../components/header-and-footer/H1";
import { NavLink } from "react-router-dom";
export function WhatIsIntersectionalDesign() {
  const lastUpdated = "2026-03-11";

  return (
    
      <main id="main-content">
        <H1>What is Intersectional Design?</H1>

        <Note title="Note:">
          <p>
            This page is a work in progress. We are still developing the
            content.
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

        <p>
          <b>Intersectional Design</b> is a concept that combines intersectionality and design—in other words, it’s about designing while considering “intersecting” forms of discrimination.
        </p>
        <p>
         Here, you can learn more about what intersectionality is, why intersectional design matters, and how we can start practising it. </p>
   

        <h2>What is Intersectionality?</h2>
        <p>
          Intersectionality is a way of understanding social relations by
          examining intersecting forms of discrimination.
        </p>
        <p>
          <NavLink to="what-is-intersectionality">Read more about "What is Intersectionality?"</NavLink>
        </p>

        <h2>Why is Intersectional Design important?</h2>
        <NavLink to="why-is-intersectional-design-important">
          Read more about "Why is Intersectional Design important?"
        </NavLink>
        <h2>How do we start?</h2>
        <p>
          At Intersectional Design Lab, we recommend starting by understanding
          the specific marginalisation and challenges people face, one by one.
          This builds empathy and helps you truly "put yourself in their shoes."
        </p>
        <NavLink to="how-do-we-start">Read more about "How do we start?"</NavLink>

      </main>
  );
}
