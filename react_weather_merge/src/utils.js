const request = require("request");
const keys = require("../config/keys");

const geocode = (address, callback) => {
  console.log(keys.GEO_API);
  const urlMap = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${keys.GEO_API}&limit=1`;

  request({ url: urlMap, json: true }, (error, response) => {
    if (error) {
      callback("unable", undefined);
    } else if (response.body.features.length === 0) {
      callback("unable", undefined);
    } else {
      const latitude = response.body.features[0].center[1];
      const longitude = response.body.features[0].center[0];
      const location = response.body.features[0].place_name;
      callback(undefined, {
        latitude,
        longitude,
        location,
      });
    }
  });
};

const forecast = (lat, long, func) => {
  console.log(long);
  console.log(lat);
  console.log(keys.WEATHER_API);
  const url = `http://api.weatherstack.com/current?access_key=${keys.WEATHER_API}&query=${lat},${long}&units=m`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      func(`there's an error`);
    } else if (response.body.error) {
      console.log(response.body.error.info);
      func(`somthin's wrong with yo location`);
    } else {
      func(
        undefined,
        `${response.body.current.weather_descriptions[0]}. the temperature is ${response.body.current.temperature} and feels like ${response.body.current.feelslike}`
      );
    }
  });
};

module.exports = {
  geocode,
  forecast,
};
