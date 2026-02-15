// import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Header } from "./Components/Global/Header";
import { WhatIsIntersectionalDesign } from "./Pages/WhatIsIntersectionalDesign";
import { DesignInPractice } from "./Pages/DesignInPractice";
import { EventsAndResources } from "./Pages/EventsAndResources";
import { Footer } from "./Components/Global/Footer";
import { Contact } from "./Pages/Contact";
import { TestPage } from "./Pages/TestPage";
// import { useEffect, useRef } from "react";
import { ResourceLibrary } from "./Pages/ResourceLibrary";
import { SeminarsAndWorkshops } from "./Pages/SeminarsAndWorkshops";
import { Breadcrumbs } from "./Components/Global/Breadcrumbs";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Header />
        <Breadcrumbs />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/design-in-practice" element={<DesignInPractice />} />
          <Route
            path="/events-and-resources"
            element={<EventsAndResources />}
          />
          <Route
            path="/events-and-resources/seminars-and-workshops"
            element={<SeminarsAndWorkshops />}
          />
          <Route
            path="/events-and-resources/resource-library"
            element={<ResourceLibrary />}
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/what-is-intersectional-design"
            element={<WhatIsIntersectionalDesign />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
