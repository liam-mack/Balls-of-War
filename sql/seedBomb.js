/* eslint-disable */
const Lakers = require("./seeds/seedLakers");
const Rockets = require("./seeds/seedRockets");
const Heat = require("./seeds/seedHeat");
const Raptors = require("./seeds/seedRaptors");

const seedBomb = function () {
  return Promise.all([
    Lakers(), Rockets(), Heat(), Raptors(),
  ]).then(() => {
    console.log("Seeded successfully");
  });
};

module.exports = seedBomb;
