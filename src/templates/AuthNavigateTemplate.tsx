import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import DashboardTemplate from "./DashboardTemplate";
import ManageTemplate from "./ManageTemplate";

const AuthNavigateTemplate = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<DashboardTemplate />} />
      <Route path="/manage" element={<ManageTemplate />} />
    </Routes>
  </BrowserRouter>
);

export default AuthNavigateTemplate;
