/* eslint-disable */
const Lakers = require("./seeds/seedLakers");
const Rockets = require("./seeds/seedRockets");
const Heat = require("./seeds/seedHeat");
const Raptors = require("./seeds/seedRaptors");

const seedBomb = function () {
  db.sequelize.sync({ force: true }).then(() => {
    return Promise.all([
      Lakers(), Rockets(), Heat(), Raptors(),
    ])
  }).then(() => {
    console.log("Seeds planted");
  }).catch((error) => {
    if (error) throw error;
  });
};

module.exports = seedBomb;
