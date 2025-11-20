import React from "react";
import { Link } from "react-router";

const Registration = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5">
        <h2 className="font-semibold text-2xl text-center">
          Login your account
        </h2>
        <div className="card-body">
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input type="text" className="input w-full" placeholder="Name" />
            {/* Photo URL */}
            <label className="label">Photo URL</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Photo URL"
            />
            {/* email */}
            <label className="label">Email</label>
            <input type="email" className="input w-full" placeholder="Email" />

            {/* password */}
            <label className="label">Password</label>
            <input
              type="password"
              className="input w-full"
              placeholder="Password"
            />

            <button className="btn btn-neutral mt-4">Register</button>
            <p className="font-semibold text-center mt-4 ">
              Already Have An Account ?{" "}
              <Link to="/auth/login" className="text-[#f8635b]">
                {" "}
                Login
              </Link>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Registration;
