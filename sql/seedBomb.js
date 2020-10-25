const Lakers = require("./seeds/seedLakers")

module.exports = function() {
  return Promise.all([
    Lakers()
  ]).then(() => {
    console.log("Seeded successfully")
  })
}