const express = require("express");
const router = express.Router();
const gamesCtrl = require("../../controllers/api/games");

router.use("/", gamesCtrl.getGames);
