const db = require("../models");

module.exports = function(app) {

app.get("/api/lakers", async (req, res) => {
    const deck = await db.Lakers.findAll({});
    console.log(deck);
    res.json(deck);
  })
}