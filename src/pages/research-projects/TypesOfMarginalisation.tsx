import { SideNav } from "../../components/global/SideNav";
import "./ResearchProjectPage.css";
import { H1 } from "../../components/header-and-footer/H1";
import typesOfMarginalisationData from "../../data/research-projects/marginalisation-and-digital-society/types-of-marginalisation.json";
import { CardList } from "../../components/global/CardList";
import { Card } from "../../components/global/Card";
export function TypesOfMarginalisation() {
  return (
    <>
      <div className="research-project-page">
        <SideNav />
        <main id="main-content">
          <H1>Types of Marginalisation</H1>
          <p>Here you can find information about different types of marginalisation in design.</p>

          <CardList>
            {typesOfMarginalisationData.map((category) => (
              <Card
                key={category.slug}
                heading={category.name}
                headingLevel={2}
                linkTo={`${category.slug}`}
                disabled={false}
              >
                {""}
                {/* <p>{category?.description}</p> */}
              </Card>
            ))}
          </CardList>
        </main>
      </div>
    </>
  );
}
