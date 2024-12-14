import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import NavbarSection from "./Components/Navbar";
import DrinkPage from "./Components/Home/DrinkPage/DrinkPage";
import Club from "./Components/Home/ClubPage/Club";

function App() {
  return (
    <>
      <Router>
        <NavbarSection />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drink" element={<DrinkPage />} />
          <Route path="/club" element={<Club />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
