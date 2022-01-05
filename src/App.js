import React, { useEffect } from "react";
import axios from "axios";

const yourJWTToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQxNDE1ODk2LCJpYXQiOjE2NDE0MTU1OTYsImp0aSI6ImFjNzY1YTQwZDU4YjQ3ZWM4MzhiM2MwNzc3ZjM5YTZiIiwidXNlcl9pZCI6MX0.ktIuSTZGCusZDZelOT_LvqLRcvYM67NPjHPt2UGWSNA";

const getData = () => {
  axios
    .get("http://127.0.0.1:8000/language-cards/", {
      headers: {
        Authorization: "Bearer " + yourJWTToken,
      },
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

const App = () => {
  useEffect(() => getData());

  return <h1>new app</h1>;
};

export default App;
