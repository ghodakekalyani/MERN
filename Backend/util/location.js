const HttpError = require("../modules/http-error");
const axios = require("axios");
const API_KEY = "AIzaSyCxXyZ36z5jIfxBuuyvI8knvirYy6M_2Ms";

const getCordsForAddress = async (address) => {
  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=${API_KEY}`
  );

  const data = response.data;
  if (!data || data.status === "ZERO_RESULTS") {
    const error = new HttpError(
      "Could not find location for this specified address",
      422
    );
    throw error;
  }
  return data.results[0].geometry.location;
};

module.exports = getCordsForAddress;
