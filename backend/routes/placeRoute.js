const placeController = require("../controllers/placeController");

const HttpError = require("../models/HttpErrorModel");

const router = require("express").Router();

// @route   GET api/places/:placeId
// @desc    Get a single place
// @access  Public
router.get("/:placeId", placeController.getPlaceByPlaceId);

// @route   GET api/places/user/:userId
// @desc    Get place by userId - creator
// @access  Public
router.get("/user/:userId", placeController.getPlaceByUserId);

module.exports = router;
