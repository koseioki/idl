import { NavLink } from "react-router-dom";
import "./Header.css";
import LogoLight from "../../assets/img/logo-and-text.svg";
import LogoDark from "../../assets/img/logo-and-text-dark.svg";
import { useEffect, useState } from "react";

export function Header() {

  // Track system theme
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const apply = (matches: boolean) => setTheme(matches ? "dark" : "light");

    // Initial
    apply(mql.matches);

    // Listen for changes
    const handler = (e: MediaQueryListEvent) => apply(e.matches);
    if (mql.addEventListener) {
      mql.addEventListener("change", handler);
    } else {
      // Safari < 14
      mql.addListener(handler);
    }

    return () => {
      if (mql.removeEventListener) {
        mql.removeEventListener("change", handler);
      } else {
        mql.removeListener(handler);
      }
    };
  }, []);

  const logoSrc = theme === "dark" ? LogoDark : LogoLight;

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <header>
        <NavLink className="logo" to="/">
          <img src={logoSrc} alt="Intersectional Design Lab (Beta)" />
        </NavLink>
        <nav aria-label="Main navigation" className="header-nav">
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
              <NavLink to="/events-and-resources">Events & Resources</NavLink>
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
    </>
  );
}
