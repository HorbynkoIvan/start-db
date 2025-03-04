import React from "react";
import {useSwapi} from "@/context";
import { useSwapiResource } from "@/hooks";
import { Spinner } from "@components/Spinner";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

// no id
export const PlanetsPage = () => {
  const swapi = useSwapi();
  const { data: planets, loading, error } = useSwapiResource(swapi.getPlanets);

  if (loading) return <Spinner />;
  if (error) return <div>{error}</div>;

  console.log(planets);
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", padding: "20px" }}>
      {planets.map((planet) => {
        const id = planet.url.match(/\/planets\/(\d+)\//)[1]; // Extract ID from URL
        console.log(id);
        return (
          <Card key={id} sx={{ backgroundColor: "#1e1e1e", color: "#ffffff" }}>
            <CardMedia
              component="img"
              height="300"
              image={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
              alt={planet.name}
              onError={(e) => e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"} // Fallback image
            />
            <CardContent>
              <Typography variant="h6">{planet.name}</Typography>
              <Typography variant="body2">Height: {planet.population}</Typography>
              <Typography variant="body2">Birth Year: {planet.terrain}</Typography>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
