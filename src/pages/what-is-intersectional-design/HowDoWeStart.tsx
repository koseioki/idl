import { NavLink } from "react-router";
import { H1 } from "../../components/header-and-footer/H1";
import { InTextCitation } from "../../components/resources/InTextCitation";
import { References } from "../../components/resources/References";
export function HowDoWeStart() {
  return (
    <main id="main-content">
      <H1>How do we start?</H1>
      <p className="lead-text">
        You can start by examining your solution and asking small, practical
        questions.
      </p>

      <p>
        You don't need to be an expert to take the first step toward creating
        inclusive digital experiences.
      </p>

      <h2>Reflect on your design</h2>
      <p>Some questions you might ask yourself:</p>
      <ul>
        <li>
          Can an older adult with low digital skills without a Social Security
          number use this solution?
        </li>
        <li>
          Can a person who is blind and transgender, and in the process of
          transitioning, complete this form?
        </li>
        <li>
          Can a person who is dyslexic and hard of hearing benefit from this
          audio-visual content?
        </li>
        <li>
          Can someone with a low income and slow internet connection use this
          app?
        </li>
      </ul>

      <h2>Learn and explore</h2>
      <p>
        There are many ways to deepen your understanding of marginalisation:
      </p>

      <ul>
        <li>
          Listen to people around you who experience marginalisation and
          challenges.
        </li>
        <li>
          Read books and articles, watch videos, and search online to learn
          more; you can also explore the{" "}
          <NavLink to="/learning-and-resources/learning-and-knowledge/resource-library">
            resources we curate
          </NavLink>
          .
        </li>
        <li>
          Follow along{" "}
          <NavLink to="/research-projects">our research projects</NavLink> to
          see how these ideas are applied in practice.
        </li>
      </ul>

      <blockquote>
        <p>
          Realizing that you do have privileges—no matter who you are—does not
          mean feeling miserable and guilty for the rest of your life, just
          conscious: of both the advantages and the disadvantages that every one
          of us has because of the statuses we occupy, some by birth and some by
          choice.
        </p>
      </blockquote>
      <cite>
        <InTextCitation id="34567890" />
      </cite>
      <References ids={["34567890"]} />
    </main>
  );
}
