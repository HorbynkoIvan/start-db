import React from "react";
import { useNavigate, useParams } from "react-router";
// import { PersonDetails, PersonList } from "@components/sw-components";
import Row from "@components/row";

export const PeoplePage = () => {
  const history = useNavigate();
  const { id: itemId } = useParams();

  return (
    <div>1</div>
    // <Row
    //   left={
    //     <PersonList
    //       onItemSelected={(id) => {
    //         history.push(id);
    //       }}
    //     />
    //   }
    //   right={<PersonDetails itemId={itemId} />}
    // />
  );
};
