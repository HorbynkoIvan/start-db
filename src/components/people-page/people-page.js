import React, { Component } from 'react';
import './people-page.scss';
import SwapiService from '../../services';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

class PeoplePage extends Component {
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
      <div className="row mb-2">
        <div className="col-md-6">
          <ItemList onItemSelected={this.onPersonSelected} />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={selectedPerson} />
        </div>
      </div>
    );
  }
}

export default PeoplePage;
