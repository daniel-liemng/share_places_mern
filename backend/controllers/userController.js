const HttpError = require("../models/HttpErrorModel");
const User = require("../models/User");

// @route   GET api/users
// @desc    Get all users
// @access  Public
const getAllUsers = async (req, res) => {
  res.json();
};

// @route   POST api/users/signup
// @desc    Sign up
// @access  Public
const signup = async (req, res) => {
  const { name, email, password } = req.body;

  const newUser = { name, email, password };

  res.status(201).json();
};

// @route   POST api/users/login
// @desc    Login
// @access  Public
const login = async (req, res) => {
  const { email, password } = req.body;

  res.json();
};

module.exports = { getAllUsers, signup, login };
