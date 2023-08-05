import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import TrendingMoviePage from './pages/trendingPage';
import TvShowPage from "./pages/tvShowPage";
import MovieDetailPage from "./pages/movieDetailsPage";
import TvShowDetailPage from "./pages/tvShowDetailsPage";
import FavouritePage from "./pages/favouritePage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import TvShowReviewPage from "./pages/tvShowReviewPage";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import AddTvShowReviewPage from './pages/addTvShowReviewPage'
import SiteHeader from './components/siteHeader'
import MoviesContextProvider from "./contexts/moviesContext";
import TvShowsContextProvider from "./contexts/tvShowsContext";
import ReviewContextProvider from "./contexts/ReviewContext";
import PeoplePage from "./pages/peoplePage";
import ActorPage from "./pages/actorDetailsPage"





const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
          <TvShowsContextProvider>
            <ReviewContextProvider>
              <Routes>
                <Route path="/movieReviews/form" element={<AddMovieReviewPage/>} />
                <Route path="/tvShowReviews/form" element={<AddTvShowReviewPage/>} />
                <Route path="/movieReviews/:id" element={<MovieReviewPage/>} />
                <Route path="/tvShowReviews/:id" element={<TvShowReviewPage/>} />
                <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
                <Route path="/favourites" element={<FavouritePage />} />
                <Route path="/movies/:id" element={<MoviePage />} />
                <Route path="/tvShows" element={<TvShowPage />} />
                <Route path="/people" element={<PeoplePage />} />
                <Route path="/people/:id" element={<ActorPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="/movies/:id" element={<MovieDetailPage />} />
                <Route path="/tvShows/:id" element={<TvShowDetailPage />} />
                <Route path="/trendingMovies" element={<TrendingMoviePage />} />
              </Routes>
            </ReviewContextProvider>
          </TvShowsContextProvider>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
