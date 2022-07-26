import React from "react";
import { Link } from "react-router-dom";
import {
  FaDiscord,
  FaYoutube,
  FaTwitterSquare,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full py-8  mt-5">
      <div className="w-full max-w-[1100px] mx-auto">
        <p className="text-2xl font-semibold mb-10">Stay Updated</p>
        <div className="grid grid-cols-2 gap-5">
          {/* col-1 */}
          <div className="bg-white p-5 flex gap-4">
            <div className="w-1/6">
              <p>
                <FaDiscord color="#2563eb" fontSize="3.5em" />
              </p>
            </div>
            <div className="w-5/6">
              <p className="font-semibold text-xl mb-2">Discord</p>
              <p className="text-slate-500">
                Join other learners to ask for help and help others
              </p>
            </div>
          </div>
          {/* col-2 */}
          {/* col-1 */}
          <div className="bg-white p-5 flex gap-4">
            <div className="w-1/6">
              <p>
                <FaYoutube color="red" fontSize="3.5em" />
              </p>
            </div>
            <div className="w-5/6">
              <p className="font-semibold text-xl mb-2">e-STEM LAB YouTube</p>
              <p className="text-slate-500">
                Watch video tutorials and learners seccess stories
              </p>
            </div>
          </div>
          {/* col-1 */}
          <div className="bg-white p-5 flex gap-4">
            <div className="w-1/6">
              <p>
                <FaTwitterSquare color="#38bdf8" fontSize="3.5em" />
              </p>
            </div>
            <div className="w-5/6">
              <p className="font-semibold text-xl mb-2">e-STEM Lab Twitter</p>
              <p className="text-slate-500">
                Get updates on e-STEM Lab and other users
              </p>
            </div>
          </div>
          {/* col-1 */}
          <div className="bg-white p-5 flex gap-4">
            <div className="w-1/6">
              <p>
                <FaTwitterSquare color="#38bdf8" fontSize="3.5em" />
              </p>
            </div>
            <div className="w-5/6">
              <p className="font-semibold text-xl mb-2">
                Abdulaziz Sadi Twitter
              </p>
              <p className="text-slate-500">
                See what I am up to and lets connect
              </p>
            </div>
          </div>
        </div>
        {/* copyright info */}
        <div className="w-full grid grid-cols-4 py-8 mt-24  px-5">
          <div className="col-span-2">
            <h1 className="text-blue-600 text-xl font-bold mb-5 pr-4">
              <span>e-STEM </span>LAB
            </h1>
            <p className="text-sm leading-relaxed text-slate-500 text-justify">
              STEM Web Application Resources and Community that help you become
              a better in STEM subjects by working with currated materials and
              exercises for practices. Founded, designed and developed by{" "}
              <span>
                <a href="">@kitindi</a>
              </span>
            </p>
          </div>
          <div className="py-8 px-20 text-slate-500">
            <ul className="flex flex-col gap-2">
              <Link to="/privacy" className="hover:text-blue-500">
                Privacy
              </Link>
              <Link to="/privacy" className="hover:text-blue-500">
                Terms of use
              </Link>
              <Link to="/faqs" className="hover:text-blue-500">
                FAQ
              </Link>
            </ul>
          </div>
          <div className="py-8">
            {/* <p>Mobile App</p> */}
            <div className="mb-3">
              <button className="bg-slate-900 py-2 px-4 flex gap-4 rounded-md">
                <div>
                  <FaApple color="white" fontSize="2.25em" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">
                    Download on the
                  </p>
                  <p className="text-white text-xl font-semibold">App Store</p>
                </div>
              </button>
            </div>
            <div>
              <button className="bg-slate-900 py-2 px-4 flex gap-4 rounded-md">
                <div>
                  <FaGooglePlay color="white" fontSize="2.25em" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">
                    Download on the
                  </p>
                  <p className="text-white text-xl font-semibold">
                    Google Play
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
        {/* copy statement */}
        <div className="w-full py-4 px-5 border-t-2 border-slate-50">
          <p className="text-xs text-slate-500">
            @ {new Date().getFullYear()} e-STEM Lab. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
