import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userLogo from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogOut = () => {
    console.log("log out");
    logOut()
      .then(() =>            {
        // Sign-out successful.
        alert("Log out successfully");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  }
  return (
    <div className="flex justify-between items-center">
      <div className="">{user && user.email}</div>
      <div className="flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex gap-3 items-center">
        <img className="w-12 rounded-full" src={`${user?user.photoURL : userLogo}`} alt="" />

        {user ? (
          <button onClick={handleLogOut} className="btn btn-primary px-8">LogOut</button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-8">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
