import React from "react";
import { useSwapi } from "@/context";
import { useSwapiResource } from "@/hooks";
import { Spinner } from "@components/Spinner";

export const SpeciesPage = () => {
  const swapi = useSwapi();
  const { data: species, loading, error } = useSwapiResource(swapi.getSpecies);

  if (loading) return <Spinner />;
  if (error) return <div>{error}</div>;

  return (
    <ul>
      {species.map((specie) => (<li key={specie.name}>{specie.name}</li>))}
    </ul>
  );
};
