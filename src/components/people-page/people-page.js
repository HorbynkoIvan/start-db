import React, { Component } from 'react';
import './people-page.scss';
import SwapiService from '../../services';

class PeoplePage extends Component {
    swapi = new SwapiService();

    render() {
        return (
            <div>PeoplePage</div>
        );
    }
}

export default PeoplePage;
