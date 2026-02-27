import { H1 } from "../../components/header-and-footer/H1";
import { InTextCitation } from "../../components/resources/InTextCitation";
import { References } from "../../components/resources/References";

export function MarginalisationAndDesign() {

  const lastUpdated="2026-02-26";
  return (
    <>
      <main id="main-content">
        <H1>Marginalisation and Design</H1>
        <p>Last updated: {new Date(lastUpdated).toLocaleDateString([], { year: 'numeric', month: 'long', day: 'numeric' })}</p>
  

        <h2>
          Project Background
        </h2>
        <p>Various forms of marginalisation (such as gender, disability, digital competencies, and other social factors) affect people’s day-to-day lives and their use of Information and Communication Technologies (ICT).
        These inequalities can lead to digital exclusion and perpetuate a cycle of increasing digital disadvantage over time <InTextCitation id="56789012" />, <InTextCitation id="34567893" />, <InTextCitation id="98765432" />.</p>

        <h2>
          Project Goals
        </h2>
        <ul>
          <li>
            Understand what kinds of marginalisation exist.
          </li>
          <li>
            Examine each axis of marginalisation and how it affects their overall day-to-day life.
          </li>
          <li>
            Investigate how affected individuals interact with ICT and the challenges they face.
          </li>
        </ul>
      
      <References ids={["56789012", "34567893", "98765432"]} />

      </main>
    </>
  );
}
