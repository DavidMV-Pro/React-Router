import "./App.css";
import Navbar from "./components/Navbar";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <div id="container">
      <Navbar/>
      <MainContainer/>
      <Navbar/>
    </div>
  );
}

export default App;
