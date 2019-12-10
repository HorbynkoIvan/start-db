import React, { Component } from 'react';
import './people-page.scss';
import SwapiService from '../../services';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';

const Row = ({ left, right }) => (
  <div className="row mb-2">
    <div className="col-md-6">{left}</div>
    <div className="col-md-6">{right}</div>
  </div>
);

class ErrorBoundry extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
    });
  }

  render() {
    if (this.state.hasError) return <ErrorIndicator />;
    return this.props.children;
  }
}

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

    const personalDetails = <PersonDetails personId={selectedPerson} />;

    return (
      <ErrorBoundry>
        <Row left={itemList} right={personalDetails} />
      </ErrorBoundry>
    );
  }
}

export default PeoplePage;