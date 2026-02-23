import { H1 } from "../Components/Global/H1";
import { ResourceCard } from "../Components/Resources/ResourceCard";
import resourcesData from "../data/resources/resources.json";

export function ResourceLibrary() {
  const resources = Array.isArray(resourcesData)
    ? resourcesData
    : [resourcesData];

  return (
    <main id="main-content">
      <H1>Resource Library</H1>
      <p>We share our curated research resources, including books, videos, courses, and more.</p>
      <p>All resources are reviewed by the Intersectional Design Lab.</p>

      {resources.length > 0 ? (
        <ul className="resource-list">
          {resources.map((resource, index) => {
            const id = resource.id ?? `${resource.title ?? "resource"}-${index}`;

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
