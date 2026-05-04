import { NavLink, useParams } from "react-router-dom";
import "./SideNav.css";
import typesOfMarginalisation from "../../data/research-projects/types-of-marginalisation.json"; 
export function SideNav() {
  const { slug } = useParams();

  return (
    <nav className="side-nav" aria-label="Secondary">
      <ul>
        <li>
          <NavLink to={`/research-projects/${slug}`}>Overview</NavLink>
        </li>
        <li>
          <ul>
            <li>
              <NavLink
                to={`/research-projects/${slug}/types-of-marginalisation`}
              >
                Types of marginalisation
              </NavLink>
            </li>
            <li>
              <ul>
              {typesOfMarginalisation.map((category) => (
                <li>
                <NavLink
                  key={category.slug}
                  to={`/research-projects/${slug}/types-of-marginalisation/${category.slug}`}
                >
                  {category.name}
                </NavLink>
                </li>
              ))}
                </ul>
            </li>
          
          </ul>
        </li>
      </ul>
    </nav>
  );
}
