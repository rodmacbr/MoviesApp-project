import React, { useState, useEffect } from "react";

export const TvShowsContext = React.createContext(null);

const TvShowsContextProvider = (props) => {
  const [myTvShowReviews, setMyTvShowReviews] = useState({});
  const [tvShowFavourites, setTvShowFavourites] = useState([]);

  useEffect(() => {
    console.log("Tv Show Favourites:", tvShowFavourites);
  }, [tvShowFavourites]);

  const addTvShowToFavourites = (tvShow) => {
    let updatedTvShowFavourites = [...tvShowFavourites];
    if (!tvShowFavourites.includes(tvShow.id)) {
      updatedTvShowFavourites.push(tvShow.id);
    }
    setTvShowFavourites(updatedTvShowFavourites);
  };

  const removeTvShowFromFavourites = (tvShow) => {
    setTvShowFavourites(tvShowFavourites.filter((mId) => mId !== tvShow.id));  
  };

  const addTvShowReview = (tvShow, tvShowReview) => {
    setMyTvShowReviews({ ...myTvShowReviews, [tvShow.id]: tvShowReview });
  };

  return (
    <TvShowsContext.Provider
      value={{
        tvShowFavourites,
        addTvShowToFavourites,
        removeTvShowFromFavourites,
        addTvShowReview,
      }}
    >
      {props.children}
    </TvShowsContext.Provider>
  );
};

export default TvShowsContextProvider;

