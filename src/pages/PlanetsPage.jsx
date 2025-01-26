import React from "react";
import {useSwapi} from "@/context";
import { useSwapiResource } from "@/hooks";
import { Spinner } from "@components/Spinner";

export const PlanetsPage = () => {
  const swapi = useSwapi();
  const { data: planets, loading, error } = useSwapiResource(swapi.getPlanets);

  if (loading) return <Spinner />;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <ul>
        {planets.map((planet) => (<li key={planet.name}>{planet.name}</li>))}
      </ul>
    </div>
  );
};
