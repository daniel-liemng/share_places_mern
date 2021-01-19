import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/place/PlaceList";
import Loading from "../components/shared/Loading";
import { useAppContext } from "../context/AppContext";

const UserPlaces = () => {
  const { userId } = useParams();

  const { loading, error, getPlacesByUser, places } = useAppContext();

  useEffect(() => {
    getPlacesByUser(userId);
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <h3 className='text-danger'>{error}</h3>;
  }

  return <PlaceList places={places} />;
};

export default UserPlaces;
