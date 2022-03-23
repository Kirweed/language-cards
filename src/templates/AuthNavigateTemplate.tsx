import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import DashboardTemplate from "./DashboardTemplate";
import ManageTemplate from "./ManageTemplate";
import CollectionView from "../views/CollectionView";
import LearnView from "../views/LearnView";

const AuthNavigateTemplate = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<DashboardTemplate />} />
      <Route path="/manage" element={<ManageTemplate />} />
      <Route path="/manage/collection/:id" element={<CollectionView />} />
      <Route path="/learn" element={<LearnView />} />
    </Routes>
  </BrowserRouter>
);

export default AuthNavigateTemplate;
