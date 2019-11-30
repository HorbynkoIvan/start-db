import React, { Component } from 'react';
import './random-planet.css';
import SwapiService from '../../services';

class RandomPlanet extends Component {
  state = {
    planet: {},
  };

  swapi = new SwapiService();

  constructor() {
    super();
    this.updatePlanet();
  }

  onLoadPlanet = planet => this.setState({ planet });

  updatePlanet() {
    const id = Math.floor(Math.random() * 25) + 2;
    this.swapi.getPlanet(id).then(this.onLoadPlanet);
  }

  render() {
    const { planet: {id, name, population, rotationPeriod, diameter} } = this.state;
    return (
      <div className="random-planet jumbotron rounded">
        <img
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          className="planet-image"
          alt="..."
        />
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default RandomPlanet;
