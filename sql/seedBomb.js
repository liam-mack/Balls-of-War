const Lakers = require("./seeds/seedLakers");
const Rockets = require("./seeds/seedRockets");
const Heat = require("./seeds/seedHeat");
const Raptors = require("./seeds/seedRaptors");

module.exports = function() {
  return Promise.all([
    Lakers(), Rockets(), Heat(), Raptors()
  ]).then(() => {
    console.log("Seeded successfully")
  })
}