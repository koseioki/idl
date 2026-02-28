import ContactText from './contact.mdx';
import { H1 } from "../../components/header-and-footer/H1";
import { Drawing } from "../../components/global/Drawing";
export function Contact() {


  return (
    <>
    <main id="main-content">
      <H1>Contact</H1>

      <ContactText />
      <Drawing name="Contact" alt="" />
    </main>
    </>
  );
}
