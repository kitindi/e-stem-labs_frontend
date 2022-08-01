import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Signup from "../components/Signup";
import Login from "../components/Login";
import Welcome from "./Welcome";
import Privacy from "./Privacy";
import Faqs from "./Faqs";
import Igcseict from "./Igcseict";

const Home = () => {
  return (
    <div className="w-full h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/ict" element={<Igcseict />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Home;
