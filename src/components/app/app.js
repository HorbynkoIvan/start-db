import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./app.scss";
import Header from "../header";
import SwapiService from "../../services";
import ErrorBoundry from "../error-boundry";

import { SwapiServiceProvider } from "../swapi-service-context";
import RandomPlanet from "../random-planet";
import { PeoplePage, PlanetsPage, StarshipsPage, SecretPage, LoginPage } from "../pages";
import StarshipDetails from "../sw-components/starship-details";

const App = () => {
  const swapi = new SwapiService();
  const [isLoggedIn, setLogIn] = useState(false);

  return (
    <div className="container">
      <ErrorBoundry>
        <SwapiServiceProvider value={swapi}>
          <Router>
            <div className="stardb-app">
              <Header />
              <RandomPlanet />
              <Routes>
                <Route path="/" render={() => <h2>Welcome to StarDB</h2>} exact />
                <Route path="/people/:id?" component={PeoplePage} />
                <Route path="/planets" component={PlanetsPage} />
                <Route path="/starships" exact component={StarshipsPage} />
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
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    </div>
  );
};

export default App;
