import { H1 } from "../../components/header-and-footer/H1";
import { InTextCitation } from "../../components/resources/InTextCitation";
import { References } from "../../components/resources/References";
export function WhyIsIntersectionalDesignImportant() {
  return (
    <main id="main-content">
      <H1>Why is Intersectional Design important?</H1>
      <p className="lead-text">
        Because traditional approaches to equality can leave some people
        unsupported, especially those who do not fully fit into a single
        category.
      </p>

      <h2>Examples of intersecting cases</h2>
      <h3>A screen reader user with low digital skills</h3>
      <p>
        Developers ensure that people can interact with components with
        assistive technologies like screen readers.
      </p>
      <p>
        At the same time, content editors and UX designers may simplify content
        and flows to support people who are less familiar with technology.
      </p>
      <p>
        However, even if a component is technically operable, it can still
        require users to understand complex interaction patterns.
      </p>
      <p>
        For someone using a screen reader, especially someone who has recently
        become blind and is still learning how to use technology, this can make
        it difficult to complete a task.
      </p>
      <p>Or the person may give up on using the technology altogether.</p>
      <p>
        In this case, accessibility and usability are addressed separately, but
        not effectively together.
      </p>

      <h3>Helpful technology that causes harm to others</h3>
      <p>
        AI-powered translation tools can make communication easier for people
        who are not fluent in a language.
      </p>
      <p>
        However, these technologies are also linked to environmental harm and
        labour exploitation in the Global South <InTextCitation id="00048338" />
        .
      </p>
      <p>
        As a result, while they improve accessibility for some users, they may
        negatively impact others—often people who are already marginalised.
      </p>

      <h2>Not about finding the "right" answer</h2>
      <p>
        Intersectional design is not always about finding a single "right"
        answer, and is <b>never</b> about identifying a "bad guy".
      </p>
      <p>
        These situations are often complex, with no immediate solution that
        works for everyone.
      </p>
      <p>
        Instead, it helps you recognise and understand overlapping forms of
        marginalisation, so you can make thoughtful, informed decisions.
      </p>
      <p>
        By acknowledging this complexity, you are better equipped to design in
        ways that consider multiple perspectives—especially those that might be
        overlooked when issues are addressed one by one.
      </p>

      <References ids={["00048338"]} />
    </main>
  );
}
