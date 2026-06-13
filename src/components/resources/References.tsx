import { ResourceCard } from "./ResourceCard";
import "./References.css";
import resourcesData from "../../data/resources/resources.json";

type ReferenceResource = {
  id: string;
  name?: string;
  author?: string;
  authorShort?: string;
  image?: string;
  year?: number;
  publisher?: string;
  source?: string;
};

type ReferencesProps = {
  ids: string[];
};

export function References({ ids }: ReferencesProps) {
  const resources = (
    Array.isArray(resourcesData) ? resourcesData : [resourcesData]
  ) as ReferenceResource[];

  const selectedResources = ids
    .map((id) => resources.find((resource) => resource.id === id))
    .filter((resource): resource is ReferenceResource => Boolean(resource));
    // sort resources by resource.authorShort, then by year
    selectedResources.sort((a, b) => {
      if (a.authorShort && b.authorShort) {
        const authorComparison = a.authorShort.localeCompare(b.authorShort);
        if (authorComparison !== 0) {
          return authorComparison;
        }
      } else if (a.authorShort) {
        return -1;
      } else if (b.authorShort) {
        return 1;
      }

      if (a.year && b.year) {
        return a.year - b.year;
      } else if (a.year) {
        return -1;
      } else if (b.year) {
        return 1;
      }

      return 0;
    });
    

  if (selectedResources.length === 0) {
    return null;
  }

  return (
    <section className="references">
      <details>
        <summary>
          <h2><span aria-hidden="true"></span>References</h2>
        </summary>
        <ul className="resource-list">
          {selectedResources.map((resource) => (
            <li key={resource.id}>
              <ResourceCard resource={resource} />
            </li>
          ))}
        </ul>
      </details>
    </section>
  );
}
