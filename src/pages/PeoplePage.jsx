import React from "react";
import { useSwapi } from "@/context";
import { useSwapiResource } from "@/hooks";
import { Spinner } from "@components/Spinner";

export const PeoplePage = () => {
  const swapi = useSwapi();
  const { data: people, loading, error } = useSwapiResource(swapi.getPeople);

  if (loading) return <Spinner />;
  if (error) return <div>{error}</div>;

  return (
    <ul>
      {people.map((people) => (<li key={people.name}>{people.name}</li>))}
    </ul>
  );
};
