import { useParams } from "react-router-dom";
import SeminarAndWorkshopsData from "../data/seminars-and-workshops/seminars-and-workshops.json";
import { H1 } from "../Components/Global/H1";
import "./EventDetail.css";
import { resolveResourceImageUrl } from "../utils/resolveResourceImageUrl";


export function EventDetail() {
  const { slug } = useParams();
  const event = SeminarAndWorkshopsData.find(
    (ev) => ev.slug === slug || ev.id === slug,
  );

  return (
    <main id="main-content">
      <H1>{event?.title}</H1>
      <p>
        {event?.date}, at {event?.place}
      </p>

<div style={{ display: "flex", flexDirection: "row", gap: "2rem", flexWrap: "wrap" }}>
      <div>
        <p>{event?.description}</p>

        <h2>Takeaways</h2>
        <ul>
          {event?.takeaways.map((takeaway, index) => (
            <li key={index}>{takeaway}</li>
          ))}
        </ul>
      </div>
      <div>
        <img
          className="event-image"
          src={resolveResourceImageUrl(event?.image)}
          alt={event?.["image-alt"]}
        />
      </div>
      </div>
    </main>
  );
}
