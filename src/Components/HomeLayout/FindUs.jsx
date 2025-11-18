import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { PiFacebookLogoDuotone } from "react-icons/pi";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Find Us on</h2>
      <div>
        <div className="w-full join join-vertical">
          <button className="btn bg-base-100 justify-start join-item hover:bg-secondary hover:text-white hover:transition-all duration-300">
            <FaFacebook size={16}></FaFacebook> Facebook
          </button>
          <button className="btn bg-base-100 justify-start join-item hover:bg-info hover:text-white hover:transition-all duration-300">
            <FaTwitter size={16}></FaTwitter>
            Twitter
          </button>
          <button className="btn bg-base-100 justify-start join-item hover:bg-warning hover:text-white hover:transition-all duration-300">
            <AiFillInstagram size={16}></AiFillInstagram>
            Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
