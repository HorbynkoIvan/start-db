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
    return arr.map(({ id, name }) => (
      <li
        className="list-group-item"
        key={id}
        onClick={() => this.props.onItemSelected(id)}
      >
        {name}
      </li>
    ));
  }

  render() {
    const { peopleList } = this.state;
    if (!peopleList) return <Spinner />;
    const items = this.renderItems(peopleList);
    return <ul className="item-list list-group">{items}</ul>;
  }
}

export default ItemList;
