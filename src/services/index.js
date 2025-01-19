export default class SwapService {
  _apiBase = "https://swapi.dev/api";

  _imageBase = "https://starwars-visualguide.com/assets/img";

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${this._apiBase}${url}, received ${res.status}`);
    }
    return res.json();
  };

  getAllPeople = async () => {
    const res = await this.getResource("/people/");
    return res.results.map(this._transformPerson);
  };

  getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}/`);
    return this._transformPerson(person);
  };

  getAllPlanets = async () => {
    const res = await this.getResource("/planets/");
    return res.results.map(this._transformPlanet);
  };

  getPlanet = async (id) => {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(planet);
  };

  getAllStarShips = async () => {
    const res = await this.getResource("/starships/");
    return res.results.map(this._transformStarship);
  };

  getStarShip = async (id) => {
    const starShip = await this.getResource(`/starships/${id}/`);
    return this._transformStarship(starShip);
  };

  getPlanetImage = (id) => `${this._imageBase}/planets/${id}.jpg`;

  getPersonImage = (id) => {
    console.log(id);
    return `${this._imageBase}/characters/${id}.jpg`;
  };

  getStarShipImage = (id) => `${this._imageBase}/starships/${id}.jpg`;

  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  };

  _transformPlanet = (planet) => ({
    id: this._extractId(planet),
    name: planet.name,
    population: planet.population,
    rotationPeriod: planet.rotation_period,
    diameter: planet.diameter,
  });

  _transformStarship = (starShip) => ({
    id: this._extractId(starShip),
    name: starShip.name,
    model: starShip.model,
    manufacturer: starShip.manufacturer,
    costInCredits: starShip.costInCredits,
    length: starShip.length,
    crew: starShip.crew,
    passengers: starShip.passengers,
    cargoCapacity: starShip.cargoCapacity,
  });

  _transformPerson = (person) => ({
    id: this._extractId(person),
    name: person.name,
    gender: person.gender,
    birthYear: person.birth_year,
    eyeColor: person.eye_color,
  });
}
