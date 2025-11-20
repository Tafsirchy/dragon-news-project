import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <img className="w-[450px]" src={logo} alt="" />
      <p className="text-[18px] text-gray-500 text-accent">
        The Bangladeshi News
      </p>
      <p className="text-medium text-lg text-accent">
        {format(new Date(), "EEEE, MMMM MM, yyyy")}
      </p>
    </div>
  );
};

export default Header;
