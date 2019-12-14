import React, { Component } from 'react';
import './item-details.scss';
import SwapiService from '../../services';

class ItemDetails extends Component {
  swapi = new SwapiService();

  state = { item: null };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.itemId !== this.props.itemId) {
      this.updateItem();
    }
  }

  updateItem = () => {
    const { itemId } = this.props;
    if (!itemId) return;

    this.swapi.getItem(itemId).then(item => this.setState({ item }));
  };

  render() {
    const { item } = this.state;
    if (!item) return <span>Select a item from the list</span>;
    const { id, name, gender, birthYear, eyeColor } = item;
    return (
      <div className="item-details card p-3 d-flex">
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          className="item-image card-img-left rounded mr-2"
          alt="..."
        />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ItemDetails;
