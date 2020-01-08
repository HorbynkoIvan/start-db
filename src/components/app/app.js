import React from 'react';
import './app.css';
import Header from '../header';
import SwapiService from '../../services';
import ErrorBoundry from '../error-boundry';

import { SwapiServiceProvider } from '../swapi-service-context';
import RandomPlanet from '../random-planet';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';

const App = () => {
  const swapi = new SwapiService();
  return (
    <div className="container">
      <ErrorBoundry>
        <SwapiServiceProvider value={swapi}>
          <div className="stardb-app">
            <Header />
            <RandomPlanet />
            <PeoplePage />
            <PlanetsPage />
            <StarshipsPage />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    </div>
  );
};

export default App;
