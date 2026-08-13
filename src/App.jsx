import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Websites from "./Pages/Websites";
import HowItWorks from "./Pages/HowItWorks";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/websites" element={<Websites />} />
        <Route path="/services" element={<HowItWorks />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  );
}

export default App;