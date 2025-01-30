import React from "react";
import { useSwapi } from "@/context";
import { useSwapiResource } from "@/hooks";
import { Spinner } from "@components/Spinner";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export const VehiclesPage = () => {
  const swapi = useSwapi();
  const { data: vehicles, loading, error } = useSwapiResource(swapi.getVehicles);

  if (loading) return <Spinner />;
  if (error) return <div>{error}</div>;

  console.log(vehicles);
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", padding: "20px" }}>
      {vehicles.map((vehicle) => {
        const id = vehicle.url.match(/\/vehicles\/(\d+)\//)[1]; // Extract ID from URL
        return (
          <Card key={id} sx={{ backgroundColor: "#1e1e1e", color: "#ffffff" }}>
            <CardMedia
              component="img"
              height="300"
              image={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`}
              alt={vehicle.name}
              onError={(e) => e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"} // Fallback image
            />
            <CardContent>
              <Typography variant="h6">{vehicle.name}</Typography>
              <Typography variant="body2">Class: {vehicle.vehicle_class}</Typography>
              <Typography variant="body2">Model: {vehicle.model}</Typography>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
