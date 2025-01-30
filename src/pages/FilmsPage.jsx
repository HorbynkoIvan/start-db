import React  from "react";
import { useSwapi } from "@/context";
import { Spinner } from "@components/Spinner";
import { useSwapiResource } from "@/hooks";

// episode_id
export const FilmsPage = () => {
  const swapi = useSwapi();
  const { data: films, loading, error } = useSwapiResource(swapi.getFilms);

  if (loading) return <Spinner />;
  if (error) return <div>{error}</div>;
  console.log(films);
  return (
    <div>
      <ul>
        {films.map((film) => (<li key={film.episode_id}>{film.title}</li>))}
      </ul>
    </div>
  );
};
