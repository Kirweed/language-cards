import React, { useEffect } from "react";
import axios from "axios";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import GlobalStyles from "./theme/GlobalStyles";
import HomePageTemplate from "./templates/HomePageTemplate";

const yourJWTToken =
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
};

const App = () => {
  useEffect(() => getData());

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <HomePageTemplate />
    </ThemeProvider>
  );
};

export default App;
