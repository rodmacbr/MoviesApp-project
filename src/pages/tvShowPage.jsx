/*
import React, { useState, useEffect } from "react";
import { getTvShows } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddTvShowToFavouritesIcon from '../components/cardIcons/addTvShowToFavourites'
import PageTemplate from "../components/templateTvShowListPage";

const TvShowListPage = (props) => {
  const { data, error, isLoading, isError } = useQuery("discover TV shows", getTvShows);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const tvShows = data ? data.results : [];

  return (
    <PageTemplate
      title="Discover TV shows"
      tvShows={tvShows}
      action={(tvShow) => { 
        return <AddTvShowToFavouritesIcon tvShow={tvShow} />
      }}
    />
  );
};
export default TvShowListPage;



import React, { useState, useEffect, useCallback } from "react";
import { getTvShows } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddTvShowToFavouritesIcon from '../components/cardIcons/addTvShowToFavourites';
import PageTemplate from "../components/templateTvShowListPage";
import { Button, Stack } from "@mui/material";
import { useSearchParams } from "react-router-dom";

const TvShowListPage = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageNumber = searchParams.get('page') || '1';

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

  const { data, error, isLoading, isError } = useQuery(
    { queryKey: ["discover TV shows", pageNumber], queryFn: getTvShows },
    { keepPreviousData: true }
  );

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const tvShows = data ? data.results : [];

  return (
    <>
      <PageTemplate
        title="Discover TV shows"
        tvShows={tvShows}
        action={(tvShow) => { 
          return <AddTvShowToFavouritesIcon tvShow={tvShow} />
        }}
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

export default TvShowListPage;

*/

import React, { useState, useEffect, useCallback } from "react";
import PageTemplate from "../components/templateTvShowListPage";
import { getTvShows } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddTvShowToFavouritesIcon from '../components/cardIcons/addTvShowToFavourites';
import { Button, Stack } from "@mui/material";
import { useSearchParams } from 'react-router-dom';

const TvShowListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageNumber = searchParams.get('page') || '1'
  console.log('pageNumber', pageNumber);
  const { data, error, isLoading, isError } = useQuery(
    { queryKey: ["discover TV shows", pageNumber], 
    queryFn: async () => await getTvShows({ pageNumber }),
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

  const tvShows = data ? data.results : [];

  return (
    <>
      <PageTemplate
        title="Discover TV shows"
        tvShows={tvShows}
        action={(tvShow) => { 
          return <AddTvShowToFavouritesIcon tvShow={tvShow} />
        }}
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

export default TvShowListPage;
