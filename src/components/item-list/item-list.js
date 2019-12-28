import React from 'react';
import './item-list.css';
import PropTypes from 'prop-types';
import withData from '../hoc-helpers/with-data';
import SwapiService from '../../services';

const { getAllPeople } = new SwapiService();

const ItemList = props => {
  const { data, onItemSelected, children: renderLabel } = props;
  const items = data.map(item => {
    const { id } = item;
    const label = renderLabel(item);
    return (
      <li
        className="list-group-item list-group"
        key={id}
        onClick={() => onItemSelected(id)}
      >
        {label}
      </li>
    );
  });

  return <ul className="item-list list-group">{items}</ul>;
};

ItemList.defaultProps = {
  onItemSelected: () => {},
};
ItemList.propTypes = {
  onItemSelected: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.func.isRequired
};
export default withData(ItemList, getAllPeople);
