import { NavLink } from "react-router-dom";
import { Icon } from "./Icon";
import { Illustration } from "./Illustration";

export function CardWithIllustration({ heading, children }) {
  return (

      <article>
        <h3>
          <NavLink to="/">
            <span>{heading}</span>
            <Icon />
          </NavLink>
        </h3>
     
          {children}

        <Illustration />
      </article>

  );
}
