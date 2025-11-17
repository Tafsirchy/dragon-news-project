import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-3 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>
      <Marquee className="flex gap-5 cursor-pointer" speed={80} pauseOnHover={true}>
        <p className="font-semibold">
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. At, dicta...
        </p>
        <p className="font-semibold">
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. At, dicta...
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
