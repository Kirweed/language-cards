import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import GlobalStyles from "./theme/GlobalStyles";
import { TokenProvider } from "./context";
import NavigateTemplate from "./templates/NavigateTemplate";

const App = () => (
  <TokenProvider>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NavigateTemplate />
    </ThemeProvider>
  </TokenProvider>
);

export default App;
