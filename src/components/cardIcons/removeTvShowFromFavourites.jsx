import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { TvShowsContext } from "../../contexts/tvShowsContext";

const RemoveTvShowFromFavouritesIcon = ({ tvShow }) => {
  const context = useContext(TvShowsContext);

  const onUserRequest = (e) => {
    e.preventDefault();
    context.removeTvShowFromFavourites(tvShow);
  };

return (
  <IconButton
    aria-label="remove tvShow from favorites"
    onClick={onUserRequest}
  >
    <DeleteIcon color="primary" fontSize="large" />
  </IconButton>
);
};

export default RemoveTvShowFromFavouritesIcon;
