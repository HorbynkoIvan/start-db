import React, { useState } from "react";
import SwapService from "./services";
import { ErrorBoundaryWrapper } from "@components/error-boundary";
import { SwapiServiceProvider } from "@components/swapi-service-context";
import Header from "./components/header";
import RandomPlanet from "./components/random-planet";
import { LoginPage, PeoplePage, PlanetsPage, SecretPage, StarshipsPage } from "./pages";
import StarshipDetails from "./components/sw-components/starship-details";
import "./scss/app.scss";
import { BrowserRouter, Routes, Route } from "react-router";
import { CssBaseline, ThemeProvider } from "@mui/material";
import {theme} from "@theme";

const App = () => {
  const swap = new SwapService();
  const [isLoggedIn, setLogIn] = useState(false);

  return (
    <div className="container">
      <ErrorBoundaryWrapper>
        <SwapiServiceProvider value={swap}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
              <div className="stardb-app">
                <Header />
                <RandomPlanet />
                <Routes>
                  <Route path="/" element={<h2>Welcome to StarDB</h2>} />
                  {/*<Route path="/people/:id?" element={PeoplePage} />*/}
                  {/*<Route path="/planets" element={PlanetsPage} />*/}
                  {/*<Route path="/starships" element={StarshipsPage} />*/}
                  {/*<Route*/}
                  {/*  path="/login"*/}
                  {/*  element={*/}
                  {/*    <LoginPage*/}
                  {/*      isLoggedIn={isLoggedIn}*/}
                  {/*      onLogin={() => {*/}
                  {/*        setLogIn(true);*/}
                  {/*      }}*/}
                  {/*    />*/}
                  {/*  }*/}
                  {/*/>*/}
                  {/*<Route path="/secret" element={<SecretPage isLoggedIn={isLoggedIn} />} />*/}
                  <Route
                    path="/starships/:id"
                    element={<StarshipDetails />} />
                  <Route path="*" element={<h2 className="text-center">Page not found!</h2>} />
                </Routes>
              </div>
            </BrowserRouter>
          </ThemeProvider>
        </SwapiServiceProvider>
      </ErrorBoundaryWrapper>
    </div>
  );
};

export default App;
