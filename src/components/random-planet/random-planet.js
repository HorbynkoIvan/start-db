import React, { Component } from 'react';
import './random-planet.css';
import SwapiService from '../../services';
import Spinner from '../spinner';
import PlanetView from './planet-view';

class RandomPlanet extends Component {
  state = {
    planet: {},
    loading: true,
  };

  swapi = new SwapiService();

  constructor() {
    super();
    this.updatePlanet();
  }

  onLoadPlanet = planet => this.setState({ planet, loading: false });

  updatePlanet() {
    const id = Math.floor(Math.random() * 25) + 2;
    this.swapi.getPlanet(id).then(this.onLoadPlanet);
  }

  render() {
    const { planet, loading } = this.state;
    return (
      <div className="random-planet jumbotron rounded">
        {loading ? <Spinner /> : <PlanetView planet={planet} />}
      </div>
    );
  }
}

export default RandomPlanet;
