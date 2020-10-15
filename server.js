const express = require("express");
const logger = require("morgan");

const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const http = require("http").createServer(app);
const io = require("socket.io")(http);

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    console.log(`message: ${msg}`);
  });
});

// Socket io server start
http.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});

// Express server start
// app.listen(PORT, () => {
//   console.log(`App running on port ${PORT}!`);
// });
