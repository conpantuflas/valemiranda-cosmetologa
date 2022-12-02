import "./App.css";
import Navbar from "./components/Navbar";
import Slider from "./components/PrincipalSlider";
import Tips from "./components/Tips";
import Treatments from "./components/Treatments";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Treatments />
      <Tips />
    </div>
  );
}

export default App;
