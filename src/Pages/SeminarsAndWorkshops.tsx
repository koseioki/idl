import { useEffect, useRef } from "react";
export function SeminarsAndWorkshops() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.focus();
    }
  }, []);

  return (
    <>
      <head>
        <title>Seminars & Workshops - Intersectional Design Lab</title>
      </head>
      <main id="main-content">
        <h1 ref={headingRef} tabIndex="-1">
          Seminars & Workshops
        </h1>
        <p>Coming soon! This page is under construction.</p>
      </main>
    </>
  );
}
