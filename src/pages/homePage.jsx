import React, { useState, useEffect, useCallback } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import { useSearchParams } from 'react-router-dom';
import Spinner from "../components/spinner";
import AddMovieToFavouritesIcon from '../components/cardIcons/addMovieToFavourites'
import { Button, Stack } from "@mui/material";

const HomePage = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageNumber = searchParams.get('page') || '1'
  console.log('pageNumber', pageNumber);
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["discover", pageNumber],
    queryFn: async () => await getMovies({ pageNumber }),
  });

  const goToPage = useCallback((page) => {
    searchParams.set('page', page);
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams]); 

  const nextPage = useCallback(() => {
    const nextPage = parseInt(pageNumber, 10) + 1;
    goToPage(nextPage)
  }, [goToPage]);

  const prevPage = useCallback(() => {
    let prevPage = parseInt(pageNumber, 10) - 1;
    if (prevPage < 1) prevPage = 1;
    goToPage(prevPage)
  }, [goToPage]);

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
        title="Discover Movies"
        movies={movies}
        action={(movie) => {
          return <AddMovieToFavouritesIcon movie={movie} />
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
export default HomePage;
