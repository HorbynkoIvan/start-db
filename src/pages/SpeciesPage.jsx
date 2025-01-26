import React, { useEffect, useState } from "react";
import { useSwapi } from "@/context";

export const SpeciesPage = () => {
  const [species, setSpecies] = useState([]);
  const swapi = useSwapi();

  useEffect( () => {
    swapi.getSpecies().then((data) => {
      setSpecies(data.results);
    })
      .catch((error) => console.error("Failed to load species:", error));
  }, [swapi]);

  return (
    <ul>
      {species.map((specie) => (<li key={specie.name}>{specie.name}</li>))}
    </ul>
  );
};
