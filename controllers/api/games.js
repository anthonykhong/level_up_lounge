const fetch = require("node-fetch");

async function getGames() {
  try {
    const response = await fetch("https://www.freetogame.com/api/games");
    const games = await response.json();
    return games;
  } catch (error) {
    console.error("Error occurred while fetching games: ", error.message);
    throw error;
  }
}

module.exports = { getGames };
