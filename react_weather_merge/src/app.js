const path = require("path");
const express = require("express");
const cors = require("cors");
const { geocode, forecast } = require("./utils");

const app = express();
app.use(cors());

//!do i need this here below?
app.use(express.json());

const publicDirectoryPath = path.join(__dirname, "client/build");

app.use(express.static(publicDirectoryPath));

app.get("/api/weather", (req, res) => {
  const add = req.query.address;
  if (!add) {
    return res.send({
      error: "you must provide a search term",
    });
  }
  geocode(add, (error, { latitude, longtitude, location } = {}) => {
    if (error) {
      return res.status(400).send({ error });
    }

    forecast(latitude, longtitude, (error, forecastData) => {
      if (error) {
        return res.status(400).send({ error });
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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
