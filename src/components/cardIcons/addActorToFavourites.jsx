import React, { useContext } from "react";
import { PersonsContext } from "../../contexts/personsContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddActorToFavouritesIcon = ({ actor }) => {
  const context = useContext(PersonsContext);

  const onUserSelect = (e) => {
    e.preventDefault();
    context.addToFavourites(actor);
  };
  return (
    <IconButton aria-label="add person to favorites" onClick={onUserSelect}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddActorToFavouritesIcon;
