import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Image from "mui-image";
import { Typography } from "@mui/material";

const styles = {
  img: {
    width: '100%',
    height: 'auto',
    maxWidth: 360,
    borderRadius: '25px',
  },
  list: {
    width: '100%',
    maxWidth: 360,
  }
};

const genderMap = {
  1: "Female",
  2: "Male",
};

const PersonFactsSidebar = ({person}) => {
  return (
    <>
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
        <ListItem>
          <ListItemText primary="Also Known As" secondary={
            person.also_known_as.map((alias, index) => <div key={index}>{alias}</div>)
          } />
        </ListItem>
        <ListItem>
          <ListItemText primary="Popularity" secondary={person.popularity} />
        </ListItem>
      </List>
    </>
  );
};
export default PersonFactsSidebar;
