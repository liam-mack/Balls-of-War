/* eslint-disable */
const Lakers = require("./seeds/seedLakers");
const Rockets = require("./seeds/seedRockets");
const Heat = require("./seeds/seedHeat");
const Raptors = require("./seeds/seedRaptors");

const seedBomb = function () {
  // db.sequelize.sync({ force: true }).then(() => {
  try {
    console.log("seeding");
    return Promise.all([
        Lakers(), Rockets(), Heat(), Raptors(), 
      ])
  } catch (error) {
    if (error) throw error;
  }
};

module.exports = seedBomb;
