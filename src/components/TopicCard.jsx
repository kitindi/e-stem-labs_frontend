import React from "react";
import { Link } from "react-router-dom";

const TopicCard = () => {
  return (
    <Link
      to=""
      className="grid grid-cols-12 gap-2 border-2 border-slate-200 p-2 my-5"
    >
      <div className="  flex flex-col justify-center items-center col-span-1 p-3">
        <p className="text-slate-400 font-bold"> Chapter</p>
        <p className="font-bold text-slate-400">1</p>
      </div>
      <div className="col-span-10 p-3">
        <p className="text-slate-700 font-semibold text-lg mb-3">
          Types and components of computer systems
        </p>
        <p className="text-justify text-slate-600">
          This chapter introduces the basic compoents that makes up these
          computer systems, wgich is hardware and software. It also addresses
          the how computers have evolved and become one fo the most used
          intrument in aour daily lives.
        </p>

        <p className="text-slate-400 text-sm font-semibold mt-2">
          90 minutes read
        </p>
      </div>
    </Link>
  );
};

export default TopicCard;
