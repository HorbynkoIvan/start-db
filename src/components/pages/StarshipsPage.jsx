import React from "react";
import { useNavigate } from "react-router";
import { StarshipList } from "../sw-components";

export const StarshipsPage = () => {
  const history = useNavigate();

  return <StarshipList onItemSelected={(itemId) => history.push(itemId)} />;
};
