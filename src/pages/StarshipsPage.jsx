import React from "react";
import { useNavigate } from "react-router";
import { StarshipList } from "@components/sw-components";

export const StarshipsPage = () => {
  const history = useNavigate();

  return <StarshipList onItemSelected={(itemId) => history.push(itemId)} />;
};
