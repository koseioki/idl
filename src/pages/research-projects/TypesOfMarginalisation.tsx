import { SideNav } from "../../components/global/SideNav";
import "./ResearchProjectPage.css";
import { H1 } from "../../components/header-and-footer/H1";
import typesOfMarginalisationData from "../../data/research-projects/types-of-marginalisation.json";
import { CardList } from "../../components/global/CardList";
import { Card } from "../../components/global/Card";
export function TypesOfMarginalisation() {
  return (
    <>
      <div className="research-project-page">
        <SideNav />
        <main id="main-content">
          <H1>Types of Marginalisation</H1>
          <p>This is the types of marginalisation page.</p>

          <CardList>
            {typesOfMarginalisationData.map((category) => (
              <Card
                key={category.slug}
                heading={category.name}
                headingLevel={2}
                linkTo={`${category.slug}`}
                disabled={false}
              >
                <p>{category.description}</p>
              </Card>
            ))}
          </CardList>
        </main>
      </div>
    </>
  );
}
