import { NavLink } from "react-router-dom";
import "./Home.css";
export function Home() {
  return (
    <main>
      <h1>How can we make the digital world inclusive?</h1>
      <p>
        At Intersectional Design Lab, we research and share design practices for
        Information and Communication Technologies (ICT) to make the digital
        space a more inclusive place for everyone.
      </p>
      <NavLink to="/what-is-intersectional-design">
        Read more about "What is Intersectional Design?"
      </NavLink>
      <h2>What We Offer</h2>
      <ul className="offer-list">
        <li>
          <h3><NavLink to="/">Design in Practice Guide</NavLink></h3>
          <p>
            We share practical design guides for each design element from an
            intersectional perspective.
          </p>
        </li>
        <li>
          <h3><NavLink to="/">Seminars & Workshops</NavLink></h3>
          <p>
            We host seminars, webinars, workshops, talks, and similar events.
          </p>
        </li>
        <li>
          <h3><NavLink to="/">Resource Library</NavLink></h3>
          <p>
            We share our curated research resources, including books, videos,
            courses, and more.
          </p>
        </li>
      </ul>
    </main>
  );
}
