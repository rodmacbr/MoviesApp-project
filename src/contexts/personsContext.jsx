import React, { useState } from "react";

export const PersonsContext = React.createContext(null);

const PersonsContextProvider = (props) => {
  const [myReviews, setMyReviews] = useState( {} )
  const [favourites, setFavourites] = useState([]);

  const addToFavourites = (actor) => {
    let updatedFavourites = [...favourites];
    if (!favourites.includes(actor.id)) {
      updatedFavourites.push(actor.id);
    }
    setFavourites(updatedFavourites);
  };

  // We will use this function in a later section
  const removeFromFavourites = (actor) => {
    setFavourites(favourites.filter((mId) => mId !== actor.id));
  };

  const addReview = (actor, review) => {
    setMyReviews( {...myReviews, [actor.id]: review } )
  };

 return (
    <PersonsContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        addReview,
      }}
    >
      {props.children}
    </PersonsContext.Provider>
  );
};

export default PersonsContextProvider;
