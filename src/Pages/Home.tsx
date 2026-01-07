import { NavLink } from "react-router-dom";
import "./Home.css";

// import { Icon } from "../Components/Global/Icon";
import { Card } from "../Components/Global/Card";
import { Drawing } from "../Components/Global/Drawing";
// import TwoPeopleCraftingICT from "../assets/drawings/two-people-crafting-ict.svg";

export function Home() {
  return (
    <main>
      <h1>How can we make the digital world inclusive?</h1>
      <p>
        At Intersectional Design Lab, we research and share design practices for
        Information and Communication Technologies (ICT) from an{" "}
        <i>intersectional perspective</i> to make the digital space a more
        inclusive place for everyone.
      </p>
      <NavLink to="/what-is-intersectional-design">
        Read more about "What is Intersectional Design?"
      </NavLink>
      {/* <img src={TwoPeopleCraftingICT} alt="Two people crafting ICT" /> */}
      <Drawing name="TwoPeopleCraftingICT" />


      <h2>What We Offer</h2>

      <ul className="card-list">
        <li>
          <Card heading="Design in Practice Guide">
            <p>
              We share practical design guides for each design element from an
              intersectional perspective.
            </p>
            <Drawing />
          </Card>
        </li>
        <li>
          <Card heading="Seminars & Workshops">
            <p>
              We host seminars, webinars, workshops, talks, and similar events.
            </p>
            <Drawing />
          </Card>
        </li>
        <li>
          <Card heading="Resource Library">
            <p>
              We share our curated research resources, including books, videos,
              courses, and more.
            </p>
            <Drawing />
          </Card>
        </li>
      </ul>
      {/* 
      <ul className="offer-list">
        <li>
          <article>
            <h3>
              <NavLink to="/">
                <span>Design in Practice Guide</span>
                <Icon />
              </NavLink>
            </h3>
            <p>
              We share practical design guides for each design element from an
              intersectional perspective.
            </p>
            <Illustration />
          </article>
        </li>
        <li>
          <article>
            <h3>
              <NavLink to="/">
                Seminars & Workshops
                <Icon />
              </NavLink>
            </h3>

            <p>
              We host seminars, webinars, workshops, talks, and similar events.
            </p>
            <Illustration />
          </article>
        </li>
        <li>
          <article>
            <h3>
              <NavLink to="/">
                Resource Library
                <Icon />
              </NavLink>
            </h3>
            <p>
              We share our curated research resources, including books, videos,
              courses, and more.
            </p>
            <Illustration />
          </article>
        </li>
      </ul> */}
    </main>
  );
}
