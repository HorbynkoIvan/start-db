import React, { useEffect, useState } from "react";
import {useSwapi} from "@/context";

export const FilmsPage = () => {
 const swapi = useSwapi();

  const [films, setFilms] = useState([]);

  useEffect(()=>{
    swapi.getFilms().then((data)=>{setFilms(data.results)})
      .catch((error) => console.error("Failed to load films:", error));
  }, [swapi]);

  return (
    <div>
      <ul>
        {films.map((film)=>(<li key={film.episode_id}>{film.title}</li>))}
      </ul>
    </div>
  );
};
