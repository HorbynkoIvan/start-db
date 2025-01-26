import React, { useEffect, useState } from "react";
import { useSwapi } from "@/context";


export const StarshipsPage = () => {
  const [starships, setStarships] = useState([]);
  const swapi = useSwapi();

  useEffect(()=>{
    swapi.getStarships().then((data)=>{setStarships(data.results)})
      .catch((error) => console.error("Failed to load starships:", error));
  }, [swapi]);

  return (
    <div>
      <ul>
        {starships.map((starship)=>(<li key={starship.name}>{starship.name}</li>))}
      </ul>
    </div>
  );
};
