import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { PersonDetails, PersonList } from '../sw-components';
import Row from '../row';

const PeoplePage = () => {
  const history = useHistory();
  const { id: itemId } = useParams();
  return (
    <Row
      left={
        <PersonList
          onItemSelected={id => {
            history.push(id);
          }}
        />
      }
      right={<PersonDetails itemId={itemId} />}
    />
  );
};

export default PeoplePage;
