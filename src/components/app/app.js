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
      />
    );

    return (
      <div className="container">
        <Header />
        {/* <RandomPlanet />
        <PeoplePage /> */}
        <Row left={starShipDetails} right={personalDetails} />
      </div>
    );
  }
}

export default App;
