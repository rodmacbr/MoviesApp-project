/*
import React from "react";
import PageTemplate from '../components/templatePeoplePage'
// import AddToPlaylistIcon from '../components/cardIcons/addToPlaylist'
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
*/

import React, { useState, useEffect, useCallback } from "react";
import PageTemplate from '../components/templatePeoplePage';
// import AddToPlaylistIcon from '../components/cardIcons/addToPlaylist';
import { useQuery } from "react-query";
import { getPeople } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import { Button, Stack } from "@mui/material";
import { useSearchParams } from "react-router-dom";

const PeoplePage = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageNumber = searchParams.get('page') || '1'
  console.log('pageNumber', pageNumber);
  const { data, error, isLoading, isError } = useQuery(
    { queryKey: ["people", pageNumber], 
    queryFn: async () => await getPeople({ pageNumber }),
  });


  const goToPage = useCallback((page) => {
    searchParams.set('page', page);
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams]);

  const nextPage = useCallback(() => {
    const nextPage = parseInt(pageNumber, 10) + 1;
    goToPage(nextPage);
  }, [goToPage]);

  const prevPage = useCallback(() => {
    let prevPage = parseInt(pageNumber, 10) - 1;
    if (prevPage < 1) prevPage = 1;
    goToPage(prevPage);
  }, [goToPage]);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const people = data ? data.results : [];

  return (
    <>
      <PageTemplate
        title='People'
        people={people}
      />
      <Stack direction="row" justifyContent="center" alignItems="center">
        {pageNumber !== "1" && (
          <Button onClick={prevPage} variant="contained">
            Prev Page
          </Button>
        )}
        <Button onClick={nextPage} variant="contained">
          Next Page
        </Button>
      </Stack>
    </>
  );
};

export default PeoplePage;
