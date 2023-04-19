import React, { useState, useEffect } from "react";

export default function HomePage() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function getGames() {
      const gameData = await fetch(
        "http://www.freetogame.com/api/games?platform=pc"
      );
      const gamesJson = await gameData.json();
      console.log(gamesJson);
      setGames(gamesJson);
    }
    getGames();
  }, []);

  return (
    <div className="flex justify-center items-center m-10">
      <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black">
        Level Up Lounge
      </h1>

      <div className="my-5">
        <ul>
          {games.map((game) => (
            <li key={game.id}>
              <h3>{game.title}</h3>
              <img src={game.thumbnail} alt={game.title} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
