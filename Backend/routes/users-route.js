const express = require("express");
const { check } = require("express-validator");
const usersController = require("../controllers/users-controller");
const Router = express.Router();

Router.get("/", usersController.fetchUsersList);

Router.post(
  "/signup",
  [
    check("email").normalizeEmail().isEmail(),
    check("name").not().isEmpty(),
    check("password").not().isEmpty().isLength({ min: 5 }),
  ],
  usersController.addNewUser
);

Router.post(
  "/login",
  [
    check("userName").not().isEmpty(),
    check("password").not().isEmpty().isLength({ min: 8 }),
  ],
  usersController.login
);

module.exports = Router;
