import "./App.css";
import Navbar from "./components/Navbar";
import Slider from "./components/PrincipalSlider";
import Treatments from "./components/Treatments";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Treatments />
    </div>
  );
}

export default App;
