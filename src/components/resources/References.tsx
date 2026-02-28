import { ResourceCard } from "./ResourceCard";
import "./References.css";
import resourcesData from "../../data/resources/resources.json";

type ReferenceResource = {
  id: string;
  name?: string;
  author?: string;
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

  if (selectedResources.length === 0) {
    return null;
  }

  return (
    <section className="references">
      <details>
        <summary>
          <h2><span aria-hidden="true"></span>References cited on this page</h2>
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
