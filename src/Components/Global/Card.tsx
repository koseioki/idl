import { NavLink } from "react-router-dom";
import { Icon } from "./Icon";
import "./Card.css";

export function Card({ heading, headingLevel = 3, disabled, children, linkTo }) {
  // Set a heading level depending on the headingLevel prop

  const HeadingTag = `h${headingLevel}` as React.ElementType;

  if (disabled) {
    return (
      <article className="disabled-card">
        <HeadingTag>
          <span>{heading}</span>
        </HeadingTag>

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
        <HeadingTag>
          <NavLink to={linkTo}>
            <span>{heading}</span>
            <Icon />
          </NavLink>
        </HeadingTag>
        {children}
      </article>
    );
  }
}
