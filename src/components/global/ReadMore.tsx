import { NavLink } from "react-router-dom";
import "./ReadMore.css";
export function ReadMore({ to, children }) {
  return (
    <p className="read-more">
      <NavLink to={to}>{children}</NavLink>
    </p>
  );
}