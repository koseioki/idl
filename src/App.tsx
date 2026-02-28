// import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/about/About";
import { Header } from "./components/header-and-footer/Header";
import { WhatIsIntersectionalDesign } from "./pages/what-is-intersectional-design/WhatIsIntersectionalDesign";
import { DesignInPractice } from "./pages/research-projects/DesignInPractice";
import { Footer } from "./components/header-and-footer/Footer";
import { Contact } from "./pages/contact/Contact";
import { ResourceLibrary } from "./pages/resource-library/ResourceLibrary";
import { SeminarsAndWorkshops } from "./pages/seminars-and-workshops/SeminarsAndWorkshops";
import { Breadcrumbs } from "./components/header-and-footer/Breadcrumbs";
import { ResearchProjects } from "./pages/research-projects/ResearchProjects";
import { LearningAndKnowledge } from "./pages/LearningAndKnowledge";
import { MarginalisationAndDesign } from "./pages/research-projects/MarginalisationAndDesign";
import { ResourceDetail } from "./pages/resource-library/ResourceDetail";
import { EventDetail } from "./pages/seminars-and-workshops/EventDetail";
import { WhatIsIntersectionality } from "./pages/what-is-intersectional-design/WhatIsIntersectionality";
import { HowDoWeStart } from "./pages/what-is-intersectional-design/HowDoWeStart";
import { InclusionEquityAndAccessibilityStatement } from "./pages/InclusionEquityAndAccessibilityStatement";

function App() {
  // const [count, setCount] = useState(0)

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
          <Route path="/what-is-intersectional-design/how-do-we-start" element={<HowDoWeStart />} />

          <Route path="/research-projects" element={<ResearchProjects />} />
          <Route path="/research-projects/marginalisation-and-design" element={<MarginalisationAndDesign />} />
          <Route path="/research-projects/design-in-practice" element={<DesignInPractice />} />


          <Route path="/learning-and-knowledge" element={<LearningAndKnowledge />} />
          <Route
            path="/learning-and-knowledge/seminars-and-workshops"
            element={<SeminarsAndWorkshops />}
          />
          <Route path="/learning-and-knowledge/seminars-and-workshops/:slug" element={<EventDetail />} />
          <Route
            path="/learning-and-knowledge/resource-library"
            element={<ResourceLibrary />}
          />
          <Route path="/learning-and-knowledge/resource-library/:slug" element={<ResourceDetail />} />
          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/inclusion-equity-and-accessibility-statement" element={<InclusionEquityAndAccessibilityStatement />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
