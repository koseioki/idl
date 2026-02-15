import { useEffect, useRef } from "react";
import { RenderMarkdown } from "../Components/Global/RenderMarkdown";
import Content from './contact.md?raw';
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
      <h1 ref={headingRef} tabIndex={-1}>Contact</h1>
      <RenderMarkdown mdFile={Content} />
  
      {/* <Drawing /> */}
    </main>
    </>
  );
}
