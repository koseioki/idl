import AboutImage from "../assets/img/about.jpg";
import { RenderMarkdown } from "../Components/Global/RenderMarkdown";
import Content from './about.md?raw';
import { H1 } from "../Components/Global/H1";
export function About() {

  return (
    <>
      <main id="main-content">
 
        <H1>About</H1>
        
        <RenderMarkdown mdFile={Content} />
       
        <div>
          <img
            src={AboutImage}
            className="image-frame"
            alt="Kosei presenting to a classroom, smiling and prompting students to raise their hands. The presentation slide reads “Native elements work just better”, and shows a good code example using a simple button element alongside a bad one using a div tag with many attributes, photo."
          />
        </div>
      </main>
    </>
  );
}
