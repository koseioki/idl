import "./ResourceCard.css";

type Resource = {
  id?: string;
  name?: string;
  slug?: string;
  author?: string;
  image?: string;
  year?: number;
  format?: number | number[];
  publisher?: string;
};

type ResourceCardProps = {
  resource: Resource;
};

import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

export function ResourceCard({ resource }: ResourceCardProps) {
  const path = `/learning-and-knowledge/resource-library/${resource.slug ?? resource.id ?? ""}`;

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(path);
  };
  return (
    <article onClick={handleClick}>

      <div>{resource.image ? <img src={resource.image} alt="" /> : null}</div>

      <div>
        <NavLink to={path}>
          <h2>{resource.name ?? "Untitled resource"}</h2>
        </NavLink>
        <p>
          {resource.author ? resource.author : null}{" "}
          {resource.year ? `(${resource.year})` : null}
        </p>
        <p>{resource.publisher ? resource.publisher : null}</p>
      </div>
    </article>
  );
}
