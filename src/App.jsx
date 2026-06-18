import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/about-us";
import Contact from "./pages/contact";
import Domestic from "./pages/domestic";
import International from "./pages/international";
import Cruise from "./pages/cruise";
import Theme from "./pages/theme";
import VisaAssistance from "./pages/visa-Assistance";
import Insurance from "./pages/Insurance";
import ScrollToTop from "./components/common/ScrollToTop";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/domestic-travels" element={<Domestic />} />
          <Route path="/international-travels" element={<International />} />
          <Route path="/cruise-package" element={<Cruise />} />
          <Route path="/themed-packages" element={<Theme />} />
          <Route path="/visa-assistance" element={<VisaAssistance />} />
          <Route path="/travel-insurance" element={<Insurance />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;