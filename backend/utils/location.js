const axios = require("axios");

const HttpError = require("../models/HttpErrorModel");

const getCoordsForAddress = async (address) => {
  // const { data } = await axios.get(
  //   `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
  //     address
  //   )}&key=${process.env.GOOGLE_API_KEY}`
  // );

  // if (!data || data.status === "ZERO_RESULTS") {
  //   const error = new HttpError(
  //     "Could not find location for the specified address",
  //     422
  //   );

  //   throw error;
  // }

  // // Get lat & lng
  // const coordinates = data.results[0].geometry.location;

  // return coordinates;

  return {
    lat: 40.748558,
    lng: -73.9857578,
  };
};

module.exports = getCoordsForAddress;
