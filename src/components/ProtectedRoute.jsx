import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import { useAuth } from "../store/AuthContext";

function ProtectedRoute({ children }) {
  const auth = useAuth();
  if (auth.user) return children; // routes --> render
  return <Navigate to="/login" />;
}
export default ProtectedRoute;
