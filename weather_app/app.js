const { geocode, forecast } = require("./utils");

const address = process.argv[2];

if (!address) {
  console.log(`Please provide an address`);
} else {
  geocode(address, (error, res) => {
    if (error) {
      return console.log(error);
    }

    forecast(res.latitude, res.longitude, (error, data) => {
      if (error) {
        return console.log(error);
      }
      console.log(res.location);
      console.log(data);
    });
  });
}
