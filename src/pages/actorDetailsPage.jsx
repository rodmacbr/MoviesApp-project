import React from "react";
import { useParams } from "react-router-dom";
import PageTemplate from "../components/templateActorPage";
import ActorDetails from "../components/actorDetails";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Image from "mui-image";
import { Typography } from "@mui/material";
import { getPerson } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import Grid from "@mui/material/Grid";

const styles = {
  img: {
    width: "100%",
    height: "auto",
    maxWidth: 360,
    borderRadius: "25px",
  },
  list: {
    width: "100%",
    maxWidth: 360,
  },
};

const genderMap = {
  1: "Female",
  2: "Male",
};

const ActorDetailsPage = () => {
  const { id } = useParams();

  const { data: person, error, isLoading, isError } = useQuery(
    ["person", { id: id }],
    getPerson
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {person ? (
        <PageTemplate person={person}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <List component="nav" aria-label="person details" sx={styles.list}>
                <ListItem>
                  <Image
                    src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
                    alt={person.name}
                    style={styles.img}
                  />
                </ListItem>
                <ListItem>
                  <Typography variant="h5" component="h3">
                    Personal Info
                  </Typography>
                </ListItem>
                <ListItem>
                  <ListItemText primary="Known for" secondary={person.known_for_department} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Gender" secondary={genderMap[person.gender]} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Birthday" secondary={person.birthday} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Place of Birth" secondary={person.place_of_birth} />
                </ListItem>
                {person.also_known_as.length > 0 && (
                  <ListItem>
                    <ListItemText
                      primary="Also Known As"
                      secondary={person.also_known_as.map((alias, index) => (
                        <div key={index}>{alias}</div>
                      ))}
                    />
                  </ListItem>
                )}
                <ListItem>
                  <ListItemText primary="Popularity" secondary={person.popularity} />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={8}>
              <ActorDetails person={person} />
              {/* Removed the biography section */}
            </Grid>
          </Grid>
        </PageTemplate>
      ) : (
        <p>Waiting for person's details</p>
      )}
    </>
  );
};

export default ActorDetailsPage;
