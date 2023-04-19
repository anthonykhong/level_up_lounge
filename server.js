const express = require("express");
const path = require("path");
const logger = require("morgan");
require("dotenv").config();
require("./config/database");
const http = require("http");
const Games = require("./models/game");
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "dist")));

app.use(require("./config/checkTokens"));

app.use("/api/users", require("./routes/api/users"));

app.get("/api/games", async (req, res) => {
  try {
    const games = await Games.find();
    res.json(games);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

const ensureLoggedIn = require("./config/ensureLoggedIn");
app.use("/api/posts/", ensureLoggedIn, require("./routes/api/comments"));
app.use("/api/posts", ensureLoggedIn, require("./routes/api/posts"));

// Error handler to check if route exists
app.use(function (req, res) {
  console.log(`route: ${req.path} does not exist`);
  res.status(404, "route does not exist");
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});

const server = http.createServer(app);
require("./io").init(server);
