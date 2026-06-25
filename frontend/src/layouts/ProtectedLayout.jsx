import Navbar from "../components/Navbar";
import ProtectedRoute from "../routes/ProtectedRoute";
import { Outlet } from "react-router-dom";

export default function ProtectedLayout() {
  return (
    <ProtectedRoute>
      <Navbar />
      <Outlet />
    </ProtectedRoute>
  );
}