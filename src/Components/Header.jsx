import React from 'react';
import logo from "../assets/logo.png"

const Header = () => {
    return (
      <div className="flex flex-col justify-center items-center gap-3">
        <img className='w-[450px]' src={logo} alt="" />
        <p className='text-[18px] text-gray-500'>Journalism Without Fear or Favour</p>
      </div>
    );
};

export default Header;