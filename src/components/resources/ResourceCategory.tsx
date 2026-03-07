export function ResourceCategory({ category }: { category: number | number[] }) {
    const categoryNames: Record<number, string> = {
        99: "ICT Inclusion",
        100: "Intersectionality",
        101: "Race, Ethnicity, and Religion",
        102: "Geographical Location and Migration Status",
        103: "Age, Disability, and Health",
        104: "Socioeconomic Status",
        105: "Gender and Sex"
    };


    const categoryValues = Array.isArray(category) ? category : [category];

    return (
        <ul className="resource-format-list">
            {categoryValues.map((categoryValue) => (
                <li key={categoryValue}>{categoryNames[categoryValue] || "Unknown"}<span aria-hidden="true"></span></li>
            ))}
        </ul>
    );
}