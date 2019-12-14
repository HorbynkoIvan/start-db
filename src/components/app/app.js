import React, { Component } from 'react';
import './app.css';
import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import SwapiService from '../../services';

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
    return (
      <div className="container">
        <Header />
        <RandomPlanet />
        <PeoplePage />

        <div className="row mb-2">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapi.getAllPlanets}
              renderItem={item => item.name}
            />
          </div>
          <div className="col-md-6">
            <ItemDetails personId={selectedPerson} />
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapi.getAllStarShips}
              renderItem={item => item.name}
            />
          </div>
          <div className="col-md-6">
            <ItemDetails personId={selectedPerson} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
