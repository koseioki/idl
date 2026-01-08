import { useEffect , useRef } from "react";

export function DesignInPractice() {
      const headingRef = useRef<HTMLHeadingElement>(null);
      useEffect(() => {
        if (headingRef.current) {
          headingRef.current.focus();
        }
      }, []);

    return (
        <>
        <head>
            <title>Design in Practice - Intersectional Design Lab</title>
        </head>
        <main id="main-content">
            <h1 ref={headingRef} tabIndex="-1">Design in Practice</h1>
            <p>Coming soon!</p>
            <p>Here we explore how intersectional design can be applied in real-world scenarios.</p>
        </main>
        </>
    )
}