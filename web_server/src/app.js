const path = require("path");
const express = require("express");
const hbs = require("hbs");
const { geocode, forecast } = require("./utils");

const app = express();

//! how to get a route to the index.html
// console.log(__dirname); 2_ _)underscores
// console.log(path.join(__dirname, "../public"));
//?define pathes for express config
const publicDir = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialPaths = path.join(__dirname, "../templates/partials");

// Getting Handlebars set-up after npm i hbs
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialPaths);

//setup static directory to serve
app.use(express.static(publicDir));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Ori Altarace",
  });
});
app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Ori Altarace",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "help!!",
    name: "Ori Altarace",
  });
});

//!Below is rudundant because of above
// app.get("", (req, res) => {
//   res.send(" <h1> WELCOME TO MY PAGE!!!</h1> ");
// });

// app.get("/help", (req, res) => {
//   res.send([
//     {
//       name: "Ori",
//       pet: "Biscuit",
//     },
//     {
//       name: "Liad",
//       pet: "Biscuit",
//     },
//   ]);
// });

app.get("/weather", (req, res) => {
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

//app.com <-- get expl. above is root
//app.com/help
//app.com/about

//!not found specifically under help ...
app.get("/help/*", (req, res) => {
  res.render("errors", {
    errorMsg: "Help article not found",
  });
});

//!this has to come last to be the last option after all others were checked

app.get("*", (req, res) => {
  res.render("errors", {
    errorMsg: "4-0-4 n Ot fOu Nd",
  });
});

app.listen(3000, () => {
  console.log("server is up on port 3000");
});
