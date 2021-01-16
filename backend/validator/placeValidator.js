const { body, validationResult } = require("express-validator");

const createPlaceValidator = [
  body("title", "Title is required").not().isEmpty(),
  body("description", "Description is at least 5 characters long").isLength({
    min: 5,
  }),
  body("Address", "Address is required").not().isEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
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
