const db = require("../models");

module.exports = function (app) {
  app.get("/api/lakers", async (req, res) => {
    const deck = await db.Lakers.findAll({});
    console.log(deck);
    res.json(deck);
  });

  app.post("/api/lakers", async (req, res) => {
    const player = await db.Lakers.create({
    // id: uuidv4(),
      name: "Shamik",
      position: "SG",
      jersey: 2,
      height: "6'4",
      weight: 280,
      points: 32,
      fieldgoal: 0.45,
      rebounds: 11,
      assists: 12,
      personalfouls: 0.2,
      image: null,
    });
    res.json(player);
    console.log(player);
  });
};
