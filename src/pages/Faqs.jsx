import React from "react";
import profile from "../img/profile.jpeg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Faqs = () => {
  return (
    <div className="w-full bg-blue-100 relative">
      <Navbar />
      <div className="w-full max-w-[1100px] mx-auto mt-16 py-8 grid grid-cols-12 gap-6">
        <div className="col-span-3 ">
          <div className="bg-white p-3 flex flex-col  justify-center gap-5">
            <div className="flex justify-center items-center">
              <img src={profile} alt="profile" className="h-36 rounded-sm" />
            </div>
            <div className=" p-2">
              <p className="text-slate-700 font-semibold text-lg mb-2">
                Hi! I'm Abdulaziz
              </p>
              <p className="text-slate-700 text-sm leading-normal">
                I am the founder of e-STEM Lab. For any question, reach out to
                me.
              </p>
              <div className="mt-3 text-slate-700 font-normal">
                <Link to="" className="text-sm flex gap-1 items-center">
                  <FaEnvelope color="#2563eb" fontSize="1.15em" /> Email
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-9 bg-white p-5">
          <h3 className="text-xl text-slate-900 font-semibold mb-3">
            What is e-STEM Lab
          </h3>
          <p className="mb-5 leading-relaxed text-slate-600 text-justify">
            e-STEM Lab is an online community and a platform for anyone who
            wants to become in STEM subjects.Our primary target are students
            taking eith NECTA or Cambridge carriculum.e-STEM Lab is built with
            the goal of enabling students to develop deeper understanding of the
            science subjects. You will find different paths to follow, each path
            has a set of challenges or practice exercises.You will also find
            Vlogs, where I will share career advice in the tech industry.
          </p>
          <h3 className="text-xl text-slate-900 font-semibold mb-3">
            What is the future for e-STEM Lab?
          </h3>
          <p className="mb-5 leading-relaxed text-slate-600 text-justify">
            There are many things I want to do but here are things that will
            come in the future: Jobs: Hopefully, when there are a lot more
            users, companies would want to post their jobs on devChallenges and
            you can use your portfolio to apply. Learn: The roadmap will be
            completed in the future as well as I will work on some premium
            courses
          </p>
          <ul className="list-disc pl-5 text-slate-600">
            <li className="mb-2">
              <span className="font-semibold "> New paths every year:</span>To
              keep up with trends and technologies.
            </li>
            <li className="mb-2">
              <span className="font-semibold">Premium content/features:</span>
              There will be premium paths and features.
            </li>
            <li className="mb-2">
              <span className="font-semibold">Hackathon:</span> To help with
              team building and to have fun, I will also organize Hackathon.
              Where you will team up and compete with others to solve a
              challenge or a set of challenges. There will be free and premium
              Hackathons.
            </li>
          </ul>
          <h3 className="text-xl text-slate-900 font-semibold mb-3">
            Can I contribute?
          </h3>
          <p className="mb-5 leading-relaxed text-slate-600 text-justify">
            The project is not open-source, but you can also contribute by
            reporting bugs, suggest features,... on Discord.
          </p>
          <h3 className="text-xl text-slate-900 font-semibold mb-3">
            Can I redistribute the content?
          </h3>
          <p className="mb-5 leading-relaxed text-slate-600 text-justify">
            No, you can not redistribute any of the content on this website. You
            can use it for personal use or share the link to the content. For
            more information, you can read on Terms.
          </p>
          <h3 className="text-xl text-slate-900 font-semibold">
            What is the best way to contact you?
          </h3>
          <p className="mb-5 leading-relaxed text-slate-600 text-justify">
            Send me a message on Twitter @kitindi
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Faqs;
