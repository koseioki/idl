import './Note.css';
export function Note({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <section className="note-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}