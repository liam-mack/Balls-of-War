const path = require("path")
// const db = require("../models");

module.exports = function (app) {
  app.get("/", async (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
  })
}
