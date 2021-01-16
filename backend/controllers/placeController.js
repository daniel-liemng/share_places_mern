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
// @desc    Get a single place
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

// @route   POST api/users
// @desc    Get place by userId - creator
// @access  Public
const getPlaceByUserId = (req, res, next) => {
  const { userId } = req.params;

  const place = placeData.find((p) => p.creator === userId);

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

module.exports = { getPlaceByPlaceId, getPlaceByUserId };
