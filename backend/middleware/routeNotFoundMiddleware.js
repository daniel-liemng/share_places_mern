const HttpError = require("../models/HttpErrorModel");

const routeNotFoundMiddleware = (req, res, next) => {
  const error = new HttpError("Cound not find this route", 404);
  throw error;
};

module.exports = routeNotFoundMiddleware;
