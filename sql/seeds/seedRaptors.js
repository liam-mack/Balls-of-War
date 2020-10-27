const db = require("../../models");

module.exports = async function() {
  return await db.Raptors.bulkCreate()
}