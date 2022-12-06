import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Slider from "./components/PrincipalSlider";
import Red from "./components/Red";
import Tips from "./components/Tips";
import Treatments from "./components/Treatments";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Treatments />
      <Tips />
      <Red />
      <Footer />
    </div>
  );
}

export default App;
