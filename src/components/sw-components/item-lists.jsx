import React from "react";
import ItemList from "../item-list/item-list";
import { withData, withSwapiService, withChildFunction, compose } from "../hoc-helpers";

const mapPersonMethodsToProps = (swapiService) => ({
  getData: swapiService.getAllPeople,
});

const mapPlanetMethodsToProps = (swapiService) => ({
  getData: swapiService.getAllPlanets,
});

const mapStarshipMethodsToProps = (swapiService) => ({
  getData: swapiService.getAllStarShips,
});

const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ name, model }) => <span>{(name, model)}</span>;

export const PersonList = compose(
  withSwapiService(mapPersonMethodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);

export const PlanetList = compose(
  withSwapiService(mapPlanetMethodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);

export const StarshipList = compose(
  withSwapiService(mapStarshipMethodsToProps),
  withData,
  withChildFunction(renderModelAndName)
)(ItemList);
