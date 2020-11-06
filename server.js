const express = require("express");
const session = require("express-session");
const compression = require("compression");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
const passport = require("./config/passport");
const db = require("./models");
// const SeedBomb = require("./scripts/seedBomb");

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(compression());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "where is hunter", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Define API routes here
app.use("/auth", require("./routes/auth"));
app.use("/api/game", require("./routes/game"));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Setup game state in nosql
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/wargame", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => {
  console.log("Mongo Database Connected");
}).catch((error) => {
  if (error) throw error;
});

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
