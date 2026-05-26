// import { NavLink } from "react-router-dom";
import "./Footer.css";
export function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <h2 className="sr-only">Site footer</h2>
        <h3>Intersectional Design Lab (Beta)</h3>
        <ul>
          <li><a href="mailto:hello@intersectionaldesignlab.org">
            hello@intersectionaldesignlab.org
          </a>
        </li>
        <li>
          <a href="tel:+4591964325">+45 91 96 43 25</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/intersectional-design-lab/">
            LinkedIn
          </a>
        </li>
        </ul>
        {/* <NavLink to="/inclusion-equity-and-accessibility-statement">
          Inclusion, Equity, and Accessibility Statement
        </NavLink> */}
        <p>@ 2026 Intersectional Design Lab</p>
      </div>
    </footer>
  );
}
