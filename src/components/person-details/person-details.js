import React, { Component } from 'react';
import './person-details.css';
import SwapiService from '../../services';

class PersonDetails extends Component {
  swapi = new SwapiService();

  state = { person: null };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.personId !== this.props.personId) {
      this.updatePerson();
    }
  }

  updatePerson = () => {
    const { personId } = this.props;
    if (!personId) return;

    this.swapi.getPerson(personId).then(person => this.setState({ person }));
  };

  render() {
    const { person } = this.state;
    if (!person) return <span>Select a person from the list</span>;
    const { id, name, gender, birthYear, eyeColor } = person;
    return (
      <div className="person-details card">
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          className="person-image"
          alt="..."
        />
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">{gender}</span>
              <span>male</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default PersonDetails;
