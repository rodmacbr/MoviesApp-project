import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getPeople } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddActorToFavouritesIcon from '../components/cardIcons/addActorToFavourites'

const ActorsPage = (props) => {
    const { data, error, isLoading, isError } = useQuery('person', getPeople)

    if (isLoading) {
        return <Spinner />
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }
    const persons = data ? data.results : [];

    return (
      <PageTemplate
        title="Discover Actors"
        persons={persons}
        action={(person) => {
          return <AddActorToFavouritesIcon person={person} />
        }}
      />
    );
  };

export default ActorsPage;