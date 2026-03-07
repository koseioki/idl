export function ResourceFormat({ format }: { format: number | number[] }) {
    const formatNames: Record<number, string> = {
        1: "Book",
        2: "eBook",
        3: "Video",
        4: "Article",
        5: "Internet Source"
    };

    const formatValues = Array.isArray(format) ? format : [format];

    return (
        <ul className="resource-format-list">
            {formatValues.map((formatValue) => (
                <li key={formatValue}>{formatNames[formatValue] || "Unknown"}<span aria-hidden="true"></span></li>
            ))}
        </ul>
    );

}