import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Protected from "../protected/Protected";
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
          <Route
            path="/welcome"
            element={
              <Protected>
                <Welcome />
              </Protected>
            }
          />
          <Route
            path="/privacy"
            element={
              <Protected>
                <Privacy />
              </Protected>
            }
          />
          <Route
            path="/faqs"
            element={
              <Protected>
                <Faqs />
              </Protected>
            }
          />
          <Route
            path="/ict"
            element={
              <Protected>
                <Igcseict />
              </Protected>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Home;
