import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Signup from "../components/Signup";
import Login from "../components/Login";

const Home = () => {
  return (
    <div className="w-full h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Home;
