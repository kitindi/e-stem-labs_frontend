import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ict from "../img/ict.svg";
import computer from "../img/computer.svg";
import programming from "../img/programming.svg";
import Footer from "../components/Footer";

const Welcome = () => {
  return (
    <div className="w-full bg-blue-100 relative">
      <Navbar />
      <Hero />
      <div className="w-full py-8 ">
        <div className="w-full max-w-[1100px] mx-auto">
          <p className="text-2xl font-semibold mb-10"> Learning Paths</p>
          <div className="w-full grid grid-cols-3 gap-6 ">
            <Link to="/ict" className="bg-white">
              <div className="p-6">
                <img src={ict} alt="" />
              </div>
              <div className="w-full bg-blue-600 p-5">
                <p className="text-white text-xl font-bold mb-2">
                  Cambridge IGCSE
                </p>
                <p className="text-slate-200 font-normal text-sm">
                  Information Communication Technology (0417)
                </p>
                <p className="text-slate-100 font-bold mt-8">COURSE</p>
              </div>
            </Link>
            <Link to="" className="bg-white">
              <div className="p-6">
                <img src={computer} alt="" />
              </div>
              <div className="w-full bg-blue-600 p-5">
                <p className="text-white text-xl font-bold mb-2">
                  Cambridge IGCSE
                </p>
                <p className="text-slate-200 font-normal text-sm">
                  Computer Science (0984)
                </p>
                <p className="text-slate-100 font-bold mt-8">COURSE</p>
              </div>
            </Link>
            <Link to="" className="bg-white">
              <div className="p-6">
                <img src={programming} alt="" />
              </div>
              <div className="w-full bg-blue-600 p-5">
                <p className="text-white text-xl font-bold mb-2">Programming</p>
                <p className="text-slate-200 font-normal text-sm">
                  JavaScript & Python
                </p>
                <p className="text-slate-100 font-bold mt-8">COURSE</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Welcome;
