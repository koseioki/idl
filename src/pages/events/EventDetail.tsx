import { useParams } from "react-router-dom";
import Events from "../../data/events/events.json";
import { H1 } from "../../components/header-and-footer/H1";
import "./EventDetail.css";
import { resolveResourceImageUrl } from "../../utils/resolveResourceImageUrl";

export function EventDetail() {
  const { slug } = useParams();
  const event = Events.find(
    (ev) => ev.slug === slug || ev.id === slug,
  );
  const imageUrl = resolveResourceImageUrl(event?.image);
  const formattedDate = event?.date
    ? new Date(event.date).toLocaleDateString([], {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <main id="main-content">
      <H1>{event?.title}</H1>
      <p>
        {formattedDate}{formattedDate ? ", at " : ""}{event?.place}
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        <div>
          <p>{event?.description}</p>

          <h2>Takeaways</h2>
          <ul>
            {event?.takeaways.map((takeaway, index) => (
              <li key={index}><p>{takeaway}</p></li>
            ))}
          </ul>
        </div>
        <div>
          <img
            className="event-image"
            src={imageUrl}
            alt={event?.["image-alt"]}
          />
        </div>
      </div>
    </main>
  );
}
