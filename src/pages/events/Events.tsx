import { H1 } from "../../components/header-and-footer/H1";
import EventsData from "../../data/events/events.json";
import { EventCard } from "../../components/global/EventCard";
export function Events() {


  // sort past events and upcoming events by date
  const pastEvents = EventsData.filter((event) => new Date(event.date) < new Date()).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const upcomingEvents = EventsData.filter((event) => new Date(event.date) >= new Date()).sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
   
      <main id="main-content">
        <H1>
          Events
        </H1>
        <h2>Upcoming Events</h2>
        <ul className="card-list">
          {/* Show upcoming events if they exist */}
          {upcomingEvents.length > 0 ? (
            upcomingEvents.map((event) => (
              <EventCard
                key={event.id}
                title={event.title}
                date={event.date}
                place={event.place}
                slug={event.slug}
                description={event.description}
                imgUrl={event.imageUrl}
              />
            ))
          ) : (
            <p>There is no upcoming events yet.</p>
          )}
        </ul>

        <h2>Past Events</h2>
        <ul className="card-list">
          {pastEvents.length > 0 ? (
            pastEvents.map((event) => (
              <EventCard
                key={event.id}
                title={event.title}
                date={event.date}
                place={event.place}
                slug={event.slug}
                description={event.description}
                imgUrl={event.imageUrl}
              />
            ))
          ) : (
            <p>There are no past events.</p>
          )}
        </ul>
      </main>
  );
}
