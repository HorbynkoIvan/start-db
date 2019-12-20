import React from 'react';
import ItemList from '../item-list/item-list';
import {withData} from '../hoc-helpers';
import SwapiService from '../../services';

const swapiService = new SwapiService();

const {getAllPeople, getAllStarShips, getAllPlanets} = swapiService;

const withChildFunction = (Wrapped, fn) => props => (
    <Wrapped {...props}>{fn}</Wrapped>
);
const renderName = ({name}) => (<span>{name}</span>);
const renderModelAndName = ({name, model}) => (<span>{name} ({model})</span>);

const PersonList = () => withData(withChildFunction(ItemList, renderName), getAllPeople);
const PlanetList = () => withData(withChildFunction(ItemList, renderName), getAllPlanets);
const StarshipList = () => withData(withChildFunction(ItemList, renderModelAndName), getAllStarShips);

export {PersonList, PlanetList, StarshipList};
