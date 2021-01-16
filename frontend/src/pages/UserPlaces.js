import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/place/PlaceList";

const placeData = [
  {
    id: "p1",
    title: "Empire State Building 1",
    description: "One of the tallest building",
    imgUrl:
      "https://www.tripsavvy.com/thmb/ReFZGQNAplVtAoqej_A4kt44bxo=/800x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/empire-state-building-at-dusk-new-york-city-usa-668600131-590f0a5b5f9b5864701d53f4.jpg",
    address: "20 W 34th St, New York, NY 10001, United States",
    location: {
      lat: 40.7484405,
      lng: -73.9878531,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building 2",
    description: "One of the tallest building",
    imgUrl:
      "https://www.tripsavvy.com/thmb/ReFZGQNAplVtAoqej_A4kt44bxo=/800x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/empire-state-building-at-dusk-new-york-city-usa-668600131-590f0a5b5f9b5864701d53f4.jpg",
    address: "20 W 34th St, New York, NY 10001, United States",
    location: {
      lat: 40.7484405,
      lng: -73.9878531,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const { userId } = useParams();

  const loadedPlaces = placeData.filter((place) => place.creator === userId);

  return <PlaceList places={loadedPlaces} />;
};

export default UserPlaces;
