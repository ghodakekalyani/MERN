const HttpError = require("../modules/http-error");
const { validationResult } = require("express-validator");
const mongoose = require("mongoose");
const uuid = require("uuid");
const getCordsForAddress = require("../util/location");
const Place = require("../models/places");
const User = require("../models/users");

const getPlaceByPlaceId = async (req, res, next) => {
  const placeId = req.params.pid;
  let place;
  try {
    place = await Place.findById(placeId);
  } catch (e) {
    const error = new HttpError("Something went wrong, please try again!", 500);
    return next(error);
  }

  if (!place) {
    const error = new HttpError("NO place found for provided place id", 404);
    return next(error);
  }
  res.json({ place: place.toObject({ getters: true }) });
};

const getPlacesByUserId = async (req, res, next) => {
  const userId = req.params.uid;
  let places;
  try {
    places = await Place.find({ creator: userId });
  } catch (e) {
    const error = new HttpError(
      "Fetching places failed, please try again!",
      500
    );
    return next(error);
  }
  if (places.length === 0) {
    return next(
      new HttpError("Could not find places for provided user id", 404)
    );
  }
  res.json({ places: places.toObject({ getters: true }) });
};

const createPlace = async (req, res, next) => {
  const errors = validationResult(req.body);
  if (!errors.isEmpty) {
    throw new HttpError("Invalid input passed, please check your data", 422);
  }
  const { title, creator, description, address, imageUrl } = req.body;
  let coordinates;
  try {
    coordinates = await getCordsForAddress(address);
  } catch (error) {
    throw error;
  }
  let user;
  try {
    user = await User.findById(creator);
  } catch (e) {
    return next(new HttpError("Creating place failed, please try again", 404));
  }

  if (!user) {
    return next(new HttpError("Could not find user for provided id", 404));
  }

  const newPlace = new Place({
    title,
    creator,
    location: coordinates,
    image: imageUrl,
    description,
    address,
  });
  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await newPlace.save({ session: sess });
    user.places.push(newPlace);
    await user.save({ session: sess });
    await sess.commitTransaction();
  } catch (e) {
    const error = new HttpError(
      "Creating place failed, please try again!",
      500
    );
    return next(error);
  }
  res.status(201).json({ place: newPlace });
};

const updatePlaceById = async (req, res, next) => {
  const errors = validationResult(req.body);
  if (!errors.isEmpty) {
    next(new HttpError("Invalid input passed, please check your data", 422));
  }
  const { title, description } = req.body;
  const placeId = req.params.pid;
  let place;
  try {
    place = await Place.findById(placeId);
  } catch (e) {
    return next(
      new HttpError(
        "Could not find place for provided id, please try again!",
        404
      )
    );
  }
  place.title = title;
  place.description = description;
  try {
    await place.save();
  } catch (e) {
    return next(
      new HttpError(
        "Could not update place for provided id, please try again!",
        500
      )
    );
  }
  res.status(200).json({ place: place.toObject({ getters: true }) });
};

const deletePlaceById = async (req, res, next) => {
  const placeId = req.params.pid;
  let place;
  try {
    place = await Place.deleteOne({ _id: placeId });
  } catch (e) {
    return next(new HttpError("Something went wrong, please try again", 500));
  }
  res.status(200).json({
    message: "Deleted place",
  });
};

exports.getPlaceByPlaceId = getPlaceByPlaceId;
exports.getPlacesByUserId = getPlacesByUserId;
exports.createPlace = createPlace;
exports.updatePlaceById = updatePlaceById;
exports.deletePlaceById = deletePlaceById;
