import React from "react";
import { useSwapi } from "@/context";
import { useSwapiResource } from "@/hooks";
import { Spinner } from "@components/Spinner";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

// no id
export const StarshipsPage = () => {
  const swapi = useSwapi();
  const { data: starships, loading, error } = useSwapiResource(swapi.getStarships);

  if (loading) return <Spinner />;
  if (error) return <div>{error}</div>;

  console.log(starships);
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", padding: "20px" }}>
      {starships.map((ship) => {
        const id = ship.url.match(/\/starships\/(\d+)\//)[1]; // Extract ID from URL
        return (
          <Card key={id} sx={{ backgroundColor: "#1e1e1e", color: "#ffffff" }}>
            <CardMedia
              component="img"
              height="300"
              image={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
              alt={ship.name}
              onError={(e) => e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"} // Fallback image
            />
            <CardContent>
              <Typography variant="h6">{ship.name}</Typography>
              <Typography variant="body2">Class: {ship.starship_class}</Typography>
              <Typography variant="body2">Model: {ship.model}</Typography>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
