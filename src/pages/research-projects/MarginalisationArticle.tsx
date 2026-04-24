import { useParams } from "react-router-dom";
import { SideNav } from "../../components/global/SideNav";
import typesOfMarginalisationData from "../../data/research-projects/types-of-marginalisation.json";
import { H1 } from "../../components/header-and-footer/H1";


export function MarginalisationArticle() {

      const { subcategorySlug } = useParams();
      const subcategory = typesOfMarginalisationData
        .flatMap((category) => category.subcategories)
        .find(
          (subcat) =>
            subcat.slug === subcategorySlug || subcat.id === subcategorySlug,
        );

       console.log("subcategorySlug:", subcategorySlug);
       console.log("subcategory:", subcategory);

    return (
         <div className="research-project-page">
                <SideNav />
                <main id="main-content">
            <H1>{subcategory?.name || "Marginalisation and Design"}</H1>
            <p>This is the marginalisation and design article.</p>
            </main>
        </div>
    );
}