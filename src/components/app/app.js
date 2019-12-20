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
import { SwapiServiceProvider } from '../swapi-service-context';

class App extends Component {
  swapi = new SwapiService();

  state = {
    selectedPerson: 5,
  };

  onPersonSelected = id => {
    this.setState({
      selectedPerson: id,
    });
  };

  render() {
    return (
      <div className="container">
        <ErrorBoundry>
          <SwapiServiceProvider value={this.swapi}>
            <div className="stardb-app">
              <Header />

              <PersonDetails itemId={10} />
              <PlanetDetails itemId={7} />
              <StarshipDetails itemId={15} />

              <PersonList />
              <PlanetList />
              <StarshipList />
            </div>
          </SwapiServiceProvider>
        </ErrorBoundry>
      </div>
    );
  }
}

export default App;
