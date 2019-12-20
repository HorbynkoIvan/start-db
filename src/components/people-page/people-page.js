import React, { Component } from 'react';
import './people-page.scss';
import SwapiService from '../../services';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import ErrorIndicator from '../error-indicator';
import Row from '../row';
import ErrorBoundry from "../error-boundry";



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
    const { selectedPerson, hasError } = this.state;
    if (hasError) return <ErrorIndicator />;

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapi.getAllPeople}
        renderItem={item => `${item.name} (${item.gender}, ${item.birthYear})`}
      />
    );

    const personalDetails = <ItemDetails personId={selectedPerson} />;

    return (
      <ErrorBoundry>
        <Row left={itemList} right={personalDetails} />
      </ErrorBoundry>
    );
  }
}

export default PeoplePage;
