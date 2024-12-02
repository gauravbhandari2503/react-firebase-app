import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();
  console.log(currentUser, 'current user');
  return currentUser ? children : <Navigate to="/login" />;
};

export default PrivateRoute;