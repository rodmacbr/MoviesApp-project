/*
import React, { useContext } from "react";
import ListPage from "../pages/ListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie, getTvShow } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import RemoveMovieFromFavourites from "../components/cardIcons/removeMovieFromFavourites";
import RemoveTvShowFromFavourites from "../components/cardIcons/removeTvShowFromFavourites";
import WriteMovieReview from "../components/cardIcons/writeMovieReview";
import WriteTvShowReview from "../components/cardIcons/writeTvShowReview";
import { TvShowsContext } from "../contexts/tvShowsContext";

const FavouritePage = (props) => {
  const { favourites: movieFavourites } = useContext(MoviesContext);
  const { tvShowFavourites } = useContext(TvShowsContext);

  // Create an array of queries and run them in parallel.
  const favouriteMovieQueries = useQueries(
    movieFavourites.map((movieId) => {
      return {
        queryKey: ["movie", { id: movieId }],
        queryFn: getMovie,
      };
    })
  );

  const favouriteTvShowQueries = useQueries(
    tvShowFavourites.map((tvShowId) => {
      return {
        queryKey: ["tvshows", { id: tvShowId }],
        queryFn: getTvShow,
      };
    })
  );

  const allQueries = [
    ...favouriteMovieQueries,
    ...favouriteTvShowQueries,
  ];
  // Check if any of the parallel queries is still loading.
  const isLoading = allQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const movies = favouriteMovieQueries.map((q) => q.data);
  const tvShows = favouriteTvShowQueries.map((q) => q.data);

  return (
    <ListPage
      title="Favourites"
      movies={movies}
      tvShows={tvShows}
      movieActions={(movie) => {
        return (
          <>
            <RemoveMovieFromFavourites movie={movie} />
            <WriteMovieReview movie={movie} />
          </>
        );
      }}
      tvShowActions={(tvShow) => (
        <>
            <RemoveTvShowFromFavourites tvShow={tvShow} />
            <WriteTvShowReview tvShow={tvShow} />
          </>
      )}
    />
  );
};

export default FavouritePage;
*/

import React, { useContext } from "react";
import ListPage from "../pages/ListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie, getTvShow } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import RemoveMovieFromFavourites from "../components/cardIcons/removeMovieFromFavourites";
import RemoveTvShowFromFavourites from "../components/cardIcons/removeTvShowFromFavourites";
import WriteMovieReview from "../components/cardIcons/writeMovieReview";
import WriteTvShowReview from "../components/cardIcons/writeTvShowReview";
import { TvShowsContext } from "../contexts/tvShowsContext";

const FavouritePage = (props) => {
  const { favourites: movieFavourites } = useContext(MoviesContext);
  const { tvShowFavourites } = useContext(TvShowsContext);

  // Create an array of queries and run them in parallel.
  const favouriteMovieQueries = useQueries(
    movieFavourites.map((movieId) => {
      return {
        queryKey: ["movie", { id: movieId }],
        queryFn: getMovie,
      };
    })
  );

  const favouriteTvShowQueries = useQueries(
    tvShowFavourites.map((tvShowId) => {
      return {
        queryKey: ["tvshows", { id: tvShowId }],
        queryFn: getTvShow,
      };
    })
  );

  const allQueries = [...favouriteMovieQueries, ...favouriteTvShowQueries];
  // Check if any of the parallel queries is still loading.
  const isLoading = allQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const movies = favouriteMovieQueries.map((q) => q.data);
  const tvShows = favouriteTvShowQueries.map((q) => q.data);

  // Sort movies by title
  movies.sort((a, b) => a.title.localeCompare(b.title));

  return (
    <ListPage
      title="Favourites"
      movies={movies}
      tvShows={tvShows}
      movieActions={(movie) => {
        return (
          <>
            <RemoveMovieFromFavourites movie={movie} />
            <WriteMovieReview movie={movie} />
          </>
        );
      }}
      tvShowActions={(tvShow) => (
        <>
          <RemoveTvShowFromFavourites tvShow={tvShow} />
          <WriteTvShowReview tvShow={tvShow} />
        </>
      )}
    />
  );
};

export default FavouritePage;

