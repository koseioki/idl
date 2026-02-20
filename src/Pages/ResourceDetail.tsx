import resourcesData from "../data/resources/resources.json";
import "./ResourceDetail.css";
import { useParams } from "react-router-dom";
import { H1 } from "../Components/Global/H1";

export function ResourceDetail() {
  const { slug } = useParams();
  const resource = resourcesData.find(
    (res) => res.slug === slug || res.id === slug,
  );

  return (
    <main id="main-content">
      <H1>{resource?.name ?? "Resource Detail"}</H1>
      {resource?.image ? <a href={resource.source}><img src={resource.image} alt="Open resource" /></a> : null}

      <dl>
        {resource?.author ? <dt>Author:</dt> : null}
        {resource?.author ? <dd>{resource.author}</dd> : null}

        {resource?.year ? <dt>Year:</dt> : null}
        {resource?.year ? <dd>{resource.year}</dd> : null}

        {resource?.publisher ? <dt>Publisher:</dt> : null}
        {resource?.publisher ? <dd>{resource.publisher}</dd> : null}

        {resource?.source ? <dt>Source:</dt> : null}
        {resource?.source ? (
          <dd>
            <a href={resource.source}>{resource.source}</a>
          </dd>
        ) : null}
      </dl>
    </main>
  );
}
