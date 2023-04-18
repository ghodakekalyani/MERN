const HttpError = require("../modules/http-error");
const uuid = require("uuid");
const { validationResult } = require("express-validator");

const users = [
  {
    id: "u1",
    name: "kalyani k ghodake",
    image:
      "https://i.natgeofe.com/k/5af79b71-007d-46f8-8efe-bf37a504195b/california-golden-gate-bridge.jpg",
    places: 3,
    password: "hithere",
    email: "kalyanikghodake2013@gmail.com",
  },
  {
    id: "u2",
    name: "kalyani ghodake",
    image:
      "https://fox40.com/wp-content/uploads/sites/13/2022/07/GettyImages-1308695861.jpg?strip=1",
    places: 1,
    email: "kalyani.ghodake2013@gmail.com",
  },
];

const fetchUsersList = (req, res, next) => {
  res.json({ users });
};

const addNewUser = (req, res, next) => {
  const errors = validationResult(req.body);
  if (!errors.isEmpty) {
    throw new HttpError("Invalid input passed, please check your data", 422);
  }
  const { name, image, places, email } = req.body;
  const hasUser = users.find((u) => u.email === email);
  if (hasUser) {
    throw new HttpError("Could not create user, user already exist", 401);
  }
  const newUser = {
    id: uuid.v4(),
    name,
    image,
    places,
    email,
  };
  users.push(newUser);
  res.status(201).json({ user: newUser });
};

const login = (req, res, next) => {
  const errors = validationResult(req.body);
  if (!errors.isEmpty) {
    throw new HttpError("Invalid input passed, please check your data", 422);
  }
  const { userName, password } = req.body;
  const user = users.find((u) => u.email === userName);
  if (!user) {
    throw new HttpError("User data not found", 404);
  } else if (user.password !== password) {
    console.log("user.password", user.password, password);
    throw new HttpError("Password is invalid", 401);
  }
  res.status(201).json("Login successful");
};

exports.fetchUsersList = fetchUsersList;
exports.addNewUser = addNewUser;
exports.login = login;
