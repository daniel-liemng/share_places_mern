const errorHandlerMiddleware = (error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }

  res.status(error.code || 500);
  res.json({ message: error.message || "Ann unknown error occurred!" });
};

module.exports = errorHandlerMiddleware;
