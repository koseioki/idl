import "./ResourceCard.css";

type Resource = {
  id?: string;
  title?: string;
  subtitle?: string;
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
import { ResourceFormat } from "./ResourceFormat";
import { Icon } from "../Global/Icon";
import { resolveResourceImageUrl } from "../../utils/resolveResourceImageUrl";

export function ResourceCard({ resource }: ResourceCardProps) {
  const path = `/learning-and-knowledge/resource-library/${resource.slug ?? resource.id ?? ""}`;
  const imageUrl = resolveResourceImageUrl(resource.image);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(path);
  };
  return (
    <article onClick={handleClick}>

      <div>{imageUrl ? <img src={imageUrl} alt="" /> : null}</div>

      <div>
        <NavLink to={path}>
          <div>
            <h2>{resource.title ?? "Untitled resource"}</h2>
          {resource.subtitle ? <span>{resource.subtitle}</span> : null}
          </div>
          <Icon />
        </NavLink>
        <p>
          {resource.author ? resource.author : null}{" "}
          {resource.year ? `(${resource.year})` : null}
        </p>
        {/* <p>{resource.publisher ? resource.publisher : null}</p> */}
        <ResourceFormat format={resource.format ?? 0} />
      </div>
    </article>
  );
}
