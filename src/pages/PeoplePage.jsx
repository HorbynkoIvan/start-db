import React from "react";
import { useSwapi } from "@/context";
import { useSwapiResource } from "@/hooks";
import { Spinner } from "@components/Spinner";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

// no id
export const PeoplePage = () => {
  const swapi = useSwapi();
  const { data: people, loading, error } = useSwapiResource(swapi.getPeople);

  if (loading) return <Spinner />;
  if (error) return <div>{error}</div>;
  console.log(people);
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", padding: "20px" }}>
      {people.map((person) => {
        const id = person.url.match(/\/people\/(\d+)\//)[1]; // Extract ID from URL
        return (
          <Card key={id} sx={{ backgroundColor: "#1e1e1e", color: "#ffffff" }}>
            <CardMedia
              component="img"
              height="300"
              image={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
              alt={person.name}
              onError={(e) => e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"} // Fallback image
            />
            <CardContent>
              <Typography variant="h6">{person.name}</Typography>
              <Typography variant="body2">Height: {person.height} cm</Typography>
              <Typography variant="body2">Birth Year: {person.birth_year}</Typography>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
