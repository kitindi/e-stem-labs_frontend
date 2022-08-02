import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const { email, password } = formData;

  const { dispatch } = useAuthContext();
  const handleChange = (e) => {
    setFormData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      //save json to the localstorage
      localStorage.setItem("user", JSON.stringify(json));

      //update the authContext
      dispatch({ type: "LOGIN", payload: json });
      navigate("/welcome");
      setError(null);
      setFormData({
        email: "",
        password: "",
      });
    }
  };
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
          <form className="w-full" method="POST" onSubmit={handleSubmit}>
            <div className="w-full flex flex-col mb-4">
              <label htmlFor="username" className="text-gray-400 text-sm">
                EMAIL
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                className="border-b-2 border-slate-400 outline-none p-2"
              />
            </div>
            <div className="w-full flex flex-col mb-3">
              <label htmlFor="username" className="text-gray-400 text-sm">
                PASSWORD
              </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                className=" border-b-2 border-slate-400 outline-none p-2"
              />
            </div>
            <div>
              <p className="text-red-500">{error}</p>
            </div>
            <div className="w-full mt-6 gap-6 items-center">
              <button
                className="bg-blue-600 text-white w-full py-3 mb-4 cursor-pointer"
                type="submit"
              >
                LOG IN
              </button>

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
