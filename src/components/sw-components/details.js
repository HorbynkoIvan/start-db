import React from 'react';
import { ItemDetails, Record } from '../item-details';
import SwapiService from '../../services';

const swapiService = new SwapiService();

const {
  getPerson,
  getPlanet,
  getStarShip,
  getPersonImage,
  getPlanetImage,
  getStarShipImage,
} = swapiService;

const PersonDetails = ({ itemId }) => (
  <ItemDetails itemId={itemId} getData={getPerson} getImageUrl={getPersonImage}>
    <Record field="eyeColor" label="EyeColor" />
    <Record field="gender" label="Gender" />
  </ItemDetails>
);
const PlanetDetails = ({ itemId }) => (
  <ItemDetails itemId={itemId} getData={getPlanet} getImageUrl={getPlanetImage}>
    <Record field="population" label="Population" />
    <Record field="rotationPeriod" label="Rotation Period" />
    <Record field="diameter" label="Diameter" />
  </ItemDetails>
);
const StarshipDetails = ({ itemId }) => (
  <ItemDetails
    itemId={itemId}
    getData={getStarShip}
    getImageUrl={getStarShipImage}
  >
    <Record field="model" label="Model" />
    <Record field="length" label="Length" />
    <Record field="costInCredits" label="Cost" />
  </ItemDetails>
);

export { PersonDetails, PlanetDetails, StarshipDetails };
