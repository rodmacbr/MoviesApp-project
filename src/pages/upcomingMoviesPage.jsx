import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getUpcomingMovies } from "../api/tmdb-api";
import { MoviesContext } from "../contexts/moviesContext";

import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import RemoveMovieFromFavouritesIcon from "../components/cardIcons/removeMovieFromFavourites";
import WriteMovieReviewIcon from "../components/cardIcons/writeMovieReview";
import ListPage from "./ListPage";
import AddMovieToFavouritesIcon from "../components/cardIcons/addMovieToFavourites";

const UpcomingMoviesPage = () => {
  const { favourites, addToFavourites } = useContext(MoviesContext);
  const { data, error, isLoading, isError } = useQuery("upcomingmovies", getUpcomingMovies);

  if (isLoading) {
    return <Spinner />;
  }

  const movies = data
    ? data.results.map((movie) => ({ ...movie, favourite: favourites.some((fav) => fav.id === movie.id)}))
    : [];

  return (
    <ListPage
      title="Upcoming Movies"
      movies={movies}
      selectFavourite={addToFavourites}
      movieActions={(movie) => {
        return (
          <>
            {movie.favourite ? (
              <RemoveMovieFromFavouritesIcon movie={movie} />
            ) : (
              <AddMovieToFavouritesIcon movie={movie} />
            )}
            <WriteMovieReviewIcon movie={movie} />
          </>
        );
      }}
    />
  );
};

export default UpcomingMoviesPage;

