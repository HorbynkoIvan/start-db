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

class App extends Component {
  swapi = new SwapiService();

  state = {
    showRandomPlanet: true,
  };

  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
    return (
      <div className="container">
        <ErrorBoundry>
          <SwapiServiceProvider value={this.swapi}>
            <div className="stardb-app">
              <Header />
              {planet}
              <Row
                left={<PersonDetails itemId={10} />}
                right={<PersonList />}
              />
              <Row left={<PlanetDetails itemId={7} />} right={<PlanetList />} />
              <Row
                left={<StarshipDetails itemId={15} />}
                right={<StarshipList />}
              />
            </div>
          </SwapiServiceProvider>
        </ErrorBoundry>
      </div>
    );
  }
}

export default App;
