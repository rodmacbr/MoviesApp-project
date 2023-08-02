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

const TvShowHeader = (props) => {
  const tvShow = props.tvShow;
  const [isFavorite, setIsFavorite] = useState(false);


  useEffect(() => {
    const tvShowFavorites = JSON.parse(localStorage.getItem("tvShowFavorites")) || [];

    const isCurrentTvShowFavorite = tvShowFavorites.some(
      (favTvShow) => favTvShow.id === tvShow.id
    );

    setIsFavorite(isCurrentTvShowFavorite);
  }, [tvShow.id]);


return (
  <Paper component="div" sx={styles.root}>
    <IconButton aria-label="go back">
      <ArrowBackIcon color="primary" fontSize="large" />
    </IconButton>

    <Typography variant="h4" component="h3">
      {tvShow.title}{"   "}
      <a href={tvShow.homepage}>
        <HomeIcon color="primary" fontSize="large" />
      </a>
      <br />
      <span>{`${tvShow.tagline}`} </span>
    </Typography>

    {/* Render the red heart icon if the movie is a favorite */}
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

export default TvShowHeader;
