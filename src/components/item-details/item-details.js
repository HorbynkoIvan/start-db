import React, { Component } from "react";
import "./item-details.scss";
import SwapiService from "../../services";

export const Record = ({ item, field, label }) => (
  <li className="list-group-item">
    <span className="term">{label}</span>
    <span>{field}</span>
    <span>{item[field]}</span>
  </li>
);

class ItemDetails extends Component {
  swapi = new SwapiService();

  state = { item: null, image: null };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.itemId !== this.props.itemId) {
      this.updateItem();
    }
  }

  updateItem = () => {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) return;
    getData(itemId).then((item) => this.setState({ item, image: getImageUrl(itemId) }));
  };

  render() {
    const { item, image } = this.state;
    if (!item) return <span>Select a item from the list</span>;
    const { name } = item;
    return (
      <div className="item-details card p-3 d-flex">
        <img src={image} className="item-image card-img-left rounded mr-2" alt="..." />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <ul className="list-group list-group-flush">
            {React.Children.map(this.props.children, (child, i) =>
              React.cloneElement(child, { item })
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default ItemDetails;
