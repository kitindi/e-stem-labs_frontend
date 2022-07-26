import React from "react";

const Signup = () => {
  return (
    <div className="w-full mx-auto flex justify-between items-center">
      <div className=" h-screen py-12 pl-28 pr-10 w-1/2 bg-slate-800 flex flex-col justify-between">
        <div className="">
          <h1 className="text-white text-3xl font-bold">
            <span className="text-blue-600">e-STEM </span>lab
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

      <div className=" h-screen flex items-center pl-16 w-1/2">
        <div className="w-[470px]">
          <form action="" className="w-full">
            <div className="w-full flex gap-3 mb-3">
              <div className="w-1/2 flex flex-col">
                <label htmlFor="username" className="text-gray-400 text-sm">
                  FIRST RNAME
                </label>
                <input
                  type="text"
                  className=" border-b-2 border-slate-400 outline-none p-2"
                />
              </div>
              <div className="w-1/2 flex flex-col">
                <label htmlFor="username" className="text-gray-400 text-sm">
                  LAST NAME
                </label>
                <input
                  type="text"
                  className=" border-b-2 border-slate-400 outline-none p-2"
                />
              </div>
            </div>
            <div className="w-full flex flex-col mb-3">
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
            <div className="w-full flex flex-col mb-3">
              <label htmlFor="username" className="text-gray-400 text-sm">
                REPEAT PASSWORD
              </label>
              <input
                type="text"
                className=" border-b-2 border-slate-400 outline-none py-2"
              />
            </div>
            <div className="w-full mt-10 flex gap-6 items-center">
              <button className="bg-blue-600 text-white py-3 px-10 cursor-pointer">
                SIGN UP NOW
              </button>
              <p className="text-slate-500 underline underline-offset-2 cursor-pointer">
                I am already a member
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
