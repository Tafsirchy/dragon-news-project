import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router";
import Loading from "../Pages/Loading";
import { useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  // console.log(user);
  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }
  // if ---> user thake children children
  if (user && user?.email) {
    return children;
  } else {
    return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
  }
  // else ---> navigate login page
};

export default PrivateRoute;
