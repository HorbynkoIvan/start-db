import React from 'react';
import ItemList from '../item-list/item-list';
import { withData, withSwapiService } from '../hoc-helpers';

const mapPersonMethodsToProps = swapiService => ({
  getData: swapiService.getAllPeople,
});

const mapPlanetMethodsToProps = swapiService => ({
  getData: swapiService.getAllPlanets,
});

const mapStarshipMethodsToProps = swapiService => ({
  getData: swapiService.getAllStarShips,
});

const withChildFunction = (Wrapped, fn) => props => (
  <Wrapped {...props}>{fn}</Wrapped>
);

const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ name, model }) => <span>{(name, model)}</span>;

export const PersonList = () =>
  withSwapiService(
    withData(withChildFunction(ItemList, renderName)),
    mapPersonMethodsToProps
  );

export const PlanetList = () =>
  withSwapiService(
    withData(withChildFunction(ItemList, renderName)),
    mapPlanetMethodsToProps
  );

export const StarshipList = () =>
  withSwapiService(
    withData(withChildFunction(ItemList, renderModelAndName)),
    mapStarshipMethodsToProps
  );
