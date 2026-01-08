// import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Header } from './Components/Global/Header';
import { WhatIsIntersectionalDesign } from './Pages/WhatIsIntersectionalDesign';
import { DesignInPractice } from './Pages/DesignInPractice';
import { EventsAndResources } from './Pages/EventsAndResources';
import { Footer } from './Components/Global/Footer';
import { Contact } from './Pages/Contact';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/what-is-intersectional-design" element={<WhatIsIntersectionalDesign />} />
        <Route path="/design-in-practice" element={<DesignInPractice />} />
        <Route path="/events-and-resources" element={<EventsAndResources />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>

    </>
  )
}

export default App
