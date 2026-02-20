// import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Header } from "./Components/Global/Header";
import { WhatIsIntersectionalDesign } from "./Pages/WhatIsIntersectionalDesign";
import { DesignInPractice } from "./Pages/DesignInPractice";
import { Footer } from "./Components/Global/Footer";
import { Contact } from "./Pages/Contact";
import { ResourceLibrary } from "./Pages/ResourceLibrary";
import { SeminarsAndWorkshops } from "./Pages/SeminarsAndWorkshops";
import { Breadcrumbs } from "./Components/Global/Breadcrumbs";
import { ResearchProjects } from "./Pages/ResearchProjects";
import { LearningAndKnowledge } from "./Pages/LearningAndKnowledge";
import { MarginalisationAndDesign } from "./Pages/MarginalisationAndDesign";
import { ResourceDetail } from "./Pages/ResourceDetail";

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

          <Route path="/research-projects" element={<ResearchProjects />} />
          <Route path="/research-projects/marginalisation-and-design" element={<MarginalisationAndDesign />} />
          <Route path="/research-projects/design-in-practice" element={<DesignInPractice />} />


          <Route path="/learning-and-knowledge" element={<LearningAndKnowledge />} />
          <Route
            path="/learning-and-knowledge/seminars-and-workshops"
            element={<SeminarsAndWorkshops />}
          />
          <Route
            path="/learning-and-knowledge/resource-library"
            element={<ResourceLibrary />}
          />
          <Route path="/learning-and-knowledge/resource-library/:slug" element={<ResourceDetail />} />
          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
