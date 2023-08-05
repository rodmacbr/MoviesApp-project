/*
import React from "react";
import { useState, useEffect } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getTrendingMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddMovieToFavouritesIcon from "../components/cardIcons/addMovieToFavourites";

const TrendingMoviePage = (props) => {
  const { data, error, isLoading, isError } = useQuery("trending movies", getTrendingMovies);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data ? data.results : [];

  return (
    <div
      style={{
        backgroundImage: 'url("/src/images/pexels-dziana-hasanbekava-5480827.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <PageTemplate
        title="Trending Movies"
        movies={movies}
        action={(movie) => {
          return <AddMovieToFavouritesIcon movie={movie} />;
        }}
      />
    </div>
  );
};

export default TrendingMoviePage;
*/

import React, { useState, useEffect, useCallback } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getTrendingMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddMovieToFavouritesIcon from "../components/cardIcons/addMovieToFavourites";
import { Button, Stack } from "@mui/material";
import { useSearchParams } from 'react-router-dom';

const TrendingMoviePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageNumber = searchParams.get('page') || '1';
  console.log('pageNumber', pageNumber);
  
  const { data, error, isLoading, isError } = useQuery(
    { queryKey: ["trending movies", pageNumber],
      queryFn: async () => await getTrendingMovies({ pageNumber }),
    }
  );

  const goToPage = useCallback((page) => {
    searchParams.set('page', page);
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams]);

  const nextPage = useCallback(() => {
    const nextPage = parseInt(pageNumber, 10) + 1;
    goToPage(nextPage);
  }, [goToPage, pageNumber]);

  const prevPage = useCallback(() => {
    let prevPage = parseInt(pageNumber, 10) - 1;
    if (prevPage < 1) prevPage = 1;
    goToPage(prevPage);
  }, [goToPage, pageNumber]);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data ? data.results : [];

  return (
    <>
      <PageTemplate
        title="Trending Movies"
        movies={movies}
        action={(movie) => {
          return <AddMovieToFavouritesIcon movie={movie} />;
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

export default TrendingMoviePage;
