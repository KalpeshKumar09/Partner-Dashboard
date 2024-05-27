import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

const PublicRoute = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Navigate to="/Home" /> : <Outlet />;
};

export default PublicRoute;
