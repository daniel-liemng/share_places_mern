class HttpError extends Error {
  constructor(message, errorCode) {
    super(message); // Add a 'message' property to the Error instance
    this.code = errorCode; // Add a 'code' property to the Error instance
  }
}

module.exports = HttpError;
