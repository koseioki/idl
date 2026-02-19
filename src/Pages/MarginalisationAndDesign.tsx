import { H1 } from "../Components/Global/H1";
import { Card } from "../Components/Global/Card";
import { CardList } from "../Components/Global/CardList";
export function MarginalisationAndDesign() {
  return (
    <>
      <main id="main-content">
        <H1>Marginalisation and Design</H1>
        <p>
          Marginalisation manifests in various forms, each affecting individuals
          and communities uniquely. Understanding these types is essential for
          designing inclusive Information and Communication Technologies (ICT)
          solutions that address diverse needs.
        </p>

        <h2>Common types of marginalisation relevant to design</h2>

        <CardList>
          <Card heading="Sex and Gender" headingLevel={3} disabled linkTo="">
            <p>
              A person's sex and gender can influence their experiences and
              access to resources.
            </p>
          </Card>

          <Card
            heading="Culture, Race, and Geographic Location"
            headingLevel={3}
            disabled
            linkTo=""
          >
            <p></p>
          </Card>

          <Card
            heading="Disability and Ageing"
            headingLevel={3}
            disabled
            linkTo=""
          >
            <p></p>
          </Card>

          <Card heading="Economic Status" headingLevel={3} disabled linkTo="">
            <p></p>
          </Card>
        </CardList>
      </main>
    </>
  );
}
