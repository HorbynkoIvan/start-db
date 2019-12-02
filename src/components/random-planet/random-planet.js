import React, { Component } from 'react';
import './random-planet.scss';
import SwapiService from '../../services';
import Spinner from '../spinner';
import PlanetView from './planet-view';
import ErrorIndicator from '../error-indicator';

class RandomPlanet extends Component {
  state = {
    planet: {},
    loading: true,
    error: false,
  };

  swapi = new SwapiService();

  constructor() {
    super();
    this.updatePlanet();
  }

  onLoadPlanet = planet => this.setState({ planet, loading: false });

  onError = err => this.setState({ error: true, loading: false });

  updatePlanet() {
    const id = Math.floor(Math.random() * 25) + 2;
    this.swapi
      .getPlanet(id)
      .then(this.onLoadPlanet)
      .catch(this.onError);
  }

  render() {
    const { planet, loading, error } = this.state;
    const hasData = !(loading || error);
    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={planet} /> : null;
    return (
      <div className="random-planet jumbotron rounded d-flex">
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}

export default RandomPlanet;
