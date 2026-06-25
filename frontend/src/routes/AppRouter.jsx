import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Home from "../pages/Home";
import NewsDetail from "../pages/NewsDetail";
import Categories from "../pages/Categories";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import GoogleSuccess from "../pages/GoogleSuccess";
import ProtectedLayout from "../layouts/ProtectedLayout";
import Register from "../pages/Register";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* 🔓 PUBLICO */}
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
<Route path="/register" element={<Register />} />
        {/* 🔐 PRIVADO (con Navbar) */}
        <Route element={<ProtectedLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/categories" element={<Categories />} />
        </Route>

        {/* OAuth callback (puede ser público o protegido según flujo) */}
        <Route path="/google-success" element={<GoogleSuccess />} />

      </Routes>
    </BrowserRouter>
  );
}