import React from 'react';
import { ItemDetails, Record } from '../item-details';
import { SwapiServiceConcumer } from '../swapi-service-context';

export const PlanetDetails = ({ itemId }) => (
  <SwapiServiceConcumer>
    {({ getPlanet, getPlanetImage }) => (
      <ItemDetails
        itemId={itemId}
        getData={getPlanet}
        getImageUrl={getPlanetImage}
      >
        <Record field="population" label="Population" />
        <Record field="rotationPeriod" label="Rotation Period" />
        <Record field="diameter" label="Diameter" />
      </ItemDetails>
    )}
  </SwapiServiceConcumer>
);
