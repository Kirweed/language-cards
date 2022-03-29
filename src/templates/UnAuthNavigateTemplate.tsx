/* eslint-disable spaced-comment */
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RegisterView from "../views/registerView";
import HomePageTemplate from "./HomePageTemplate";

const UnAuthNavigateTemplate = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<HomePageTemplate />} />
      <Route path="/register" element={<RegisterView />} />
    </Routes>
  </BrowserRouter>
);

export default UnAuthNavigateTemplate;
