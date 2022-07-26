import React from "react";
// import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

const Privacy = () => {
  return (
    <div className="w-full bg-blue-100 relative">
      <Navbar />
      <div className="w-full max-w-[1100px] mx-auto mt-16 py-8">
        <div className="max-w-[740px] px-5">
          <h3 className="text-2xl text-slate-900 font-semibold mb-3">
            Terms and Conditions
          </h3>
          <p className="mb-5 leading-relaxed text-slate-600 text-justify">
            By accessing this web site, you are agreeing to be bound by these
            web site Terms and Conditions of Use. If you do not agree with any
            of these terms, you are prohibited from using or accessing this
            site.
          </p>
          <h3 className="text-xl text-slate-900 font-semibold mb-3">
            Use License
          </h3>
          <p className="mb-5 leading-relaxed text-slate-600 text-justify">
            Permission is granted to temporarily download one copy of the
            materials (information or software) on e-STEM Lab.com's web site for
            personal, non-commercial transitory viewing only. This license shall
            automatically terminate if you violate the restrictions and may be
            terminated by devChallenges at any time.
          </p>
          <h3 className="text-xl text-slate-900 font-semibold mb-3">
            Disclaimers
          </h3>
          <p className="mb-5 leading-relaxed text-slate-600 text-justify">
            You accept all risks of using the website and content on the
            website. As far as the law allows, we provide the website as is,
            without any warranty whatsoever. The website may hyperlink to and
            integrate websites and services run by others. We do not make any
            warranty about services run by others, or content they may provide.
            Use of services run by others may be governed by other terms between
            you and the one running the service
          </p>
          <h3 className="text-xl text-slate-900 font-semibold mb-3">
            Limits on Liability
          </h3>
          <p className="mb-5 leading-relaxed text-slate-600 text-justify">
            In no event shall e-STEM Lab or its suppliers be liable for any
            damages (including, without limitation, damages for loss of data or
            profit, or due to business interruption,) arising out of the use or
            inability to use the materials on e-STEM Lab's site
          </p>
          <h3 className="text-xl text-slate-900 font-semibold mb-3">
            Termination
          </h3>
          <p className="mb-5 leading-relaxed text-slate-600 text-justify">
            Either you or we may end the agreement written out in these terms at
            any time. When our agreement ends, your permission to use the
            website also ends.
          </p>
          <h3 className="text-xl text-slate-900 font-semibold mb-3">
            Copyright / Takedown
          </h3>
          <p className="mb-5 leading-relaxed text-slate-600 text-justify">
            Users agree and certify that we have rights to share all content
            that they post on estamlab.com — including, but not limited to,
            discussions, information posted in solutions, and feedback in our
            social media. This rule applies to prose, screenshots, collections
            of links, etc. Regardless of citation, users may not post copy and
            pasted content that does not belong to them. Users assume all risk
            for the content they post, including someone else's reliance on its
            accuracy, claims relating to intellectual property, or other legal
            rights.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
