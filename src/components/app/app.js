import React, { Component } from 'react';
import './app.css';
import Header from '../header';
import ItemDetails from '../item-details';
import SwapiService from '../../services';
import Row from '../row';
import ErrorBoundry from '../error-boundry';
import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList,
  PlanetList,
  StarshipList,
} from '../sw-components';

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
        <div className='container'>
          <ErrorBoundry>
          <div className="stardb-app">
            <Header/>

            <PersonDetails itemId={10}/>
            <PlanetDetails itemId={7}/>
            <StarshipDetails itemId={15}/>

            <PersonList>{({name}) => <span>{name}</span>}</PersonList>
            <PlanetList>{({name}) => <span>{name}</span>}</PlanetList>
            <StarshipList>{({name}) => <span>{name}</span>}</StarshipList>
          </div>
        </ErrorBoundry></div>
    );
  }
}

export default App;
