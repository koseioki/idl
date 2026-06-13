import resourcesData from "../../data/resources/resources.json";

export function InTextCitation({ id }) {
    const resource = resourcesData.find((r) => r.id === id);
    if (!resource) {
        return null;
    }

    return (
        <a href={`#${resource.slug}`}>
            ({resource.authorShort}, {resource.year})
        </a>
    );
}