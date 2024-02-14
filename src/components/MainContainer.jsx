import { Routes, Route } from "react-router-dom";
import Blue from "./Blue";
import Red from "./Red";
import Home from "./Home";
import "../App.css";
import Orange from "./Orange";
import Green from "./Green";

export default function MainContainer() {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/green" element={<Green />} />
        <Route path="/orange" element={<Orange />} />
        <Route path="/blue" element={<Blue />} />
        <Route path="/red" element={<Red />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
