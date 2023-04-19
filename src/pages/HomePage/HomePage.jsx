import React, { useState, useEffect } from "react";
import * as gamesAPI from "../../utilities/games-api";
import GameList from "../GameList/GameList";

export default function HomePage() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function fetchGames() {
      const games = await gamesAPI.getGames();
      setGames(games);
    }
    fetchGames();
  }, []);

  return (
    <div className="flex justify-center flex-col items-center m-10">
      <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black">
        Level Up Lounge
      </h1>
      <div className="my-5">
        <GameList games={games} />
      </div>
    </div>
  );
}
