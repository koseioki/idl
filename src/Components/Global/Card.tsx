import { NavLink } from "react-router-dom";
import { Icon } from "./Icon";
import { useNavigate } from "react-router-dom";
import "./Card.css";

export function Card({ heading, headingLevel, disabled, children, linkTo }) {
  // Set a heading level depending on the headingLevel prop

  const HeadingTag = `h${headingLevel}` as React.ElementType;
  const navigate = useNavigate();
  const handleClick = () => {
    if (!disabled) {
      navigate(linkTo);
    }
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
