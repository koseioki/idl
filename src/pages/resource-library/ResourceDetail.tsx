import resourcesData from "../../data/resources/resources.json";
import "./ResourceDetail.css";
import { useParams } from "react-router-dom";
import { H1 } from "../../components/header-and-footer/H1";
import { ResourceFormat } from "../../components/resources/ResourceFormat";
import { resolveResourceImageUrl } from "../../utils/resolveResourceImageUrl";
import { Note } from "../../components/global/Note";

export function ResourceDetail() {
  const { slug } = useParams();
  const resource = resourcesData.find(
    (res) => res.slug === slug || res.id === slug,
  );
  const imageUrl = resolveResourceImageUrl(resource?.image);

  return (
    <main id="main-content">
      <div className="resource-detail-wrapper">
        <H1>{resource?.title ?? "Resource Detail"}</H1>
        
        {resource?.subtitle ? (
          <span className="resource-subtitle">{resource.subtitle}</span>
        ) : null}
    

        {resource?.note ? (
          <Note title="Note:">{resource.note}</Note>
        ) : null}


        <div>
          {imageUrl ? (
            <a href={resource.source}>
              <img src={imageUrl} alt="Open resource" />
            </a>
          ) : null}
        </div>

        <h2>Details</h2>
        <dl>
          {resource?.format ? <dt>Format:</dt> : null}
          {resource?.format ? (
            <dd>
              <ResourceFormat format={resource.format} />
            </dd>
          ) : null}

          {resource?.author ? <dt>Author:</dt> : null}
          {resource?.author ? <dd>{resource.author}</dd> : null}

          {resource?.edition ? <dt>Edition:</dt> : null}
          {resource?.edition ? <dd>{resource.edition}</dd> : null}

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
      </div>
    </main>
  );
}
