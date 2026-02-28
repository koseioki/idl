import { Note } from "../../components/global/Note";
import { H1 } from "../../components/header-and-footer/H1";
import { InTextCitation } from "../../components/resources/InTextCitation";
import { References } from "../../components/resources/References";
import { NavLink } from "react-router-dom";
export function WhatIsIntersectionalDesign() {
  const lastUpdated = "2026-02-28";

  return (
    <>
      <head>
        <title>
          What is Intersectional Design? - Intersectional Design Lab
        </title>
      </head>
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
          Intersectional design is an idea that combines intersectionality and
          design.
        </p>
        <p>
          Current approaches to inclusive design—such as accessible design,
          trauma-informed design, and easy-to-use design—often focus on just one
          perspective or “axis” of identity or marginalisation, missing those
          with intersecting factors <InTextCitation id="23459734" />.
        </p>
        <p>
          Intersectional design aims to incorporate as many axes as possible at
          the same time, to create digital spaces and surroundings that are
          truly inclusive for everyone.
        </p>

        <h2>What is Intersectionality?</h2>
        <p>
          Intersectionality is a way of understanding social relations by
          examining intersecting forms of discrimination.
        </p>
        <p>
          <NavLink to="what-is-intersectionality">Read more about "What is Intersectionality?"</NavLink>
        </p>

        <h2>Why is Intersectional Design Important?</h2>
        <NavLink to="/">
          Read more about "Why is Intersectional Design Important?"
        </NavLink>
        <h2>How Do We Start?</h2>
        <p>
          At Intersectional Design Lab, we recommend starting by understanding
          the specific marginalisation and challenges people face, one by one.
          This builds empathy and helps you truly "put yourself in their shoes."
        </p>
        <NavLink to="/">Read more about "How Do We Start?"</NavLink>

        {/* <h2>What is Intersectionality?</h2>
        <iframe
     
          className="youtube-video"
          src="https://www.youtube-nocookie.com/embed/O1islM0ytkE?si=XNP-7wdXZfmkJfNx"
          title="YouTube video player"
           allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
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
   

        <InTextCitation id="23459734" />
        <details>
          <summary>Continue reading transcript</summary>
          <div>
            <p>
              But it's not as simple as just adding up oppressions and
              addressing each one individually.
            </p>

            <p>
              Racism, sexism, and ableism exist on their own. But when combined,
              they compound and transform the experience of oppression.
            </p>

            <p>
              Intersectionality acknowledges that unique oppressions exist, but
              is also dedicated to understanding how they change in combination.
            </p>

            <p>
              The roots of intersectionality lie within the black feminist
              movement, with legal scholar Kimberlé Crenshaw originating the
              term.
            </p>

            <p>
              Crenshaw felt that anti-racist and feminist movements were both
              overlooking the unique challenges faced by black women.
            </p>

            <p>
              She stated that legislation about race is framed to protect black
              men, and legislation about sexism is understood to protect white
              women.
            </p>

            <p>
              So simply combining racism and sexism together does not therefore
              protect black women.
            </p>

            <p>
              Intersectional theory is now applied across a range of social
              divisions and also to understandings of domination such as those
              associated with whiteness, masculinity and heterosexuality.
            </p>

            <p>
              Intersectionality is not only about multiple identities, and it's
              not a simple answer to solving problems around equality and
              diversity.
            </p>

            <p>
              It is, however, an essential framework as we truly engage with
              issues around privilege and power, and work to bring them into the
              open.
            </p>

            <p>
              Intersectionality means listening to others, examining our own
              privileges, and asking questions about who may be excluded or
              adversely affected by our work.
            </p>

            <p>
              As importantly, it means taking measurable actionto invite,
              include and centre the voices and work of marginalised
              individuals.
            </p>
          </div>
        </details>
        <h2>Intersectionality + Design = Intersectional Design</h2>
        <p>
          At Intersectional Design Lab, we incorporate the concept of
          intersectionality into the design of information and communication
          technology (ICT).
        </p>
       */}
        <References ids={["23459734"]} />
      </main>
    </>
  );
}
