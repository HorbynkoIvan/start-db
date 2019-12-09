import React, { Component } from 'react';
import './people-page.scss';
import SwapiService from '../../services';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';

class PeoplePage extends Component {
  swapi = new SwapiService();

  state = {
    selectedPerson: 5,
    hasError: false,
  };

  onPersonSelected = id => {
    this.setState({
      selectedPerson: id,
    });
  };

  render() {
    const { selectedPerson, hasError } = this.state;
    if (hasError) return <ErrorIndicator />;
    return (
      <div className="row mb-2">
        <div className="col-md-6">
          <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapi.getAllPeople}
          />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={selectedPerson} />
        </div>
      </div>
    );
  }
}

export default PeoplePage;
