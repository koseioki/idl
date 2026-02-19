import "./ResourceCard.css";

type Resource = {
  id?: string;
  name?: string;
  slug?: string;
  author?: string;
  image?: string;
};

type ResourceCardProps = {
  resource: Resource;
};

export function ResourceCard({ resource }: ResourceCardProps) {
  const title =  resource.name ?? "Untitled resource";
  const author = resource.author;
  const image = resource.image;

  return (
    <article>
      <div>
        {image ? <img src={image} alt="" /> : null}
      </div>
      <div>
        <a href={`/resources/${resource.slug ?? resource.id ?? ""}`}>
        <h2>{title}</h2>
        </a>
        {author ? <p>By {author}</p> : null}
        </div>
    </article>
  );
}
