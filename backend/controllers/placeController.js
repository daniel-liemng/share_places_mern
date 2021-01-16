const HttpError = require("../models/HttpErrorModel");
const Place = require("../models/Place");

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

// @route   GET api/places/:placeId
// @desc    Get place by placeId - singlePlace
// @access  Public
const getPlaceByPlaceId = (req, res) => {
  const { placeId } = req.params;

  const place = placeData.find((p) => p.id === placeId);

  // if (!place) {
  //   const error = new Error("Could not find a place with the placeId");
  //   error.code = 404;
  //   throw error;
  // }

  if (!place) {
    throw new HttpError("Not found PLACEId", 404);
  }

  res.json(place);
};

// @route   GET api/places/user/:userId
// @desc    Get all places of a user by userId - creator
// @access  Public
const getPlacesByUserId = (req, res, next) => {
  const { userId } = req.params;

  const place = placeData.filter((p) => p.creator === userId);

  // if (!place) {
  //   const error = new Error("Could not find a place with the userId");
  //   error.code = 404;
  //   return next(error);
  // }

  if (!place) {
    return next(new HttpError("Not found userId", 404));
  }

  res.json(place);
};

// @route   POST api/places
// @desc    Create new place
// @access  Public
const createPlace = async (req, res) => {
  const { title, description, coordinates, address, creator } = req.body;

  const newPlace = {
    title,
    description,
    location: coordinates,
    address,
    creator,
  };

  res.status(201).json({ place: newPlace });
};

// @route   PATCH api/places/:placeId
// @desc    Update place
// @access  Public
//// PATCH - update some certain fields
const updatePlace = async (req, res) => {
  // Only allow update title & description
  const { title, description } = req.body;

  const { placeId } = req.params;

  //// UPDATE
  // 1. Find the updatePlace
  // 2. Find its index
  // 3. Make change on certain fields
  // 4. Replace with the updatePlace

  const updatedPlace = { ...placeData.find((p) => p.id === placeId) };

  const placeIndex = placeData.findIndex((p) => p.id === placeId);

  updatedPlace.title = title;
  updatedPlace.description = description;

  placeData[placeIndex] = updatedPlace;

  res.status(200).json({ place: updatedPlace });
};

// @route   DELETE api/places/:placeId
// @desc    Delete place
// @access  Public
const deletePlace = async (req, res) => {
  const { placeId } = req.params;
};

module.exports = {
  getPlaceByPlaceId,
  getPlacesByUserId,
  createPlace,
  updatePlace,
  deletePlace,
};
