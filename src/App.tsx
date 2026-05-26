import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/about/About";
import { Header } from "./components/header-and-footer/Header";
import { WhatIsIntersectionalDesign } from "./pages/what-is-intersectional-design/WhatIsIntersectionalDesign";
import { Footer } from "./components/header-and-footer/Footer";
import { Contact } from "./pages/contact/Contact";
import { ResourceLibrary } from "./pages/resource-library/ResourceLibrary";
import { Events } from "./pages/events/Events";
import { Breadcrumbs } from "./components/header-and-footer/Breadcrumbs";
import { ResearchProjects } from "./pages/research-projects/ResearchProjects";
import { EventsAndResources } from "./pages/EventsAndResources";
import { ResourceDetail } from "./pages/resource-library/ResourceDetail";
import { EventDetail } from "./pages/events/EventDetail";
import { WhatIsIntersectionality } from "./pages/what-is-intersectional-design/WhatIsIntersectionality";
import { HowDoWeStart } from "./pages/what-is-intersectional-design/HowDoWeStart";
import { InclusionEquityAndAccessibilityStatement } from "./pages/InclusionEquityAndAccessibilityStatement";
import { NotFound } from "./pages/NotFound";
import { WhyIsIntersectionalDesignImportant } from "./pages/what-is-intersectional-design/WhyIsIntersectionalDesignImportant";
import { ProjectOverview } from "./pages/research-projects/ProjectOverview";
import { TypesOfMarginalisation } from "./pages/research-projects/TypesOfMarginalisation";
import { SubcategoriesOfTypesOfMarginalisation } from "./pages/research-projects/SubcategoriesOfTypesOfMarginalisation";
import { MarginalisationArticle } from "./pages/research-projects/MarginalisationArticle";

function App() {

  return (
    <>
      <Router>
        <Header />
        <Breadcrumbs />
        <Routes>
          <Route path="/" element={<Home />} />

        
          <Route
            path="/what-is-intersectional-design"
            element={<WhatIsIntersectionalDesign />}
          />
          <Route path="/what-is-intersectional-design/what-is-intersectionality" element={<WhatIsIntersectionality />} />
          <Route path="/what-is-intersectional-design/why-is-intersectional-design-important" element={<WhyIsIntersectionalDesignImportant />} />
          <Route path="/what-is-intersectional-design/how-do-we-start" element={<HowDoWeStart />} />

          <Route path="/research-projects" element={<ResearchProjects />} />
          <Route path="/research-projects/:slug" element={<ProjectOverview />} />
          <Route path="/research-projects/:slug/types-of-marginalisation" element={<TypesOfMarginalisation />} />
          <Route path="/research-projects/:slug/types-of-marginalisation/:categorySlug" element={<SubcategoriesOfTypesOfMarginalisation />} />
          <Route path="/research-projects/:slug/types-of-marginalisation/:categorySlug/:subcategorySlug" element={<MarginalisationArticle />} />


          <Route path="/events-and-resources" element={<EventsAndResources />} />
          <Route
            path="/events-and-resources/events"
            element={<Events />}
          />
          <Route path="/events-and-resources/events/:slug" element={<EventDetail />} />
          <Route
            path="/events-and-resources/resource-library"
            element={<ResourceLibrary />}
          />
          <Route path="/events-and-resources/resource-library/:slug" element={<ResourceDetail />} />
          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/inclusion-equity-and-accessibility-statement" element={<InclusionEquityAndAccessibilityStatement />} />


          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
