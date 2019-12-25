import React, { Component } from 'react';
import './app.css';
import Header from '../header';
import SwapiService from '../../services';
import ErrorBoundry from '../error-boundry';
import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList,
  PlanetList,
  StarshipList,
} from '../sw-components';
import Row from '../row';
import { SwapiServiceProvider } from '../swapi-service-context';
import RandomPlanet from '../random-planet';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';

class App extends Component {
  swapi = new SwapiService();

  render() {
    return (
      <div className="container">
        <ErrorBoundry>
          <SwapiServiceProvider value={this.swapi}>
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
  }
}

export default App;
