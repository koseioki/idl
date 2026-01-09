import { Drawing } from "../Components/Global/Drawing"
import { useEffect, useRef } from "react";
export function Contact() {

    const headingRef = useRef<HTMLHeadingElement>(null);
    useEffect(() => {
      if (headingRef.current) {
        headingRef.current.focus();
      }
    }, []);


  return (
    <>
    <head>
      <title>Contact - Intersectional Design Lab</title>
    </head>
    <main id="main-content">
      <h1 ref={headingRef} tabIndex="-1">Contact</h1>
      <p>
        If you have any questions, feedback, or would like to get involved, please reach
        out!
      </p>
      <p>
        Email: <a href="mailto:hello@intersectionaldesignlab.org">
          hello@intersectionaldesignlab.org
        </a>
      </p>
      <p>
        Phone: <a href="tel:+4591964325">+45 9196 4325</a>
      </p>
      {/* <Drawing /> */}
    </main>
    </>
  );
}
