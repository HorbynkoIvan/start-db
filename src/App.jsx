import React from "react";
import { ErrorBoundaryWrapper } from "@components/error-boundary";
import { SwapiServiceProvider } from "@components/swapi-service-context";
import { BrowserRouter } from "react-router";
import { CssBaseline, ThemeProvider } from "@mui/material";
import {theme} from "@theme";
import {Router} from "@routes";

const App = () => {
  return (
    <div className="container">
      <ErrorBoundaryWrapper>
        <SwapiServiceProvider value={{  }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
              <Router/>
            </BrowserRouter>
          </ThemeProvider>
        </SwapiServiceProvider>
      </ErrorBoundaryWrapper>
    </div>
  );
};

export default App;
