import React, { useState } from "react";
import SwapiService from "./services";
import ErrorBoundry from "./components/error-boundry";
import { SwapiServiceProvider } from "./components/swapi-service-context";
import Header from "./components/header";
import RandomPlanet from "./components/random-planet";
import { LoginPage, PeoplePage, PlanetsPage, SecretPage, StarshipsPage } from "./components/pages";
import StarshipDetails from "./components/sw-components/starship-details";
import "./scss/app.scss"
import { BrowserRouter, Routes, Route } from "react-router";

const App = () => {
    const swapi = new SwapiService();
    const [isLoggedIn, setLogIn] = useState(false);

    return (
      <div className="container">
          <ErrorBoundry>
              <SwapiServiceProvider value={swapi}>
                <BrowserRouter>
                      <div className="stardb-app">
                          <Header />
                          <RandomPlanet />
                          <Routes>
                              <Route path="/" render={() => <h2>Welcome to StarDB</h2>} exact />
                              <Route path="/people/:id?" element={PeoplePage} />
                              <Route path="/planets" element={PlanetsPage} />
                              <Route path="/starships" exact element={StarshipsPage} />
                              <Route
                                path="/login"
                                render={() => (
                                  <LoginPage
                                    isLoggedIn={isLoggedIn}
                                    onLogin={() => {
                                        setLogIn(true);
                                    }}
                                  />
                                )}
                              />
                              <Route path="/secret" render={() => <SecretPage isLoggedIn={isLoggedIn} />} />
                              <Route
                                path="/starships/:id"
                                render={({ match }) => {
                                    const { id } = match.params;
                                    return <StarshipDetails itemId={id} />;
                                }}
                              />

                              {/* <Navigate to="/" /> */}
                              <Route render={() => <h2 className="text-center">Page not found!</h2>} />
                          </Routes>
                      </div>
                </BrowserRouter>
              </SwapiServiceProvider>
          </ErrorBoundry>
      </div>
    );
}

export default App;
