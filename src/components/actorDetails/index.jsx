import React from "react";
import Typography from "@mui/material/Typography";


const styles = {
  chipSet: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
  },
  chipLabel: {
    margin: 0.5,
  },
  fab: { 
    position: "fixed",
    top: 50,
    right: 2,
  },
};

const ActorDetails = ( {person}) => {
  return (
    <>
      <Typography variant="h5" component="h3">
        {person.name}
      </Typography>

      <Typography variant="p" component="p">
        {person.biography}
      </Typography>
    </>
  );
};
export default ActorDetails ;
