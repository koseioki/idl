import { useEffect, useRef } from "react";

export function ResourceLibrary() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.focus();
    }
  }, []);
  return (
    <>
      <head>
        <title>Resource Library - Intersectional Design Lab</title>
      </head>
      <main id="main-content">
        <h1 ref={headingRef} tabIndex="-1">
          Resource Library
        </h1>
        <p>Coming soon! This page is under construction.</p>
      </main>
    </>
  );
}
