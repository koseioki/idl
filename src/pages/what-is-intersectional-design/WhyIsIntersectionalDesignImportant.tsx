import { Note } from "../../components/global/Note";
import { H1 } from "../../components/header-and-footer/H1";
import { InTextCitation } from "../../components/resources/InTextCitation";
import { References } from "../../components/resources/References";
export function WhyIsIntersectionalDesignImportant() {
  return (
    <main id="main-content">
      <H1>Why is Intersectional Design important?</H1>
      <Note title="Summary">
        <p>
          Designing with an intersectional perspective is important because:
        </p>

        <ol>
          <li>
            <a href="#it-allows-you-to-identify-who-may-be-disadvantaged-by-the-design">
              It allows you to identify who may be disadvantaged by the design.
            </a>
          </li>
          <li>
            <a href="#it-helps-you-acknowledge-the-complexity-of-intersecting-forms-of-marginalization-and-make-well-considered-decisions">
              It helps you acknowledge the complexity of intersecting forms of
              marginalisation and make well-considered decisions.
            </a>
          </li>
          <li>
            <a href="#it-prevents-a-design-that-addresses-one-aspect-of-marginalisation-from-unintentionally-harming-other-marginalised-groups">
              It prevents a design that addresses one aspect of marginalisation
              from unintentionally harming other marginalised groups.
            </a>
          </li>
        </ol>
      </Note>

      <h2 id="it-allows-you-to-identify-who-may-be-disadvantaged-by-the-design">#1 It allows you to identify who may be disadvantaged by the design.</h2>
      <p>
        By acknowledging different types of marginalization, you can develop empathy and recognize design problems that may create challenges for certain users. You might ask yourself questions like:
      </p>
      <ul>
        <li>What if the user doesn't have a social security number?</li>
        <li>What if the user doesn't have a stable internet connection?</li>
        <li>What if the user is dyslexic?</li>
        <li>What if the user is transgender and in the process of transitioning?</li>
      </ul>
      <p>
        It's crucial to remember that people experience a wide range of circumstances, even if you don't always notice them. Adopting an intersectional perspective helps you realize that there are more forms of marginalization than you might initially consider.
      </p>

      <h2 id="it-helps-you-acknowledge-the-complexity-of-intersecting-forms-of-marginalization-and-make-well-considered-decisions">#2 It helps you acknowledge the complexity of intersecting forms of marginalization and make well-considered decisions.</h2>
      <p>
        More than two types of marginalisation can combine to create complex and unique challenges.
      </p>
      <p>By understanding that this happens, we can make well-considered design decisions. This equips you to address overlapping forms of marginalisation that you may not be able to tackle effectively if you focus on each one in isolation.

      </p>

      <h2 id="#it-prevents-a-design-that-addresses-one-aspect-of-marginalisation-from-unintentionally-harming-other-marginalised-groups">#3 It prevents a design that addresses one aspect of marginalisation from unintentionally harming other marginalised groups.</h2>
      <p>It is possible to create designs that address one aspect of marginalisation while causing disadvantages to others. For example: </p>
      <ul>
        <li>an artificial intelligence (AI)-powered translator can make communication easier for people who are not fluent in a language.</li>
      </ul>
      <p>However, these tools are also known to contribute to environmental harm and labour exploitation in the Global South <InTextCitation id="00048338" />.</p>
      <p>By developing a more comprehensive understanding of marginalisation, designers can minimise the unintended side effects that arise from solutions targeting only a single form of marginalisation.</p>


      <References ids={["00048338"]} />
    </main>
  );
}
