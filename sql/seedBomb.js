const Lakers = require("./seeds/seedLakers");
const Rockets = require("./seeds/seedRockets");

module.exports = function() {
  return Promise.all([
    Lakers(), Rockets()
  ]).then(() => {
    console.log("Seeded successfully")
  })
}