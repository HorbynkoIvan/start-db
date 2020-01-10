import React from 'react';
import { withRouter } from 'react-router-dom';
import { PersonDetails, PersonList } from '../sw-components';
import Row from '../row';

const PeoplePage = ({ history, match }) => {
  const { itemId } = match.params;
  return (
    <Row
      left={<PersonDetails itemId={itemId} />}
      right={(
        <PersonList
          onItemSelected={id => {
            history.push(id);
          }}
        />
      )}
    />
  );
};

export default withRouter(PeoplePage);
