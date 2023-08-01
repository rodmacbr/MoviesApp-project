import React, { useState } from "react";

export const ReviewContext = React.createContext(null);

const ReviewContextProvider = (props) => {
  const [reviews, setReviews] = useState([])

  const addReview = ({movie, tvShow, review}) => {
    review = {
        ...review,
        id: movie != null ? movie.id : tvShow.id,
        type: movie != null ? 'movie' : 'tvshow',
    };
    setReviews([
        ...reviews.filter((rvw) => !(rvw.id === review.id && rvw.type === review.type)),
        review,
    ]);
  };

 return (
    <ReviewContext.Provider
      value={{
        reviews,
        addReview,
      }}
    >
      {props.children}
    </ReviewContext.Provider>
  );
};

export default ReviewContextProvider;
