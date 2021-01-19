import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/place/PlaceList";
import Loading from "../components/shared/Loading";
import MessageCard from "../components/shared/MessageCard";
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
    return <MessageCard message={error} />;
  }

  return <PlaceList places={places} />;
};

export default UserPlaces;
