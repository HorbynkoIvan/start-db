import React, { useEffect, useState } from "react";
import {useSwapi} from "@/context";

export const PlanetsPage = () => {
  const [planets, setPlanets] = useState([]);
  const swapi = useSwapi();

  useEffect(()=>{
    swapi.getPlanets().then((data)=>{setPlanets(data.results)})
      .catch((error) => console.error("Failed to load planets:", error));
  }, [swapi]);

  return (
    <div>
      <ul>
        {planets.map((planet) => (<li key={planet.name}>{planet.name}</li>))}
      </ul>
    </div>
  );
};
