import { Card } from "../Components/Global/Card";
import { Drawing } from "../Components/Global/Drawing";
import { useEffect, useRef } from "react";

export function WhatIsIntersectionalDesign() {

  const headingRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.focus();
    }
  }, []);

  return (
    <>
      <head>
        <title>
          What is Intersectional Design? - Intersectional Design Lab
        </title>
      </head>
      <main id="main-content">
        <h1 ref={headingRef} tabIndex="-1">
          What is Intersectional Design?
        </h1>
        <h2>What is Intersectionality?</h2>

        {/* Inserting youtube video */}
        <iframe
          // width="560"
          // height="315"
          className="youtube-video"
          src="https://www.youtube-nocookie.com/embed/O1islM0ytkE?si=XNP-7wdXZfmkJfNx"
          title="YouTube video player"
          // frameborder="0"
          // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          // referrerpolicy="strict-origin-when-cross-origin"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          allowfullscreen
        ></iframe>

        <p>
          Intersectionality is a way of understanding social relations by
          examining intersecting forms of discrimination.
        </p>
        <p>
          This means acknowledging that social systems are complicated and that
          many forms of oppression like racism, sexism and ageism might be
          present and active at the same time in a person's life.
        </p>
        <p>
          Everyday approaches to building equality tend to focus on one type of
          discrimination—for instance, sexism—and then work to address only that
          specific concern.
        </p>
        <p>
          But while the career of a young, white and able bodied woman might
          improve with gender equality protections, an older, black, disabled
          lesbian may continue to be hampered by racism, ageism, ableism and
          homophobia in the workplace.
        </p>
        <p>
          Intersectionality is about understanding and addressing all potential
          roadblocks to an individual or group's well-being.
        </p>

        <p className="small-text">
          By{" "}
          <a href="https://www.youtube.com/watch?v=O1islM0ytkE&t=1s">
            Peter Hopkins
          </a>
        </p>

        <details>
          <summary>Read the full transcript</summary>
          <div>
            <p>(Transcript)</p>
          </div>
        </details>

        <Drawing />

        <h2>Intersectionality + Design = Intersectional Design</h2>
        <p>
          At Intersectional Design Lab, we incorporate the concept of
          intersectionality into the design of information and communication
          technology (ICT).
        </p>

        <Drawing />

        <h2>How does discrimination affect design?</h2>
        <p>
          {" "}
          Discrimination can manifest in various forms, each impacting
          individuals and communities in unique ways. Understanding these types
          of discrimination is crucial for creating inclusive designs that cater
          to diverse needs. Here are some common types of discrimination:
        </p>

        <ul className="card-list">
          <li>
            <Card heading="Sex and Gender">Text</Card>
          </li>
          <li>
            <Card heading="Culture and Race">Text</Card>
          </li>
          <li>
            <Card heading="Disability">Text</Card>
          </li>
          <li>
            <Card heading="Social Class">Text</Card>
          </li>
          <li>
            <Card heading="Age">Text</Card>
          </li>
          <li>
            <Card heading="Physical Appearance">Text</Card>
          </li>
          <li>
            <Card heading="Psychological State">Text</Card>
          </li>
        </ul>
      </main>
    </>
  );
}
