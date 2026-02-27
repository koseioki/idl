import { NavLink } from "react-router-dom";
import { H1 } from "../../components/header-and-footer/H1";
import seminarsAndWorkshopsData from "../../data/seminars-and-workshops/seminars-and-workshops.json";
export function SeminarsAndWorkshops() {


  return (
   
      <main id="main-content">
        <H1>
          Seminars and Workshops
        </H1>
        <h2>Upcoming Events</h2>
        <p>There are no upcoming events yet.</p>
        <h2>Past Events</h2>
        <ul>
          {seminarsAndWorkshopsData.map((event) => (
            <li key={event.id}>
              <NavLink to={`/learning-and-knowledge/seminars-and-workshops/${event.slug}`}>
                {event.title} - {new Date(event.date).toLocaleDateString([], { year: 'numeric', month: 'long', day: 'numeric' })}
              </NavLink>
            </li>
          ))}
        </ul>
      </main>
  );
}
