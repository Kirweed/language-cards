/* eslint-disable spaced-comment */
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePageTemplate from "./HomePageTemplate";

const UnAuthNavigateTemplate = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<HomePageTemplate />} />
    </Routes>
  </BrowserRouter>
);

export default UnAuthNavigateTemplate;
