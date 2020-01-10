import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './app.css';
import Header from '../header';
import SwapiService from '../../services';
import ErrorBoundry from '../error-boundry';

import { SwapiServiceProvider } from '../swapi-service-context';
import RandomPlanet from '../random-planet';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';
import StarshipDetails from '../sw-components/starship-details';

const App = () => {
  const swapi = new SwapiService();
  return (
    <div className="container">
      <ErrorBoundry>
        <SwapiServiceProvider value={swapi}>
          <Router>
            <div className="stardb-app">
              <Header />
              <RandomPlanet />

              <Route path="/" render={() => <h2>Welcome to StarDB</h2>} exact />
              <Route path="/people" component={PeoplePage} />
              <Route path="/planets" component={PlanetsPage} />
              <Route path="/starships" exact component={StarshipsPage} />
              <Route
                path="/starships/:id"
                render={({ match }) => {
                  const { id } = match.params;
                  return <StarshipDetails itemId={id} />;
                }}
              />
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    </div>
  );
};

export default App;
