import { H1 } from "../../components/header-and-footer/H1";
import EventsData from "../../data/events/events.json";
import { EventCard } from "../../components/global/EventCard";
export function Events() {


  return (
   
      <main id="main-content">
        <H1>
          Events
        </H1>
        <h2>Upcoming Events</h2>
        <ul>
          <li>Designing Intersectionally - 23 June 2026, at <a href="https://www.adesso.de/">adesso (in German)</a></li>
        </ul>
        <h2>Past Events</h2>
        <ul className="card-list">
          {EventsData.map((event) => (
            <EventCard
              key={event.id}
              title={event.title}
              date={event.date}
              place={event.place}
              slug={event.slug}
              description={event.description}
            />
          ))}
        </ul>
      </main>
  );
}
