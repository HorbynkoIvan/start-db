import React, { Component } from 'react';
import Spinner from '../spinner';
import { SwapiServiceConcumer } from '../swapi-service-context';

const withSwapiService = Wrapped => props => (
  <SwapiServiceConcumer>
    {swapiService => <Wrapped {...props} swapiService={swapiService} />}
  </SwapiServiceConcumer>
);

export default withSwapiService;
