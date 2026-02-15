import AboutImage from "../assets/img/about.jpg";
import { useEffect, useRef } from "react";
export function About() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.focus();
    }
  }, []);
  return (
    <>
      <head>
        <title>About - Intersectional Design Lab</title>
      </head>
      <main id="main-content">
        <h1 ref={headingRef} tabIndex={-1}>
          About
        </h1>
        <h2>Intersectional Design Lab</h2>
        <p>
          Intersectional Design Lab is a non-profit initiative, where we
          research, share, and experiment with Information and Communication
          Technologies (ICT) design practices for designers, developers, and
          anyone interested, from an intersectional perspective.
        </p>
        <p>
          Intersectional Design Lab aims to make the digital space a more
          inclusive and functional place for everyone—regardless of race,
          gender, sexual orientation, social class, disability, and
          more—especially for those who are often ignored or overlooked in
          society.
        </p>

        <h3>The 3 core activities of Intersectional Design Lab</h3>

        <ol>
          <li>
            <h4>Research</h4>
            <p>
              We study how intersectionality affects design and explore ways to
              make digital spaces more intersectionally inclusive. Our research
              involves reviewing academic papers, books, and other media, as
              well as conducting fieldwork.
            </p>
          </li>

          <li>
            <h4>Share</h4>
            <p>
              We share our findings with designers, developers, and anyone
              interested—through articles, talks, webinars, and more—in order to
              raise awareness and provide practical tools for integrating
              intersectionality into ICT design.
            </p>
          </li>
          <li>
            <h4>Experiment</h4>
            <p>
              We invite everyone to explore intersectional design through
              discussion, reflection, and hands-on experimentation with the
              ideas and insights we share.
            </p>
          </li>
        </ol>

        <h2>Team</h2>
        <p>Intersectional Design Lab is run by Kosei Oki.</p>
        <p>
          Kosei has an educational background in Applied Informatics, UX design,
          and Intersectional Studies. He has worked as an engineer at
          a Danish tech agency, and has been involved with several NGOs in England and Denmark,
          focusing on multicultural self-integration, social justice, disability
          rights, and Queer communities.
        </p>
        <p>
          Drawing on these experiences, he works on making the world a better
          place for everyone through design. He is also an IAAP Certified
          Professional in Accessibility Core Competencies (CPACC).
        </p>
        <div>
          <img
            src={AboutImage}
            className="image-frame"
            alt="Kosei presenting to a classroom, smiling and prompting students to raise their hands. The presentation slide reads “Native elements work just better”, and shows a good code example using a simple button element alongside a bad one using a div tag with many attributes, photo."
          />
        </div>
      </main>
    </>
  );
}
