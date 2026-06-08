import resourceCategoryData from "../../data/resources/resource-category.json";

export function ResourceCategory({ category }: { category: number | number[] }) {
    // Build a numeric-keyed lookup from the imported JSON (which has string keys).
    const categoryNames: Record<number, string> = Object.fromEntries(
        Object.entries(resourceCategoryData).map(([id, label]) => [Number(id), label])
    );

    const categoryValues = Array.isArray(category) ? category : [category];

    return (
        <ul className="resource-format-list">
            {categoryValues.map((categoryValue) => (
                <li key={categoryValue}>{categoryNames[categoryValue] ?? "Not categorised"}<span aria-hidden="true"></span></li>
            ))}
        </ul>
    );
}