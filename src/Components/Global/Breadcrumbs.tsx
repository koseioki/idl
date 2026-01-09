import { Link, useLocation } from "react-router-dom";
import "./Breadcrumbs.css";

export function Breadcrumbs() {
  const location = useLocation();

  // Convert kebab-case to Title Case
  const formatPathName = (path: string): string => {
    return path
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // Optional: Override automatic formatting for specific routes
  const routeNames: Record<string, string> = {
    // Add custom names here only if needed, e.g.:
    // "api": "API",
    // "faq": "FAQ",
    "what-is-intersectional-design": "What is Intersectional Design?",
  };

  // Generate breadcrumb items from the current path
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Don't show breadcrumbs on home page
  if (pathnames.length === 0) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="breadcrumb-nav">
      <ol>
        <li>
          <Link to="/">Home</Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          const displayName = routeNames[name] || formatPathName(name);

          return (
            <li key={routeTo}>
              <span className="breadcrumb-separator" aria-hidden="true">
                &gt;
              </span>
              {isLast ? (
                <span className="breadcrumb-current" aria-current="page">
                  {displayName}
                </span>
              ) : (
                <Link to={routeTo}>{displayName}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
