/* eslint-disable */
const express = require("express");
const session = require("express-session");
const compression = require("compression");
const passport = require("./config/passport");
const mongoose = require("mongoose");
const morgan = require("morgan");
const db = require("./models");
// const SeedBomb = require("./sql/seedBomb");

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(compression());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true }),
);
app.use(passport.initialize());
app.use(passport.session());

// Define API routes here
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT,
    );
  });
}).catch((error) => {
  if (error) throw error;
});

// { force: true }
// return SeedBomb();
// }).then(() => {

// Setup game state in nosql
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/wargame", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => {
  console.log("Mongo Database Connected");
});