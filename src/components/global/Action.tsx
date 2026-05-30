import "./Action.css";
export function Action({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section className="action">
      <div className="action-heading">
        <h2>{heading}</h2>
        <span className="action-heading-arrow" aria-hidden="true">
        </span>
      </div>
      <div className="action-content">{children}</div>
    </section>
  );
}
