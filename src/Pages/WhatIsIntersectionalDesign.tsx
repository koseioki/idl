import { H1 } from "../Components/Global/H1";
import { References } from "../Components/Resources/References";
export function WhatIsIntersectionalDesign() {
  return (
    <>
      <head>
        <title>
          What is Intersectional Design? - Intersectional Design Lab
        </title>
      </head>
      <main id="main-content">
        <H1>What is Intersectional Design?</H1>
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
          // allowfullscreen
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
        {/* <Drawing /> */}
        <References ids={["23459734"]} />
      </main>
    </>
  );
}
