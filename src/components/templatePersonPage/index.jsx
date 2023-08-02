import React from "react";
import Grid from "@mui/material/Grid";
import Image from "mui-image";
import PersonFactsSidebar from "../personFactsSidebar";

const styles = {
  gridListRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  gridList: {
    width: 450,
    height: '100vh',
  },
};

const TemplatePersonPage = ({ person, children }) => {
  return (
    <>
      <Grid container spacing={5} style={{ padding: "15px" }}>
        <Grid item xs={3}>
          <PersonFactsSidebar person={person} />
        </Grid>

        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplatePersonPage;
