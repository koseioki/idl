import "./DictionaryEntry.css";
export function DictionaryEntry({
  word,
  pronunciation,
  partOfSpeech,
  definition,
  dictionarySource,
}: {
  word: string;
  pronunciation: string;
  partOfSpeech: string;
  definition: string;
  dictionarySource?: string;
}) {
  return (
    <section className="dictionary-entry">
      <dl>
        <dt>{word}</dt>
        <dd>{pronunciation}</dd>
        <dd>{partOfSpeech}</dd>
        <dd>{definition}</dd>

      </dl>
              {dictionarySource && <span>({dictionarySource})</span>}
    </section>
  );
}
