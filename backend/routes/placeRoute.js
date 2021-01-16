const placeController = require("../controllers/placeController");

const HttpError = require("../models/HttpErrorModel");

const router = require("express").Router();

// @route   GET api/places/:placeId
// @desc    Get place by placeId - singlePlace
// @access  Public
router.get("/:placeId", placeController.getPlaceByPlaceId);

// @route   GET api/places/user/:userId
// @desc    Get place by userId - creator
// @access  Public
router.get("/user/:userId", placeController.getPlacesByUserId);

// @route   POST api/places
// @desc    Create new place
// @access  Public
router.get("/", placeController.createPlace);

// @route   PATCH api/places/:placeId
// @desc    Update place
// @access  Public
router.patch("/:placeId", placeController.updatePlace);

// @route   DELETE api/places/:placeId
// @desc    Delete place
// @access  Public
router.delete("/:placeId", placeController.deletePlace);

module.exports = router;
