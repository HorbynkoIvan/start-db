import React from 'react';
import { ItemDetails, Record } from '../item-details';
import { SwapiServiceConcumer } from '../swapi-service-context';
import { withSwapiService } from '../hoc-helpers';

export const PersonDetails = ({ itemId, swapiService }) => {
  const { getPerson, getPersonImage } = swapiService;
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPerson}
      getImageUrl={getPersonImage}
    >
      <Record field="eyeColor" label="EyeColor" />
      <Record field="gender" label="Gender" />
    </ItemDetails>
  );
};

export default withSwapiService(PersonDetails);
