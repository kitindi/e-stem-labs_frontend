import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full mx-auto flex justify-between items-center">
      <div className=" h-screen py-12 pl-28 pr-10 w-1/2 bg-slate-800 flex flex-col justify-between">
        <div className="">
          <h1 className="text-white text-3xl font-bold">
            <span className="text-blue-600">e-STEM </span>LAB
          </h1>
          <div className="mt-28">
            <h2 className="text-white text-3xl font-light">
              Join the community of learners.
            </h2>
            <p className="text-slate-400 text-2xl font-light mt-6 leading-relaxed">
              Get free unlimited access to resources for IGCSE ICT & Computer
              Science to improve your subject mastery and boost your grades.
            </p>
          </div>
        </div>
        <div>
          <span className="font-light text-sm text-slate-400 mr-5">About</span>
          <span className="font-light text-sm text-slate-400">Terms</span>
        </div>
      </div>
      <div className=" h-screen flex items-center pl-28 w-1/2">
        <div className="w-[400px]">
          <form action="" className="w-full">
            <div className="w-full flex flex-col mb-4">
              <label htmlFor="username" className="text-gray-400 text-sm">
                EMAIL
              </label>
              <input
                type="text"
                className="border-b-2 border-slate-400 outline-none p-2"
              />
            </div>
            <div className="w-full flex flex-col mb-3">
              <label htmlFor="username" className="text-gray-400 text-sm">
                PASSWORD
              </label>
              <input
                type="text"
                className=" border-b-2 border-slate-400 outline-none p-2"
              />
            </div>

            <div className="w-full mt-6 gap-6 items-center">
              <Link to="/welcome">
                <button className="bg-blue-600 text-white w-full py-3 mb-4 cursor-pointer">
                  LOG IN
                </button>
              </Link>

              <p className="text-slate-500  cursor-pointer mt-3">
                Don't have account yet?
                <Link to="/">
                  <span className="font-bold ml-2">Register</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
