import React from "react";
import PageTemplate from '../components/templatePeoplePage'
import AddToPlaylistIcon from '../components/cardIcons/addToPlaylist'
import { useQuery } from "react-query";
import { getPeople } from "../api/tmdb-api";
import Spinner from "../components/spinner";


const PeoplePage = (props) => {
  const { data, error, isLoading, isError } = useQuery("people", getPeople);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const people = data ? data.results : [];

  return (
    <PageTemplate
      title='People'
      people={people}
    />
  );
};
export default PeoplePage;
