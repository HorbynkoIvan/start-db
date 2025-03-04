import React from "react";
import { ErrorBoundaryWrapper } from "@components/ErrorBoundary";
import { BrowserRouter } from "react-router";
import { CssBaseline, ThemeProvider } from "@mui/material";
import {theme} from "@theme";
import {Router} from "@routes";
import { SwapiServiceProvider } from "@/context";

const App = () => {
  return (
      <ErrorBoundaryWrapper>
        <SwapiServiceProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
              <Router/>
            </BrowserRouter>
          </ThemeProvider>
        </SwapiServiceProvider>
      </ErrorBoundaryWrapper>
  );
};

export default App;
