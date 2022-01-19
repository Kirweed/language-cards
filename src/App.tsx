import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import GlobalStyles from "./theme/GlobalStyles";
import { useAuth } from "./context";
import UnAuthNavigateTemplate from "./templates/UnAuthNavigateTemplate";
import AuthNavigateTemplate from "./templates/AuthNavigateTemplate";

const App = () => {
  const auth = useAuth();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {auth.isAuthenticated ? <AuthNavigateTemplate /> : <UnAuthNavigateTemplate />}
    </ThemeProvider>
  )
}

export default App;
