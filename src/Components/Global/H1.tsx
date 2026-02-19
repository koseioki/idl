import { useEffect, useRef } from "react";

export function H1({ children }) {
  // Focus the heading when the component mounts
  const headingRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.focus();
    }
  }, []);

  //   Change the page title to match the heading text
  useEffect(() => {
    document.title = `${children} - Intersectional Design Lab`;
  }, [children]);

  return (
    <h1 ref={headingRef} tabIndex={-1}>
      {children}
    </h1>
  );
}
