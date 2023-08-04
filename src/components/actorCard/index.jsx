import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import img from '../../images/film-poster-placeholder.png'

const styles = {
  card: {
    maxWidth: 300,
    background: "linear-gradient(135deg, #607D8B, #7a5e5c)", // Blue-grey gradient
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    overflow: "hidden",
  },
  media: { 
    height: 350,
    border: "2px solid #7a5e5c", // Blue-grey border
    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
  },
  avatar: {
    backgroundColor: "#7a5e5c", // Blue-grey
  },
  header: {
    textAlign: "center",
  },
  actions: {
    justifyContent: "center",
  },
  button: {
    color: "#fff", // White text color for the button
    background: "#2196F3", // Contrasting dark blue for the button
  },
};

export default function ActorCard({ person }) {
  return (
    <Card sx={styles.card}>
      <CardHeader
        sx={styles.header}
        title={
          <Typography variant="h5" component="p">
            {person.name}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={styles.media}
        image={
          person.profile_path
            ? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
            : img
        }
      />
      <CardContent>
      </CardContent>
      <CardActions sx={styles.actions} disableSpacing>
        <Link to={`/people/${person.id}`}>
          <Button sx={styles.button} variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

