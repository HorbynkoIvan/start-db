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

const withChildFunction = fn => Wrapped => props => (
  <Wrapped {...props}>{fn}</Wrapped>
);

const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ name, model }) => <span>{(name, model)}</span>;

export const PersonList = () =>
  withSwapiService(mapPersonMethodsToProps)(
    withData(withChildFunction(renderName)(ItemList))
  );

export const PlanetList = () =>
  withSwapiService(mapPlanetMethodsToProps)(
    withData(withChildFunction(renderName)(ItemList))
  );

export const StarshipList = () =>
  withSwapiService(mapStarshipMethodsToProps)(
    withData(withChildFunction(renderModelAndName)(ItemList))
  );
