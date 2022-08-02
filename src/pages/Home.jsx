import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

//components
import Signup from "../components/Signup";
import Login from "../components/Login";
import Welcome from "./Welcome";
import Privacy from "./Privacy";
import Faqs from "./Faqs";
import Igcseict from "./Igcseict";

const Home = () => {
  const { user } = useAuthContext();
  return (
    <div className="w-full h-screen">
      <BrowserRouter>
        {user ? (
          <div>
            <Routes>
              <Route path="/welcome" element={<Welcome />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/faqs" element={<Faqs />} />
              <Route path="/ict" element={<Igcseict />} />
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Signup />} />
            </Routes>{" "}
          </div>
        ) : (
          <div>
            <Routes>
              <Route path="/" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Login />} />
            </Routes>
          </div>
        )}
      </BrowserRouter>
    </div>
  );
};

export default Home;
