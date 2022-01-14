/* eslint-disable spaced-comment */
import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePageTemplate from "./HomePageTemplate";
import DashboardTemplate from "./DashboardTemplate";
import TokenContext from "../context";

/*const yourJWTToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQxNDE1ODk2LCJpYXQiOjE2NDE0MTU1OTYsImp0aSI6ImFjNzY1YTQwZDU4YjQ3ZWM4MzhiM2MwNzc3ZjM5YTZiIiwidXNlcl9pZCI6MX0.ktIuSTZGCusZDZelOT_LvqLRcvYM67NPjHPt2UGWSNA";

const getData = () => {
  axios
    .get("http://127.0.0.1:8000/language-cards/", {
      headers: {
        Authorization: `Bearer ${yourJWTToken}`,
      },
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};*/

const NavigateTemplate = () => {
  const { tokens } = useContext(TokenContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePageTemplate />} />
        <Route
          path="/dashboard"
          element={
            tokens.access && tokens.refresh ? (
              <DashboardTemplate />
            ) : (
              <Navigate replace to="/home" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default NavigateTemplate;
