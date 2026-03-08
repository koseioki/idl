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
  source?: string;
  language?: string;
  category?: number | number[];
};

type ResourceCardProps = {
  resource: Resource;
};



import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { ResourceFormat } from "./ResourceFormat";
import { Icon } from "../global/Icon";
import { resolveResourceImageUrl } from "../../utils/resolveResourceImageUrl";
import { ResourceCategory } from "./ResourceCategory";


const languageDisplayNames = new Intl.DisplayNames(["en"], {
  type: "language",
});

export function ResourceCard({ resource }: ResourceCardProps) {
  const path = `/learning-and-knowledge/resource-library/${resource.slug ?? resource.id ?? ""}`;
  const imageUrl = resolveResourceImageUrl(resource.image);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(path);
  };



  return (
    <article onClick={handleClick} id={resource.slug}>

      <div>{imageUrl ? <img src={imageUrl} alt="" /> : null}</div>

      <div>
        <NavLink to={path}>
          <div>
            <h2>{resource.title ?? "Untitled resource"} {resource?.language ? `(in ${languageDisplayNames.of(resource.language) ?? resource.language})` : null}</h2>
          {resource.subtitle ? <span>{resource.subtitle.slice(0, 70)}{resource.subtitle.length > 70 ? "..." : null}</span> : null}
          </div>
          <Icon />
        </NavLink>
        <p>
          {resource.author ? resource.author : null}{" "}
          {resource.year ? `(${resource.year})` : "(no date)"}
        </p>
        {/* <p>{resource.publisher ? resource.publisher : null}</p> */}
        <ResourceFormat format={resource.format ?? 0} />
        <ResourceCategory category={resource.category ?? 0} />
      </div>
    </article>
  );
}
