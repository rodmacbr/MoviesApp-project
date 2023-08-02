/*
import React, { useState } from "react";
import Header from "../headerActorList";
import FilterCard from "../filterActorCard";
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import ActorList from "../actorList";

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

function ActorListPageTemplate({ people }) {
 // const [titleFilter, setTitleFilter] = useState("");
 // const [drawerOpen, setDrawerOpen] = useState(false);


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
      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        sx={styles.fab}
      >
        Filter
      </Fab>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <FilterCard
          onUserInput={handleChange}
          titleFilter={titleFilter}
          genreFilter={genreFilter}
        />
      </Drawer>
    </>  
  );
}
export default ActorListPageTemplate;
*/

import React, { useState } from "react";
import Header from "../headerActorList";
import FilterCard from "../filterActorCard";
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import ActorList from "../actorList";

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

function ActorListPageTemplate({ persons, title, action }) {
  const [titleFilter, setTitleFilter] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);


  return (
   <>
      <Grid container sx={styles.root}>
        <Grid item xs={12}>
          <Header title={title} />
        </Grid>
        <Grid item container spacing={5}>
          <ActorList
            action={action}
            persons={displayedPersons}
          />
        </Grid>
      </Grid>
      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        sx={styles.fab}
      >
        Filter
      </Fab>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <FilterCard
          onUserInput={handleChange}
          titleFilter={titleFilter}
          genreFilter={genreFilter}
        />
      </Drawer>
    </>  
  );
}
export default ActorListPageTemplate;

