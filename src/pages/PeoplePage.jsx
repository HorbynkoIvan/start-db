import React, { useEffect, useState } from "react";
import { useSwapi } from "@/context";

export const PeoplePage = () => {
  const [people, setPeople] = useState([]);
  const swapi = useSwapi();

  useEffect( () => {
    swapi.getPeople().then((data) => {
      setPeople(data.results);
    })
      .catch((error) => console.error("Failed to load people:", error));
  }, [swapi]);

  return (
    <ul>
      {people.map((people) => (<li key={people.id}>{people.name}</li>))}
    </ul>
  );
};
