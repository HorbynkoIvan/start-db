import React, { Component } from 'react';
import { PlanetDetails, PlanetList } from '../sw-components';
import Row from '../row';

export default class PlanetsPage extends Component {
  state = { selectedItem: null };

  onItemSelected = selectedItem => {
    this.setState({ selectedItem });
  };

  render() {
    const { selectedItem } = this.state;
    return (
      <Row
        left={<PlanetDetails itemId={selectedItem} />}
        right={<PlanetList onItemSelected={this.onItemSelected} />}
      />
    );
  }
}
