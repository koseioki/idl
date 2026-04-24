import { H1 } from "../../components/header-and-footer/H1";
import { SideNav } from "../../components/global/SideNav";
import "./ResearchProjectPage.css";
import typesOfMarginalisationData from "../../data/research-projects/types-of-marginalisation.json";
import { CardList } from "../../components/global/CardList";
import { Card } from "../../components/global/Card";
import { useParams } from "react-router-dom";


export function SubcategoriesOfTypesOfMarginalisation() {
  const { categorySlug } = useParams();
  const category = typesOfMarginalisationData.find(
    (cat) => cat.slug === categorySlug || cat.id === categorySlug,
  );
  console.log("categorySlug:", categorySlug);
  console.log("category:", category);

  return (
    <div className="research-project-page">
      <SideNav />
      <main id="main-content">
      <H1>{category?.name}</H1>


      {/* list subcategories */}
      <CardList>
        {category?.subcategories.map((subcategory) => (
          <Card
            key={subcategory.slug}
            heading={subcategory.name}
            headingLevel={2}
            linkTo={`${subcategory.slug}`}
            disabled={false}
          >
            <p>hallo</p>
          </Card>
        ))}
      </CardList>
      </main>
    </div>
  );
}