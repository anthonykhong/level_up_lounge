import React from "react";
import GameCard from "../../components/GameCard/GameCard";

export default function GameList({ games }) {
  return (
    <div>
      {games.map((game, idx) => (
        <GameCard game={game} key={idx} />
      ))}
    </div>
  );
}
