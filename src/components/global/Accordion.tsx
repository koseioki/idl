import './Accordion.css';
export function Accordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
    return (
        <details className="accordion">
            <summary>{title}</summary>
            <div>{children}</div>
        </details>
        );
}