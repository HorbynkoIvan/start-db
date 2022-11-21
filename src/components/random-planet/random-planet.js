import React, { useState, useEffect } from "react";
import "./random-planet.scss";
import SwapiService from "../../services";
import Spinner from "../spinner";
import PlanetView from "./planet-view";
import ErrorIndicator from "../error-indicator";

const RandomPlanet = () => {
  const [state, setState] = useState({
    planet: {},
    loading: true,
    error: false,
  });
  /* const [planet, setPlanet] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false); */
  /* state = {
    planet: {},
    loading: true,
    error: false,
  }; */

  const swapi = new SwapiService();
  const onLoadPlanet = (planet) => setState((state) => ({ ...state, planet, loading: false }));

  const onError = (err) => setState((state) => ({ ...state, error: true, loading: false }));
  const updatePlanet = () => {
    const id = Math.floor(Math.random() * 25) + 1;
    swapi.getPlanet(id).then(onLoadPlanet).catch(onError);
  };

  useEffect(() => {
    const interval = setInterval(updatePlanet, 10000);
    return () => clearInterval(interval);
  }, [updatePlanet]);

  const { loading, error, planet } = state;
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
};

export default RandomPlanet;
