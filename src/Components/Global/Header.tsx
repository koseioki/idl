import { NavLink } from "react-router-dom";
import "./Header.css";

export function Header() {
  return (
    <header>
      <NavLink className="logo" to="/">
        Intersectional Design Lab
      </NavLink>

      <nav className="header-nav">
        <ul>
          <li>
            <NavLink to="/what-is-intersectional-design">
              What is Intersectional Design?
            </NavLink>
          </li>
          <li>
            <NavLink to="/design-in-practice">Design in Practice</NavLink>
          </li>
          <li>
            <NavLink to="/resources-and-events">Resources & Events</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
