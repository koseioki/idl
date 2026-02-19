import { RenderMarkdown } from "../Components/Global/RenderMarkdown";
import Content from './contact.md?raw';
import { H1 } from "../Components/Global/H1";
export function Contact() {


  return (
    <>
    <main id="main-content">
      <H1>Contact</H1>
      <RenderMarkdown mdFile={Content} />
  
      {/* <Drawing /> */}
    </main>
    </>
  );
}
