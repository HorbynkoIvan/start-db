import React, { useState } from "react";
import SwapService from "./services";
import ErrorBoundary from "./components/error-boundary";
import { SwapiServiceProvider } from "@components/swapi-service-context";
import Header from "./components/header";
import RandomPlanet from "./components/random-planet";
import { LoginPage, PeoplePage, PlanetsPage, SecretPage, StarshipsPage } from "@components/pages";
import StarshipDetails from "./components/sw-components/starship-details";
import "./scss/app.scss";
import { BrowserRouter, Routes, Route } from "react-router";

const App = () => {
  const swapi = new SwapService();
  const [isLoggedIn, setLogIn] = useState(false);

  return (
    <div className="container">
      <ErrorBoundary>
        <SwapiServiceProvider value={swapi}>
          <BrowserRouter>
            <div className="stardb-app">
              <Header />
              <RandomPlanet />
              <Routes>
                <Route path="/" element={<h2>Welcome to StarDB</h2>} />
                <Route path="/people/:id?" element={PeoplePage} />
                <Route path="/planets" element={PlanetsPage} />
                <Route path="/starships" element={StarshipsPage} />
                <Route
                  path="/login"
                  element={
                    <LoginPage
                      isLoggedIn={isLoggedIn}
                      onLogin={() => {
                        setLogIn(true);
                      }}
                    />
                  }
                />
                <Route path="/secret" element={<SecretPage isLoggedIn={isLoggedIn} />} />
                <Route
                  path="/starships/:id"
                  element={<StarshipDetails />} />
                <Route path="*" element={<h2 className="text-center">Page not found!</h2>} />
              </Routes>
            </div>
          </BrowserRouter>
        </SwapiServiceProvider>
      </ErrorBoundary>
    </div>
  );
};

export default App;
