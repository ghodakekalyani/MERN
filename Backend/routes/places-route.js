const express = require("express");
const placeControllers = require("../controllers/places-controller");
const router = express.Router();

router.get("/:pid", placeControllers.getPlaceByPlaceId);

router.get("/user/:uid", placeControllers.getPlacesByUserId);

router.post("/", placeControllers.createPlace);

router.patch("/:pid", placeControllers.updatePlaceById);

router.delete("/:pid", placeControllers.deletePlaceById);

module.exports = router;
