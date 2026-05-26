import { useParams } from "react-router-dom";
import Events from "../../data/events/events.json";
import { H1 } from "../../components/header-and-footer/H1";
import "./EventDetail.css";
// import { resolveResourceImageUrl } from "../../utils/resolveResourceImageUrl";
import { useEffect, useState } from "react";

export function EventDetail() {
  const { slug } = useParams();
  const event = Events.find((ev) => ev.slug === slug || ev.id === slug);
  // const imageUrl = resolveResourceImageUrl(event?.image);
  const formattedDate = event?.date
    ? new Date(event.date).toLocaleDateString([], {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  const [Content, setContent] = useState<React.ComponentType | null>(null);
  useEffect(() => {
      import(`../../data/events/${event?.slug}.mdx`).then((module) => {
        setContent(() => module.default);
      });

  }, [event]);

  return (
    <main id="main-content" className="event-detail">
      <H1>{event?.title}</H1>
      <p>
        {formattedDate}
        {formattedDate ? ", at " : ""}
        {event?.place}
      </p>

      <p>{event?.description}</p>

      {Content && (
        <div style={{ marginTop: "2rem" }}>
          <Content />
        </div>
      )}
    </main>
  );
}
