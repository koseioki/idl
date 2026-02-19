import { ResourceCard } from "./ResourceCard";
import resourcesData from "../../data/resources/resources.json";

type ReferenceResource = {
    id: string;
    name?: string;
    author?: string;
    image?: string;
};

type ReferencesProps = {
    ids: string[];
};

export function References({ ids }: ReferencesProps) {
    const resources = (Array.isArray(resourcesData)
        ? resourcesData
        : [resourcesData]) as ReferenceResource[];

    const selectedResources = ids
        .map((id) => resources.find((resource) => resource.id === id))
        .filter((resource): resource is ReferenceResource => Boolean(resource));

    if (selectedResources.length === 0) {
        return null;
    }

    return (
        <section>
            <h2>References</h2>
            <ul className="card-list resource-list">
                {selectedResources.map((resource) => (
                    <li key={resource.id}>
                        <ResourceCard resource={resource} />
                    </li>
                ))}
            </ul>
        </section>
    );
}