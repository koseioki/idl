import { NavLink } from "react-router-dom";
import { Icon } from "./Icon";
import "./Card.css";

export function Card({ heading, disabled, children, linkTo }) {
  if (disabled) {
    return (
      <article className="disabled-card">
        <h3>
          <span>{heading}</span>
        </h3>
        {children}
      </article>
    );
  } else {
    return (
      <article
        onClick={() => {
          if (linkTo) {
            window.location.href = linkTo;
          }
        }}
      >
        <h3>
          <NavLink to={linkTo}>
            <span>{heading}</span>
            <Icon />
          </NavLink>
        </h3>
        {children}
      </article>
    );
  }
}
