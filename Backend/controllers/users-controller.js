const HttpError = require("../modules/http-error");
const uuid = require("uuid");
const { validationResult } = require("express-validator");
const User = require("../models/users");

const fetchUsersList = async (req, res, next) => {
  let users;
  try {
    users = await User.find({}, "-password");
  } catch (e) {
    return next(
      new HttpError("fetching user list failed, please try again", 500)
    );
  }
  res.json({ users: users.map((user) => user.toObject({ getters: true })) });
};

const addNewUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty) {
    throw new HttpError("Invalid input passed, please check your data", 422);
  }
  const { name, email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (e) {
    return next(new HttpError("Signing up failed, please try again!", 500));
  }

  if (existingUser) {
    return next(
      new HttpError("Could not create user, user already exist", 422)
    );
  }
  const newUser = new User({
    name,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    places: [],
    email,
    password,
  });
  try {
    await newUser.save();
  } catch (e) {
    return next(new HttpError("Signing up failed, please try again!", 500));
  }
  res.status(201).json({ user: newUser.toObject({ getters: true }) });
};

const login = async (req, res, next) => {
  const errors = validationResult(req.body);
  if (!errors.isEmpty) {
    throw new HttpError("Invalid input passed, please check your data", 422);
  }
  const { email, password } = req.body;
  let user;
  try {
    user = await User.findOne({ email: email });
  } catch (e) {
    return next(new HttpError("Login failed, please try again!", 500));
  }
  if (!user) {
    return next(new HttpError("User data not found", 404));
  } else if (user.password !== password) {
    return next(new HttpError("Password is invalid", 401));
  }
  res.status(201).json({ message: "Login successful" });
};

exports.fetchUsersList = fetchUsersList;
exports.addNewUser = addNewUser;
exports.login = login;
