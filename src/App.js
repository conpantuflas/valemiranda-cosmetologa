import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Profile from "./components/Profile";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ProductDetail from "./components/ProductDetail";
import FormCitation from "./components/FormCitation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/productdetail" element={<ProductDetail />} />
        <Route path="/citation" element={<FormCitation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
