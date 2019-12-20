import React, { Component } from 'react';
import './app.css';
import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import SwapiService from '../../services';
import Row from '../row';
import { Record } from '../item-details/item-details';
import ErrorBoundry from '../error-boundry';

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
    const { selectedPerson } = this.state;
    const {
      getPerson,
      getStarShip,
      getPersonImage,
      getPlanetImage,
      getStarShipImage,
      getAllPeople,
      getAllPlanets,
    } = this.swapi;

    const personalDetails = (
      <ItemDetails itemId={11} getData={getPerson} getImageUrl={getPersonImage}>
        <Record field="eyeColor" label="EyeColor" />
        <Record field="gender" label="Gender" />
      </ItemDetails>
    );

    const starShipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarShip}
        getImageUrl={getStarShipImage}
      >
        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="costInCredits" label="Cost" />
      </ItemDetails>
    );

    return (
      <ErrorBoundry>
        <div className="stardb-app">
          <Header />
          <ItemList getData={getAllPeople}>
            {name => <span>{name}</span>}
          </ItemList>
          <ItemList getData={getAllPlanets}>
            {name => <span>{name}</span>}
          </ItemList>
        </div>
      </ErrorBoundry>
    );
  }
}

export default App;
