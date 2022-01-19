import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { TokenProvider } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <TokenProvider>
    <App />
    </TokenProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
