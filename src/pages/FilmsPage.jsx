import React  from "react";
import { useSwapi } from "@/context";
import { Spinner } from "@components/Spinner";
import { useSwapiResource } from "@/hooks";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

// episode_id
export const FilmsPage = () => {
  const swapi = useSwapi();
  const { data: films, loading, error } = useSwapiResource(swapi.getFilms);

  if (loading) return <Spinner />;
  if (error) return <div>{error}</div>;
  console.log("films" + films);
  return (
    <div>
      <ul>
        {films.map((film) => (
          <Card key={film.episode_id} sx={{ backgroundColor: "#1e1e1e", color: "#ffffff" }}>
          <CardMedia
            component="img"
            height="300"
            image={`https://starwars-visualguide.com/assets/img/films/${film.episode_id}.jpg`}
            alt={film.title}
          />
          <CardContent>
            <Typography variant="h6">{film.title}</Typography>
            <Typography variant="body2">Episode {film.episode_id}</Typography>
            <Typography variant="body2">Release Date: {film.release_date}</Typography>
          </CardContent>
        </Card>))}
      </ul>
    </div>
  );
};
