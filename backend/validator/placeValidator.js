const { body, validationResult } = require("express-validator");

const HttpError = require("../models/HttpErrorModel");

const createPlaceValidator = [
  body("title", "Title is required").not().isEmpty(),
  body("description", "Description is at least 5 characters long").isLength({
    min: 5,
  }),
  body("address", "Address is required").not().isEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });

      // Next to use Google Map API
      // next(new HttpError("Invalid inputs passed, please check your data", 422));
    }
    next();
  },
];

const updatePlaceValidator = [
  body("title", "Title is required").not().isEmpty(),
  body("description", "Description is at least 5 characters long").isLength({
    min: 5,
  }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { createPlaceValidator, updatePlaceValidator };
