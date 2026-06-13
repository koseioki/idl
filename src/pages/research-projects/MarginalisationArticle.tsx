import { useParams } from "react-router-dom";
import { SideNav } from "../../components/global/SideNav";
import typesOfMarginalisationData from "../../data/research-projects/marginalisation-and-digital-society/types-of-marginalisation.json";
import { H1 } from "../../components/header-and-footer/H1";
import "./ResearchProjectPage.css";
import { useEffect, useState } from "react";


export function MarginalisationArticle() {
  const { subcategorySlug } = useParams();
  const subcategory = typesOfMarginalisationData
    .flatMap((category) => category.subcategories)
    .find(
      (subcat) =>
        subcat.slug === subcategorySlug || subcat.id === subcategorySlug,
    );

// import the content of the markdown file as a React component when the subcategory changes
const [Content, setContent] = useState<React.ComponentType | null>(null);
useEffect(() => {
    if (subcategory) {
      import(`../../data/research-projects/marginalisation-and-digital-society/${subcategory.slug}.mdx`).then((module) => {
        setContent(() => module.default);
      });
    }
}, [subcategory]);

  return (
    <div className="research-project-page">
      <main id="main-content">
        <H1>{subcategory?.name}</H1>
        {Content && (
          <div>
            <Content />
          </div>
        ) || <p>Loading...</p>}
      </main>
            <SideNav />

    </div>
  );
}
