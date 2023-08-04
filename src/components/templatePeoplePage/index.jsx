import React from "react";
import Grid from "@mui/material/Grid";
import Person from "../actorCard";

const styles = {
  root: {
    padding: "20px",
  },
  fab: {
    marginTop: 8,
    position: "fixed",
    top: 2,
    right: 2,
  },
};

function PeopleListPageTemplate({ people }) {
  return (
    <>
      <Grid container sx={styles.root}>
        <Grid item container spacing={1}>
            {people.map((person) => (
              <Grid key={person.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
                <Person key={person.id} person={person} />
              </Grid>
            ))}
        </Grid>
      </Grid>
    </>  
  );
}
export default PeopleListPageTemplate;
