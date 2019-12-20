import React from 'react';
import { ItemDetails, Record } from '../item-details';
import { SwapiServiceConcumer } from '../swapi-service-context';

export const PersonDetails = ({ itemId }) => (
  <SwapiServiceConcumer>
    {({ getPerson, getPersonImage }) => (
      <ItemDetails
        itemId={itemId}
        getData={getPerson}
        getImageUrl={getPersonImage}
      >
        <Record field="eyeColor" label="EyeColor" />
        <Record field="gender" label="Gender" />
      </ItemDetails>
    )}
  </SwapiServiceConcumer>
);