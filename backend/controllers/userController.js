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
const signup = async (req, res, next) => {
  const { name, email, password, places } = req.body;

  let existingUser;

  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    // throw new HttpError("Signup failed, try later", 500);
    return next(new HttpError("Signup failed, try later", 500));
  }

  if (existingUser) {
    // throw new HttpError("User exists already, please login instead.", 422);
    return next(
      new HttpError("User exists already, please login instead.", 422)
    );
  }

  const createdUser = new User({
    name,
    email,
    image:
      "https://i2.wp.com/digital-photography-school.com/wp-content/uploads/2011/07/outdoor-portraits-1.jpg?resize=2000%2C1160&ssl=1",
    password,
    places,
  });

  try {
    await createdUser.save();
  } catch (err) {
    // throw new HttpError("Signup failed, try later", 500);
    return next(new HttpError("Signup failed, try later", 500));
  }

  res.status(201).json({ user: createdUser });
};

// @route   POST api/users/login
// @desc    Login
// @access  Public
const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;

  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return next(new HttpError("Login failed, try later", 500));
  }

  if (!existingUser || existingUser.password !== password) {
    return next(new HttpError("Invalid credentials, could not log in", 401));
  }

  res.json({ message: "Logged In" });
};

module.exports = { getAllUsers, signup, login };
