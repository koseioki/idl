import { H1 } from "../Components/Global/H1";
import { ResourceCard } from "../Components/Global/ResourceCard";
import resourcesData from "../data/resources/resources.json";

export function ResourceLibrary() {
  const resources = Array.isArray(resourcesData)
    ? resourcesData
    : [resourcesData];

  return (
    <main id="main-content">
      <H1>Resource Library</H1>

      {resources.length > 0 ? (
        <ul className="resource-list">
          {resources.map((resource, index) => {
            const id = resource.id ?? `${resource.name ?? "resource"}-${index}`;

            return (
              <li key={id}>
                <ResourceCard resource={resource} />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No resources available yet.</p>
      )}
    </main>
  );
}
