import React from "react";
import RateReviewIcon from "@mui/icons-material/RateReview";
import { Link } from "react-router-dom";

const WriteTvShowReview = ({ tvShow }) => {
  return (
    <Link
      to={'/reviews/form'}
      state={{
          tvShowId: tvShow.id,
        }}
    >
      <RateReviewIcon color="primary" fontSize="large" />
    </Link>
  );
};

export default WriteTvShowReview;
