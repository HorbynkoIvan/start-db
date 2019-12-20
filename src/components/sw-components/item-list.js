import React from 'react';
import ItemList from '../item-list/item-list';
import { withData } from '../hoc-helpers';
import SwapiService from '../../services';

const swapiService = new SwapiService();

const { getAllPeople, getAllStarShips, getAllPlanets } = swapiService;

const PersonList = () => withData(ItemList, getAllPeople);
const PlanetList = () => withData(ItemList, getAllPlanets);
const StarshipList = () => withData(ItemList, getAllStarShips);

export { PersonList, PlanetList, StarshipList };
