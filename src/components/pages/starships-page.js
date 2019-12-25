import React, { Component } from 'react';
import { StarshipDetails, StarshipList } from '../sw-components';
import Row from '../row';

export default class StarshipsPage extends Component {
  state = { selectedItem: null };

  onItemSelected = selectedItem => {
    this.setState({ selectedItem });
  };

  render() {
    const { selectedItem } = this.state;
    return (
      <Row
        left={<StarshipDetails itemId={selectedItem} />}
        right={<StarshipList onItemSelected={this.onItemSelected} />}
      />
    );
  }
}
