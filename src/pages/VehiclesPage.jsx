import React, { useEffect, useState } from "react";
import { useSwapi } from "@/context";

export const VehiclesPage = () => {
  const [vehicles, setVehicles] = useState([]);
  const swapi = useSwapi();

  useEffect( () => {
    swapi.getVehicles().then((data) => {
      setVehicles(data.results);
    })
      .catch((error) => console.error("Failed to load vehicles:", error));
  }, [swapi]);

  return (
    <ul>
      {vehicles.map((vehicle) => (<li key={vehicle.name}>{vehicle.name}</li>))}
    </ul>
  );
};
