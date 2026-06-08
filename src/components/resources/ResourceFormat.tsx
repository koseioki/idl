import resourceFormatData from "../../data/resources/resource-format.json";


export function ResourceFormat({ format }: { format: number | number[] }) {
    // Build a numeric-keyed lookup from the imported JSON (string keys -> labels).
    const formatNames: Record<number, string> = Object.fromEntries(
        Object.entries(resourceFormatData).map(([id, label]) => [Number(id), label])
    );

    const formatValues = Array.isArray(format) ? format : [format];

    return (
        <ul className="resource-format-list">
            {formatValues.map((formatValue) => (
                <li key={formatValue}>{formatNames[formatValue] || "Not specified"}<span aria-hidden="true"></span></li>
            ))}
        </ul>
    );

}