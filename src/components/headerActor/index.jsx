import React, { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";

const styles = {
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 1.5,
  },
  heartIcon: {
    color: "red",
    marginRight: "8px",
  },
};

const ActorHeader = (props) => {
  const person = props.person;
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const actorFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const isCurrentActorFavorite = actorFavorites.some(
      (favActor) => favActor.id === actor.id
    );

    setIsFavorite(isCurrentActorFavorite);
  }, [actor.id]);

  return (
    <Paper component="div" sx={styles.root}>
      <IconButton aria-label="go back">
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>

      <Typography variant="h4" component="h3">
        {person.title}{"   "}
        <a href={person.homepage}>
          <HomeIcon color="primary" fontSize="large" />
        </a>
        <br />
        <span>{`${person.tagline}`} </span>
      </Typography>

      {/* Render the red heart icon if the actor is a favorite */}
      {isFavorite && (
        <IconButton aria-label="favorite">
          <FavoriteIcon color="error" fontSize="large" />
        </IconButton>
      )}

      <IconButton aria-label="go forward">
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default ActorHeader;
