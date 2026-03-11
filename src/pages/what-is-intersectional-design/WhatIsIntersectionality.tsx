import { H1 } from "../../components/header-and-footer/H1";
import { InTextCitation } from "../../components/resources/InTextCitation";
import { References } from "../../components/resources/References";
import { DictionaryEntry } from "../../components/global/DictionaryEntry";

export function WhatIsIntersectionality() {

  return (
    <main id="main-content">
      <H1>What is Intersectionality?</H1>

      <h2>Definition</h2>
      <DictionaryEntry
        word="intersectionality"
        pronunciation="ˌɪntəˌsɛkʃəˈnalɪti"
        partOfSpeech="noun"
        definition="the interconnected nature of social categorizations such as race, class, and gender as they apply to a given individual or group, regarded as creating overlapping and interdependent systems of discrimination or disadvantage."
        dictionarySource="Oxford Dictionary of English"
      />

      <h2>In other words...</h2>
      <p>
        Intersectionality is a way of understanding social relations by
        examining intersecting forms of discrimination.
      </p>
      <p>
        This means acknowledging that social systems are complicated and that
        many forms of oppression—like racism, sexism, and ageism—might be
        present and active at the same time in a person's life.
      </p>
      <p>
        Everyday approaches to building equality tend to focus on one type of
        discrimination—for instance, sexism—and then work to address only that
        specific concern.
      </p>
      <p>
        [...] Intersectionality is about understanding and addressing all
        potential roadblocks to an individual or group's well-being{" "}
        <InTextCitation id="23459734" />.
      </p>
      <iframe
        className="youtube-video"
        src="https://www.youtube-nocookie.com/embed/O1islM0ytkE?si=XNP-7wdXZfmkJfNx"
        title="YouTube video player"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
      />

      <References ids={["23459734"]} />
    </main>
  );
}
