import React, {Component} from 'react';
import Spinner from '../spinner';
import {SwapiServiceConcumer} from '../swapi-service-context';

const withSwapiService = (Wrapped, mapMethodsToProps) => props => (
    <SwapiServiceConcumer>
        {swapiService => {
            const serviceProps = mapMethodsToProps(swapiService)
            return (<Wrapped {...props} {...serviceProps}/>)
        }}
    </SwapiServiceConcumer>
);

export default withSwapiService;
