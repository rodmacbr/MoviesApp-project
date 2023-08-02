import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getPeople } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddActorToFavouritesIcon from '../components/cardIcons/addActorToFavourites'

const ActorsPage = (props) => {
    const { data, error, isLoading, isError } = useQuery('people', getPeople)

    if (isLoading) {
        return <Spinner />
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }
    const people = data ? data.results : [];

    return (
      <PageTemplate
        title="Discover Actors"
        people={people}
        action={(people) => {
          return <AddActorToFavouritesIcon people={people} />
        }}
      />
    );
  };

export default ActorsPage;