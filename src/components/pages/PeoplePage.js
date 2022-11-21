import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PersonDetails, PersonList } from "../sw-components";
import Row from "../row";

export const PeoplePage = () => {
  const history = useNavigate();
  const { id: itemId } = useParams();

  return (
    <Row
      left={
        <PersonList
          onItemSelected={(id) => {
            history.push(id);
          }}
        />
      }
      right={<PersonDetails itemId={itemId} />}
    />
  );
};
