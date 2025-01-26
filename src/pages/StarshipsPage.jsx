import React from "react";
import { useSwapi } from "@/context";
import { useSwapiResource } from "@/hooks";
import { Spinner } from "@components/Spinner";


export const StarshipsPage = () => {
  const swapi = useSwapi();
  const { data: starships, loading, error } = useSwapiResource(swapi.getStarships);

  if (loading) return <Spinner />;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <ul>
        {starships.map((starship)=>(<li key={starship.name}>{starship.name}</li>))}
      </ul>
    </div>
  );
};
