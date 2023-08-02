import React from "react";
import { useParams } from "react-router-dom";
import PageTemplate from "../components/templatePersonPage";
import PersonDetails from "../components/personDetails";
import { getPeopleImages } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const ActorDetailsPage = () => {
  const { id } = useParams();

  const { data: person, error, isLoading, isError } = useQuery(
    ["person", { id: id }],
    getPeopleImages
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  
  return (
    <>
      {person ? (
        <>
          <PageTemplate person={person}>
            <PersonDetails person={person} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for person's details</p>
      )}
    </>
  );
};

export default ActorDetailsPage;
