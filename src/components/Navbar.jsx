import { Link } from "react-router-dom";
import "../App.css";

export default function Navbar() {
  return (
    <div id="navbar">
      <Link to="/green" className="link">Green</Link>
      <Link to="/orange" className="link">Orange</Link>
      <Link to="/blue" className="link">Blue</Link>
      <Link to="/red" className="link">Red</Link>
      <Link to="/" className="link">Home</Link>
    </div>
  );
}
