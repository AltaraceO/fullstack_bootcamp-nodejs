const express = require("express");
var cors = require("cors");
const { geocode, forecast } = require("./utils");

const app = express();
app.use(cors());

app.get("/weather", (req, res) => {
  console.log(req.query);
  const add = req.query.address;
  if (!add) {
    return res.send({
      error: "you must provide a search term",
    });
  }
  geocode(add, (error, { latitude, longtitude, location } = {}) => {
    if (error) {
      return res.send({ error });
    }

    forecast(latitude, longtitude, (error, forecastData) => {
      if (error) {
        return res.send({ error });
      }

      res.send({
        forecast: forecastData,
        location,
        address: add,
      });
    });
  });
});

app.get("*", (req, res) => {
  res.render("errors", {
    errorMsg: "4-0-4 n Ot fOu Nd",
  });
});

app.listen(5000, () => {
  console.log("server is up on port 5000");
});
