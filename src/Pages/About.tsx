import AboutImage from "../assets/img/about.jpg";
export function About() {
  return (
    <main>
      <h1>About</h1>
      <p>
        Intersectional Design Lab is an initiative run by Kosei Oki. It is a
        platform where I share Information and Communication Technologies (ICT)
        design practices for designers, developers, and anyone interested, from
        an intersectional perspective.
      </p>
      <p>
        The aim of Intersectional Design Lab is to make the digital space a more
        inclusive and functional place for everyone—regardless of race, gender,
        sexual orientation, social class, disability, and more—especially for
        those who are often ignored or overlooked in the society.
      </p>
      <p>
        At Intersectional Design Lab, I write articles, deliver workshops and
        talks, and share useful resources to help you learn more about
        intersectional design.
      </p>
      <img
        src={AboutImage}
        className="image-frame"
        alt="Kosei presenting to a classroom, smiling and prompting students to raise their hands. The presentation slide reads “Native elements work just better”, and shows a good code example using a simple button element alongside a bad one using a div tag with many attributes, photo."
      /> 
    </main>
  );
}
