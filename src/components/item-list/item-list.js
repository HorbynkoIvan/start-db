import React, { Component } from 'react';
import './item-list.css';
import SwapiService from '../../services';
import Spinner from '../spinner';

class ItemList extends Component {
  swapi = new SwapiService();

  state = {
    peopleList: null,
  };

  componentDidMount() {
    this.swapi.getAllPeople().then(res => this.setState({ peopleList: res }));
  }

  renderItems(arr) {
    return arr.map(person => (
      <li className="list-group-item">{person.name}</li>
    ));
  }

  render() {
    const { peopleList } = this.state;
    if (!peopleList) return <Spinner />;
    return (
      <ul className="item-list list-group">{this.renderItems(peopleList)}</ul>
    );
  }
}

export default ItemList;
