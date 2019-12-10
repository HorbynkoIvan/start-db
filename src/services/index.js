export default class SwapiService {
  _apiBase = 'https://swapi.co/api';

  getResource = async url => {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(
        `Could not fetch ${this._apiBase}${url}, received ${res.status}`
      );
    }
    return res.json();
  };

  getAllPeople = async () => {
    const res = await this.getResource('/people/');
    return res.results.map(this._transformPerson);
  };

  getPerson = async id => {
    const person = await this.getResource(`/people/${id}/`);
    return this._transformPerson(person);
  };

  getAllPlanets = async () => {
    const res = await this.getResource('/planets/');
    return res.results.map(this._transformPlanet);
  };

  getPlanet = async id => {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(planet);
  };

  getAllStarShips = async () => {
    const res = await this.getResource('/starships/');
    return res.results.map(this._transformStarship);
  };

  getStarShip = async id => {
    const starShip = await this.getResource(`/starships/${id}/`);
    return this._transformStarship(starShip);
  };

  _extractId = item => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  };

  _transformPlanet = planet => ({
    id: this._extractId(planet),
    name: planet.name,
    population: planet.population,
    rotationPeriod: planet.rotation_period,
    diameter: planet.diameter,
  });

  _transformStarship = starShip => ({
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

  _transformPerson = person => ({
    id: this._extractId(person),
    name: person.name,
    gender: person.gender,
    birthYear: person.birth_year,
    eyeColor: person.eye_color,
  });
}

const swapi = new SwapiService();

/* swapi.getAllPeople().then(people => {
  people.forEach(person => console.log(person.name));
});

swapi.getPerson(3).then(person => {
  console.log(person.name);
}); */

/* 2)
const getResource = async url => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, received ${res.status}`);
  }
  const body = await res.json();
  return body;
};

getResource('https://swapi.co/api/people/1')
  .then(body => console.table('body', body))
  .catch(err => console.error(`Could not fetch ${err}`)); */

/* 1)
fetch('https://swapi.co/api/people/1').then((res) => {
    return res.json()
}).then((body) => {
    console.table('body', body)
}); */
