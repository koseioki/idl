import { NavLink } from "react-router-dom";
import { Icon } from "./Icon";
import { useNavigate } from "react-router-dom";
import "./Card.css";

export function Card({ heading, headingLevel, disabled, children, linkTo }) {
  // Set a heading level depending on the headingLevel prop

  const HeadingTag = `h${headingLevel}` as React.ElementType;
  const navigate = useNavigate();
  // Handle click event to navigate to the linkTo prop, if the place clicked is not a link
  const handleClick = (event) => {
    const target = event.target as HTMLElement | null;

    // Ignore clicks that happen on the link or anything inside it (icon, span, etc.)
    if (target?.closest("a")) return;

    navigate(linkTo);
  };
  
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
      <article onClick={handleClick}>
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
