const express = require("express");
const bodyParser = require("body-parser");
const placesRouter = require("./routes/places-route");
const HttpError = require("./modules/http-error");

const app = express();

app.use(bodyParser.json());

app.use("/api/places/", placesRouter);

app.use((req, res, next) => {
  throw new HttpError("Could not found route for this request", 404);
});

app.use((error, req, res, next) => {
  if (res.headerSent) return next(error);
  res.status(error.code || 500);
  res.json(error.message || "An unknown error occured!");
});
app.listen(5000);
