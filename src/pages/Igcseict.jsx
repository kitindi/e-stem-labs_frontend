import React from "react";
import TopicCard from "../components/TopicCard";

import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

const Igcseict = () => {
  return (
    <div className="w-full bg-blue-100 relative">
      <Navbar />
      <div className="w-full max-w-[1100px] mx-auto mt-16 py-8 bg-white">
        <div className="pl-5">
          <h3 className="text-2xl font-bold text-slate-800 mb-3">
            Getting Started with
          </h3>
          <h3 className="text-xl font-semibold text-slate-800 mb-3">
            Cambridge IGCSE™ Information and Communication Technology 0417
          </h3>
          <p className="leading-relaxed text-slate-600">
            This section introduces you to the core concepts you need to
            understand to succeed in your continuous assessment in school and
            altimately in your finals. This program offers detailed but
            summarised notes of the topics both theory and practical. To make
            the most out of the content, you should go through every chapter and
            measure your understanding by attempting topical exercises provided.
          </p>
        </div>
        <div className="py-8 px-5">
          <h3 className="text-xl font-semibold text-slate-800 mb-5">Content</h3>
          {/* template */}
          <TopicCard />
          <TopicCard />
          <TopicCard />
          <TopicCard />
          <TopicCard />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Igcseict;
