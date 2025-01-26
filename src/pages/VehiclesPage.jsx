import React from "react";
import { useSwapi } from "@/context";
import { useSwapiResource } from "@/hooks";
import { Spinner } from "@components/Spinner";

export const VehiclesPage = () => {
  const swapi = useSwapi();
  const { data: vehicles, loading, error } = useSwapiResource(swapi.getVehicles);

  if (loading) return <Spinner />;
  if (error) return <div>{error}</div>;

  return (
    <ul>
      {vehicles.map((vehicle) => (<li key={vehicle.name}>{vehicle.name}</li>))}
    </ul>
  );
};
