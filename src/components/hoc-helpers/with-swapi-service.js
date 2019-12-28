import React from 'react';
import { SwapiServiceConcumer } from '../swapi-service-context';

const withSwapiService = mapMethodsToProps => Wrapped => props => (
  <SwapiServiceConcumer>
    {swapiService => {
      const serviceProps = mapMethodsToProps(swapiService);
      return <Wrapped {...props} {...serviceProps} />;
    }}
  </SwapiServiceConcumer>
);

export default withSwapiService;
