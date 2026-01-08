import { NavLink } from "react-router-dom";
import { Icon } from "./Icon";
import './Card.css'


export function Card({ heading, children }) {
  return (
    <article>
      <h3>
        <NavLink to="/">
          <span>{heading}</span>
          <Icon />
        </NavLink>
      </h3>
      {children}
    </article>
  );
}
