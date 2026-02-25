import { H1 } from "../Components/Global/H1";
import { InTextCitation } from "../Components/Resources/InTextCitation";
import { References } from "../Components/Resources/References";

export function MarginalisationAndDesign() {
  return (
    <>
      <main id="main-content">
        <H1>Marginalisation and Design</H1>
        <p>Last updated: 25-02-2026</p>
  

        <h2>
          Project Background
        </h2>
        <p>Various forms of marginalisation (such as gender, disability, and other social factors) affect people’s day-to-day lives and their use of Information and Communication Technologies (ICT).</p>
        <p>These inequalities can lead to digital exclusion and perpetuate a cycle of increasing digital disadvantage over time <InTextCitation id="56789012" />, <InTextCitation id="34567893" />.</p>

        <h2>
          Project Goals
        </h2>
        <ul>
          <li>
            Understand what kinds of marginalisation exist.
          </li>
          <li>
            Examine how they affect day-to-day life.
          </li>
          <li>
            Investigate how affected individuals interact with ICT and the challenges they face.

          </li>
        </ul>
      
      <References ids={["56789012", "34567893"]} />

      </main>
    </>
  );
}
