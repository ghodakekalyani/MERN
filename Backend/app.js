const express = require("express");
const bodyParser = require("body-parser");
const placesRouter = require("./routes/places-route");
const usersRouter = require("./routes/users-route");
const HttpError = require("./modules/http-error");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/places/", placesRouter);
app.use("/api/users/", usersRouter);

app.use((req, res, next) => {
  throw new HttpError("Could not found route for this request", 404);
});

app.use((error, req, res, next) => {
  if (res.headerSent) return next(error);
  res.status(error.code || 500);
  res.json(error.message || "An unknown error occured!");
});

mongoose
  .connect(
    "mongodb+srv://kalyani:pacH9dwErmjztYaW@cluster0.2gfgh.mongodb.net/MERN_Project?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .catch((e) => {
    throw new HttpError("Could not connect to database!");
  });
