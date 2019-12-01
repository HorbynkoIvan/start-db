import React from 'react';
import './random-planet.scss';

function PlanetView({planet}) {
  const {id, name, population, rotationPeriod, diameter} = planet;
  return (
    <>
      <img
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        className="planet-image rounded mr-4"
        alt="..."
      />
      <div className="card">
        <div className="card-header">
          <h4>{name}</h4>
        </div>
        <div className="card-body">
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
    </>
  );
}

export default PlanetView;
