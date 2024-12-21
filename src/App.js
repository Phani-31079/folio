import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Certifications from "./Pages/Certifications";
import Projects from "./Pages/Projects";
import Technologies from "./Pages/Technologies";
import Resume from "./Pages/Resume";
import UnderDevelopment from "./Components/Underdevelopment"; // Import the new component

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/under-development" element={<UnderDevelopment />} /> {/* Add the new route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
