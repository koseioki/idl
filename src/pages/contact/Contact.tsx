import { RenderMarkdown } from "../../utils/RenderMarkdown";
import Content from './contact.md?raw';
import { H1 } from "../../components/header-and-footer/H1";
import { Drawing } from "../../components/global/Drawing";
export function Contact() {


  return (
    <>
    <main id="main-content">
      <H1>Contact</H1>
      <RenderMarkdown mdFile={Content} />
  
      <Drawing name="Contact" alt="" />
    </main>
    </>
  );
}
