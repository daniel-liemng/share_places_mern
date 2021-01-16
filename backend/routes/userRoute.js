const userController = require("../controllers/userController");
const { userSignupValidator } = require("../validator/userValidator");

const router = require("express").Router();

// @route   GET api/users
// @desc    Get all users
// @access  Public
router.get("/", userController.getAllUsers);

// @route   POST api/users/signup
// @desc    Sign up
// @access  Public
router.post("/signup", userSignupValidator, userController.signup);

// @route   POST api/users/login
// @desc    Login
// @access  Public
router.post("/login", userController.login);

module.exports = router;
