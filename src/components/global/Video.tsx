import './Video.css';
export function Video({ src, title, children }: { src: string; title: string; children?: React.ReactNode }) {
  return (
    <section className="video-container">
      <h2>Video: {title}</h2>
      <iframe
        className="video"
        src={src}
        title="YouTube video player"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
      />
      {children}
    </section>
  );
}
