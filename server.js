const express = require("express");
const compression = require("compression");
const PORT = process.env.PORT || 3001;
const db = require("./models");
const SeedBomb = require("./sql/seedBomb");
const app = express();

// Define middleware here
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(() => {

  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT
    );
  });
});

// { force: true }
//     return SeedBomb();
// }).then(() => {