import React from 'react';
import { ItemDetails, Record } from '../item-details';
import { SwapiServiceConcumer } from '../swapi-service-context';

export const StarshipDetails = ({ itemId }) => (
  <SwapiServiceConcumer>
    {({ getStarShip, getStarShipImage }) => (
      <ItemDetails
        itemId={itemId}
        getData={getStarShip}
        getImageUrl={getStarShipImage}
      >
        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="costInCredits" label="Cost" />
      </ItemDetails>
    )}
  </SwapiServiceConcumer>
);
