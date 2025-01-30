import React from "react";
import { useSwapi } from "@/context";
import { useSwapiResource } from "@/hooks";
import { Spinner } from "@components/Spinner";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

//no id
export const SpeciesPage = () => {
  const swapi = useSwapi();
  const { data: species, loading, error } = useSwapiResource(swapi.getSpecies);

  if (loading) return <Spinner />;
  if (error) return <div>{error}</div>;

  console.log(species);
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", padding: "20px" }}>
      {species.map((kind) => {
        const id = kind.url.match(/\/species\/(\d+)\//)[1]; // Extract ID from URL
        return (
          <Card key={id} sx={{ backgroundColor: "#1e1e1e", color: "#ffffff" }}>
            <CardMedia
              component="img"
              height="300"
              image={`https://starwars-visualguide.com/assets/img/species/${id}.jpg`}
              alt={kind.name}
              onError={(e) => e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"} // Fallback image
            />
            <CardContent>
              <Typography variant="h6">{kind.name}</Typography>
              <Typography variant="body2">Classification: {kind.classification}</Typography>
              <Typography variant="body2">Language: {kind.language}</Typography>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
