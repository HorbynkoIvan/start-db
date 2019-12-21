import React from 'react';
import { ItemDetails, Record } from '../item-details';
import { SwapiServiceConcumer } from '../swapi-service-context';
import { withSwapiService } from '../hoc-helpers';

const PersonDetails = props => (
  <ItemDetails {...props}>
    <Record field="eyeColor" label="EyeColor" />
    <Record field="gender" label="Gender" />
  </ItemDetails>
);

const mapMethodsToProps = swapiService => ({
  getData: swapiService.getPerson,
  getImageUrl: swapiService.getPersonImage,
});
export default withSwapiService(PersonDetails, mapMethodsToProps);
