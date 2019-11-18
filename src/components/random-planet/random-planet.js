import React, { Component } from 'react';
import './random-planet.css';
import SwapiService from '../../services';

class RandomPlanet extends Component {
    const swapi = new SwapiService();
  state = {
    name: null,
    population: null,
    rotationPeriod: null,
    diameter: null,
  };

  constructor() {
    super();
    this.updatePlanet();
  }

  updatePlanet() {
      this.swapi.getPlanet(7).then((planet)=>{
          this.setState({
              name: planet.name,
              population: planet.population,
              rotationPeriod: planet.rotation_period,
              diameter: planet.diameter,
          })
      })
  }

  render() {
    const { name, population, rotationPeriod, diameter } = this.state;
    return (
      <div className="random-planet jumbotron rounded">
        <img src="" className="planet-image" alt="..." />
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
