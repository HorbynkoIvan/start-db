import React from "react";
import { useSwapi } from "@/context";
import { useSwapiResource } from "@/hooks";
import { Spinner } from "@components/Spinner";

// no id
export const PeoplePage = () => {
  const swapi = useSwapi();
  const { data: people, loading, error } = useSwapiResource(swapi.getPeople);

  if (loading) return <Spinner />;
  if (error) return <div>{error}</div>;
  console.log(people);
  return (
    <ul>
      {people.map((people) => (<li key={people.name}>{people.name}</li>))}
    </ul>
  );
};
