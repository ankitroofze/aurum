import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/about-us";
import Contact from "./pages/contact";
import Domestic from "./pages/domestic";
import International from "./pages/international";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about-us" element={<About />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/domestic-travels" element={<Domestic />} />
        <Route path="/international-travels" element={<International />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
