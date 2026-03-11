import { NavLink } from "react-router";
import { H1 } from "../../components/header-and-footer/H1";
import { InTextCitation } from "../../components/resources/InTextCitation";
import { References } from "../../components/resources/References";
export function HowDoWeStart() {
    return (
        <main id="main-content">
            <H1>How do we start?</H1>
         <p>
          At Intersectional Design Lab, we recommend starting by understanding
          the specific marginalisation and challenges people face, one by one.
          This builds empathy and helps you truly "put yourself in their shoes."
        </p>
        <h2>What we can do today</h2>
        <ul>
            <li>Listen to people around you who experience marginalisation and challenges.</li>
            <li>Read books and articles, watch videos, and search online to learn more; you can also explore the <NavLink to="/learning-and-resources/learning-and-knowledge/resource-library">resources we curate</NavLink>.</li>
            <li>Follow along <NavLink to="/research-projects">our research projects</NavLink> to see how these ideas are applied in practice.</li>
        </ul>

            <blockquote>
                <p>Realizing that you do have privileges—no matter who you are—does not mean feeling miserable and guilty for the rest of your life, just conscious: of both the advantages and the disadvantages that every one of us has because of the statuses we occupy, some by birth and some by choice.</p>
            </blockquote>
            <cite>
                <InTextCitation id="34567890" />
            </cite>
            <References ids={["34567890"]} />
            </main>
    )
}