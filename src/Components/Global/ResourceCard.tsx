import "./ResourceCard.css";

type Resource = {
  ID?: string;
  id?: string;
  Name?: string;
  name?: string;
  Auther?: string;
  Author?: string;
  author?: string;
  Image?: string;
  image?: string;
};

type ResourceCardProps = {
  resource: Resource;
};

export function ResourceCard({ resource }: ResourceCardProps) {
  const title = resource.Name ?? resource.name ?? "Untitled resource";
  const author = resource.Auther ?? resource.Author ?? resource.author;
  const image = resource.Image ?? resource.image;

  return (
    <article>
      <div>
        {image ? <img src={image} alt="" /> : null}
      </div>
      <div>
        <h3>{title}</h3>
        {author ? <p>By {author}</p> : null}
        </div>
    </article>
  );
}
